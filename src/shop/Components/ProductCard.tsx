import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Imagen } from "@/mocks/products.mock";
import { DetalleProducto } from "./DetalleProducto";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imagenes: Imagen[];
  category: string;
}

const ProductCard = ({ id, name, price, imagenes, category }: ProductCardProps) => {



  return (
    <div>
      <Card className="group min-w-[200px] w-full border-0 shadow-none product-card-hover p-0">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-muted rounded-lg">
            <img
              src={imagenes[0].imagen}
              alt={imagenes[0].name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="image-overlay" />
          </div>

          <div className="pt-6 px-4 pb-4 space-y-3">
            <div className="space-y-1">
              <h3 className="font-medium text-sm tracking-tight">{name}</h3>
              <p className="text-xs text-muted-foreground uppercase">{category}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">${price}</p>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
                  Ver más
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Mat Surf</DialogTitle>
                  </DialogHeader>
                  <DetalleProducto imagenes={imagenes} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>

  );
};

export default ProductCard;