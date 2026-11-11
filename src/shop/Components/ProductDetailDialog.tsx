
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { DetalleProducto } from "./DetalleProducto";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import type { Imagen } from "@/mocks/products.mock";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  price: number;
  imagenes: Imagen[];
  description: string;
}

export const ProductDetailDialog = ({
  open,
  onOpenChange,
  name,
  price,
  imagenes,
  description,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[95vw]
          max-w-[1100px]
          sm:max-w-[1100px]
          max-h-[90vh]
          overflow-y-auto
          p-8
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8">
          <div className="w-full min-w-0">
            <DetalleProducto imagenes={imagenes} />
          </div>

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
  );
};
