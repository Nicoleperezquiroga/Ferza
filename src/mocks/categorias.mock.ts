// Import all product images
import catMar from "@/shop/assets/home/catMar.webp";
import catFloripia from "@/shop/assets/home/catFloripia.webp";
import catCrochet from "@/shop/assets/home/catCrochet.webp";

export interface Categoria {
  id: string;
  name: string;
  image: string;
  descripcion: string;
  habilitado: boolean;
}

export const categorias: Categoria[] = [
  {
    id: "1",
    name: "Mar",
    image: catMar,
    descripcion:"Inspirada en el mar",
    habilitado: true,
  },
  {
    id: "2",
    name: "Floripia",
    image: catFloripia,
    descripcion:"Inspirada en las flores",
    habilitado: true,
  },
    {
    id: "3",
    name: "Crochet",
    image: catCrochet,
    descripcion:"Inspirada crochet",
    habilitado: true,
  },
];