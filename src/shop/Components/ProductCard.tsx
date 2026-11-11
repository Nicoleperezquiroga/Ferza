
import { useState, lazy, Suspense } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Imagen } from "@/mocks/products.mock";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imagenes: Imagen[];
  category: string;
  description: string;
}

// Carga diferida del detalle del producto
const ProductDetailDialog = lazy(() =>
  import("./ProductDetailDialog").then((m) => ({
    default: m.ProductDetailDialog,
  }))
);

const ProductCard = ({
  name,
  price,
  imagenes,
  description,
}: ProductCardProps) => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card className="group min-w-[200px] w-full border-0 product-card-hover p-0">
        <CardContent className="p-0">

          <div className="relative aspect-square overflow-hidden bg-muted rounded-lg">
            <img
              src={imagenes[0].imagen}
              alt={imagenes[0].name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="image-overlay" />
          </div>

          <div className="pt-6 px-4 pb-4 space-y-3">
            <h3 className="font-medium text-sm tracking-tight">
              {name}
            </h3>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">
                ${price}
              </p>

              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => setOpen(true)}
              >
                Ver más
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {open && (
        <Suspense fallback={null}>
          <ProductDetailDialog
            open={open}
            onOpenChange={setOpen}
            name={name}
            price={price}
            imagenes={imagenes}
            description={description}
          />
        </Suspense>
      )}
    </div>
  );
};

export default ProductCard;
