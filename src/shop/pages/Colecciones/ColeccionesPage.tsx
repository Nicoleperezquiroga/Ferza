import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomCategorias } from "@/shop/Components/CustomCategorias"
import { CustomJumbotron } from "@/shop/Components/CustomJumbotron"
import { ProductsGrid } from "@/shop/Components/ProductsGrid"
import { useParams } from "react-router"

//MOSTRAR PRODUCTOS POR GENERO
export const ColeccionesPage = () => {
    const {coleccion} = useParams();
    const coleccionLabel = coleccion === 'mar'? 'Mar': coleccion === 'floripia'? 'Floripia':'Crochet';
    return (
        <>
            <CustomJumbotron title={`Colección ${coleccionLabel}`} />
            <CustomCategorias/>
            <ProductsGrid products={products}/>
        </>
    )
}