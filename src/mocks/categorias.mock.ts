// Import all product images
import catMar from "@/shop/assets/home/catMar.png";
import catFloripia from "@/shop/assets/home/catFloripia.png";
import catCrochet from "@/shop/assets/home/catCrochet.png";

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