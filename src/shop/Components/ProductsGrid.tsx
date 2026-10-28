import type { Product } from '@/mocks/products.mock';
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useParams, useSearchParams } from 'react-router';
import { DetalleProducto } from './DetalleProducto';

interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products }: Props) => {

  const { coleccion } = useParams();

  const [productoFiltrado, setProductoFiltrado] =
    useState<Product[]>([]);

  useEffect(() => {
    const resultado = products.filter(
      (producto) =>
        producto.category.toLowerCase() === coleccion?.toLowerCase()
    );

    setProductoFiltrado(resultado);
  }, [products, coleccion]);

  return (
    <div>      {/* Products Section */}
      <section className="py-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-light">Productos</h2>
              <span className="text-muted-foreground">({productoFiltrado.length} productos)</span>
            </div>
          </div>
          <div className="flex gap-8">
            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productoFiltrado.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    imagenes={product.imagenes}
                    category={product.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}
