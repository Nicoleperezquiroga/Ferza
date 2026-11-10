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
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imagenes: Imagen[];
  category: string;
  description: string
}

const ProductCard = ({ name, price, imagenes, description }: ProductCardProps) => {



  return (
    <div>
      <Card className="group min-w-[200px] w-full border-0 product-card-hover p-0">
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
            </div>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">${price}</p>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
                  Ver más
                </DialogTrigger>
                <DialogContent className="
                    w-[95vw]
                    max-w-[1100px]
                    sm:max-w-[1100px]
                    max-h-[90vh]
                    overflow-y-auto
                    p-8
                  ">
                  <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8">
                    {/* Galería */}
                    <div className="w-full min-w-0">
                      <DetalleProducto imagenes={imagenes} />
                    </div>
                    {/* Información */}
                    <div className="min-w-0 flex flex-col gap-5">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold">
                          {name}
                        </DialogTitle>
                      </DialogHeader>
                      <p>${price} CLP</p>
                      <div className="text-sm leading-7 text-[#786049]">
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          components={{
                            p: ({ children }) => (
                              <p className="mb-4">{children}</p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-semibold text-[#30251F]">
                                {children}
                              </strong>
                            ),
                            hr: () => (
                              <hr className="my-5 border-[#E8D8C7]" />
                            ),
                          }}
                        >
                          {description}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
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