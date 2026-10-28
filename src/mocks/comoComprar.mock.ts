import MatSurf1 from "@/shop/assets/home/MatSurf/Mat_Surf_1.jpeg";
import type { LucideIcon } from "lucide-react";

import {
    ShoppingCart,
    Camera,
    SearchCheck,
    FileCheck,
    ScissorsLineDashed,
    Van,
    HouseHeart
} from "lucide-react";

export interface ComoComprar {
  paso: string,
  imagen: string,
  icono: LucideIcon;
  titulo: string,
  descripcion: string,
}

export const pasosCompra: ComoComprar[] = [
{ paso: "1",
  imagen: MatSurf1,
  icono: Camera,
  titulo: "Comunícate por instagram",
  descripcion: "Escríbenos por Instagram para realizar tu compra y comentanos los productos que te interesan.", 
},
{ paso: "2",
  imagen: MatSurf1,
  icono: SearchCheck,
  titulo: "Verificamos disponibilidad del producto",
  descripcion: "Te mostraremos los diseños disponibles de acuerdo a las telas en stock.", 
},
{ paso: "3",
  imagen: MatSurf1,
  icono: FileCheck,
  titulo: "Confirmamos tu compra",
  descripcion: "Una vez definido el diseño, confirmamos la venta y entregamos el proceso de pago.", 
},
{ paso: "4",
  imagen: MatSurf1,
  icono: ScissorsLineDashed,
  titulo: "Confeccionamos tu producto",
  descripcion: "Se confeccionará tu producto con dedicación y cuidado.", 
},
{ paso: "5",
  imagen: MatSurf1,
  icono: Van,
  titulo: "Enviamos tu producto",
  descripcion: "Tu producto es despachado por Bluexpress u otro medio que se acomode a tus necesidades", 
},
];