// Import all product images
import catMar from "@/shop/assets/home/catMar.png";
import catFloripia from "@/shop/assets/home/catFloripia.png";
import catCrochet from "@/shop/assets/home/catCrochet.png";

export interface Categoria {
  id: string;
  name: string;
  image: string;
  habilitado: boolean;
}

export const categorias: Categoria[] = [
  {
    id: "1",
    name: "Mar",
    image: catMar,
    habilitado: true,
  },
  {
    id: "2",
    name: "Floripia",
    image: catFloripia,
    habilitado: true,
  },
    {
    id: "3",
    name: "Crochet",
    image: catCrochet,
    habilitado: true,
  },
];