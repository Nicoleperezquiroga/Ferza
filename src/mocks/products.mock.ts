// Import all product images
import MatSurf1 from "@/shop/assets/home/MatSurf/Mat_Surf_1.jpeg";
import MatSurf2 from "@/shop/assets/home/MatSurf/Mat_Surf_2.jpeg";
import MatSurf3 from "@/shop/assets/home/MatSurf/Mat_Surf_3.jpeg";
import MatSurf4 from "@/shop/assets/home/MatSurf/Mat_Surf_4.jpeg";
import MatSurf5 from "@/shop/assets/home/MatSurf/Mat_Surf_5.jpeg";
import MatSurf6 from "@/shop/assets/home/MatSurf/Mat_Surf_6.jpeg";
import MatSurf7 from "@/shop/assets/home/MatSurf/Mat_Surf_7.jpeg";

import PaddleSUP1 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-1.png";
import PaddleSUP2 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-2.png";
import PaddleSUP3 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-3.png";
import PaddleSUP4 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-4.png";
import PaddleSUP5 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-5.png";
import PaddleSUP6 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-6.png";
import PaddleSUP7 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-7.png";

import PonchoPisi from "@/shop/assets/home/Poncho_Pisi.jpeg";
import Maui from "@/shop/assets/home/Maui.jpeg";

export interface Imagen {
  id: string;
  name: string;
  imagen: string;
  habilitado: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imagenes: Imagen[];
  category: string;
  description: string;
  habilitado: boolean;
  topVenta: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mat Surf",
    price: 35,
    imagenes: [{
      id: "1",
      name: "Imagen",
      imagen: MatSurf7,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: MatSurf2,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: MatSurf3,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: MatSurf4,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: MatSurf5,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: MatSurf6,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: MatSurf1,
      habilitado: true,
    }],
    category: "Mar",
    description: "Bolso Para el agua",
    habilitado: true,
    topVenta: true,
  },
  {
    id: "2",
    name: "Paddle SUP",
    price: 85,
    imagenes: [{
      id: "1",
      name: "Imagen",
      imagen: PaddleSUP1,
      habilitado: true,
    },{
      id: "2",
      name: "Imagen",
      imagen: PaddleSUP2,
      habilitado: true,
    },
    {
      id: "3",
      name: "Imagen",
      imagen: PaddleSUP3,
      habilitado: true,
    },
    {
      id: "4",
      name: "Imagen",
      imagen: PaddleSUP4,
      habilitado: true,
    },
    {
      id: "5",
      name: "Imagen",
      imagen: PaddleSUP5,
      habilitado: true,
    },
    {
      id: "6",
      name: "Imagen",
      imagen: PaddleSUP6,
      habilitado: true,
    },
    {
      id: "7",
      name: "Imagen",
      imagen: PaddleSUP7,
      habilitado: true,
    }],
    category: "Mar",
    description: "Sudadera con capucha de alta calidad con logo Tesla bordado.",
    habilitado: true,
    topVenta: true,
  },
  {
    id: "3",
    name: "Poncho Pisi",
    price: 75,
    imagenes: [{
      id: "1",
      name: "Imagen",
      imagen: PonchoPisi,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: PonchoPisi,
      habilitado: true,
    }],
    category: "Mar",
    description: "Sudadera clásica sin capucha con corte moderno y cómodo.",
    habilitado: true,
    topVenta: true,
  },
  {
    id: "4",
    name: "Bolso Maui",
    price: 75,
    imagenes: [{
      id: "1",
      name: "Imagen",
      imagen: Maui,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: Maui,
      habilitado: true,
    }],
    category: "Sudaderas",
    description: "Sudadera clásica sin capucha con corte moderno y cómodo.",
    habilitado: true,
    topVenta: true,
  },
];