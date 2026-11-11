// Import all product images
import MatSurf1 from "@/shop/assets/home/MatSurf/Mat_Surf_1.webp";
import MatSurf2 from "@/shop/assets/home/MatSurf/Mat_Surf_2.webp";
import MatSurf3 from "@/shop/assets/home/MatSurf/Mat_Surf_3.webp";
import MatSurf4 from "@/shop/assets/home/MatSurf/Mat_Surf_4.webp";
import MatSurf5 from "@/shop/assets/home/MatSurf/Mat_Surf_5.webp";
import MatSurf6 from "@/shop/assets/home/MatSurf/Mat_Surf_6.webp";
import MatSurf7 from "@/shop/assets/home/MatSurf/Mat_Surf_7.webp";

import PaddleSUP1 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-1.webp";
import PaddleSUP2 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-2.webp";
import PaddleSUP3 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-3.webp";
import PaddleSUP4 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-4.webp";
import PaddleSUP5 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-5.webp";
import PaddleSUP6 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-6.webp";
import PaddleSUP7 from "@/shop/assets/home/PaddleSUP/Paddle-SUP-7.webp";

import Poncho1 from "@/shop/assets/home/Ponchos/Poncho-1.webp";
import Poncho2 from "@/shop/assets/home/Ponchos/Poncho-2.webp";
import Poncho3 from "@/shop/assets/home/Ponchos/Poncho-3.webp";
import Poncho4 from "@/shop/assets/home/Ponchos/Poncho-4.webp";

import Maui1 from "@/shop/assets/home/BolsoMaui/bolsoMaui-1.webp";
import Maui2 from "@/shop/assets/home/BolsoMaui/bolsoMaui-2.webp";
import Maui3 from "@/shop/assets/home/BolsoMaui/bolsoMaui-3.webp";
import Maui4 from "@/shop/assets/home/BolsoMaui/bolsoMaui-4.webp";
import Maui5 from "@/shop/assets/home/BolsoMaui/bolsoMaui-5.webp";
import Maui6 from "@/shop/assets/home/BolsoMaui/bolsoMaui-6.webp";
import Maui7 from "@/shop/assets/home/BolsoMaui/bolsoMaui-7.webp";

import Mat1 from "@/shop/assets/home/MatPlayero/mat-1.webp";
import Mat2 from "@/shop/assets/home/MatPlayero/mat-2.webp";
import Mat3 from "@/shop/assets/home/MatPlayero/mat-3.webp";
import Mat4 from "@/shop/assets/home/MatPlayero/mat-4.webp";
import Mat5 from "@/shop/assets/home/MatPlayero/mat-5.webp";
import Mat6 from "@/shop/assets/home/MatPlayero/mat-6.webp";

import bolsitoFerza1 from "@/shop/assets/home/BolsitoFerza/bolsito-ferza-1.webp";
import bolsitoFerza2 from "@/shop/assets/home/BolsitoFerza/bolsito-ferza-2.webp";
import bolsitoFerza3 from "@/shop/assets/home/BolsitoFerza/bolsito-ferza-3.webp";

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
    name: `🌺 MAT SURF BAG`,
    price: 36900,
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
    description: `**Tu compañero perfecto para los días de playa.** 🌊<br />
Un práctico accesorio **2 en 1** que se transforma de mat para cambiarte en un bolso para transportar tus pertenencias.<br /><br />
**✨ ¿Por qué lo amarás?**<br />
🌊 Versátil y funcional para tus días de agua.<br />
💦 Impermeable, ideal para guardar accesorios húmedos.<br />
🌺 Confeccionado a mano en Chile con telas estampadas.<br /><br />
**Medidas:** 90 × 80 cm aprox.<br /><br />
*Del agua a tu próxima aventura.*<br />
**FERZA** | Hecho a mano, inspirado en el mar. 🐚`,
    habilitado: true,
    topVenta: true,
  },
  {
    id: "2",
    name: `🌊 FUNDA DE PALA SUP`,
    price: 17900,
    imagenes: [{
      id: "1",
      name: "Imagen",
      imagen: PaddleSUP1,
      habilitado: true,
    }, {
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
    description: `**Protección y estilo para acompañarte en cada aventura.**<br />
Diseñada para proteger la pala de tu remo SUP de golpes, rayaduras y roces durante el transporte y almacenamiento.<br /><br />
**Protección para tu equipo**<br />
Confeccionada a mano con materiales resistentes y un interior acolchado que brinda mayor protección a tu equipo.<br /><br />
Práctica, liviana y funcional.<br /><br />
🐚 *Hecho a mano, inspirado en el mar.*`,
    habilitado: true,
    topVenta: true,
  },
  {
    id: "3",
    name: `🌺 PONCHO PISI`,
    price: 40900,
    imagenes: [{
      id: "1",
      name: "Imagen",
      imagen: Poncho1,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen",
      imagen: Poncho2,
      habilitado: true,
    },
    {
      id: "3",
      name: "Imagen",
      imagen: Poncho3,
      habilitado: true,
    },
    {
      id: "4",
      name: "Imagen",
      imagen: Poncho4,
      habilitado: true,
    }],
    category: "Mar",
    description: `**Comodidad, abrigo y estilo después de cada aventura.** 🌊<br />
Diseñado para cambiarte y mantenerte abrigado después de disfrutar del mar.<br /><br />
**✨ ¿Por qué lo amarás?**<br />
🧵 Suaves telas de toalla, cómodas y absorbentes.<br />
💦 Bolsillo con bolsa impermeable integrada para guardar accesorios húmedos.<br />
🌺 Personalizable: elige entre cuello alto o capucha y agrega un estampado de animal marino.<br /><br />
**Medidas:** 100 × 70 cm.<br /><br />
*FERZA | Hecho a mano, inspirado en el mar.* 🐚`,
    habilitado: true,
    topVenta: true,
  },
  {
    id: "4",
    name: "Bolso Maui",
    price: 22900,
    imagenes: [{
      id: "1",
      name: "Imagen1",
      imagen: Maui1,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen2",
      imagen: Maui2,
      habilitado: true,
    },
    {
      id: "3",
      name: "Imagen3",
      imagen: Maui3,
      habilitado: true,
    },
    {
      id: "4",
      name: "Imagen4",
      imagen: Maui4,
      habilitado: true,
    },
    {
      id: "5",
      name: "Imagen5",
      imagen: Maui5,
      habilitado: true,
    },
    {
      id: "6",
      name: "Imagen6",
      imagen: Maui6,
      habilitado: true,
    },
    {
      id: "7",
      name: "Imagen7",
      imagen: Maui7,
      habilitado: true,
    }],
    category: "mar",
    description: `**🌺 Bolso Maui | Impermeable 2 en 1**

El compañero perfecto para quienes aman moverse con libertad.<br />
Se adapta a tu día: úsalo como bandolera o transfórmalo fácilmente en mochila para llevar las manos libres.<br /><br />
**✨ ¿Por qué lo amarás?**<br />
🌊 Impermeable por dentro y por fuera.<br />
🎒 Se transforma de bolso a mochila en segundos.<br />
🔒 Cierre enrollable con hebilla para mayor seguridad.<br />
📏 Correa regulable para mayor comodidad.<br />
💦 Ideal para playa, piscina, SUP, surf, viajes y uso diario.<br />
🌺 Diseño exclusivo FERZA inspirado en el color y la naturaleza.<br /><br />
*Un bolso tan versátil como tus aventuras.*<br />
**FERZA** | Hecho a mano, inspirado en el mar. 🐚`,
    habilitado: true,
    topVenta: true,
  },
  {
    id: "5",
    name: "Mat Playero",
    price: 21900,
    imagenes: [{
      id: "1",
      name: "Imagen1",
      imagen: Mat1,
      habilitado: true,
    },
    {
      id: "2",
      name: "Imagen2",
      imagen: Mat2,
      habilitado: true,
    },
    {
      id: "3",
      name: "Imagen3",
      imagen: Mat3,
      habilitado: true,
    },
    {
      id: "4",
      name: "Imagen4",
      imagen: Mat4,
      habilitado: true,
    },
    {
      id: "5",
      name: "Imagen5",
      imagen: Mat5,
      habilitado: true,
    },
    {
      id: "6",
      name: "Imagen6",
      imagen: Mat6,
      habilitado: true,
    },
    ],
    category: "mar",
    description: `**🌺 Mat Playero FERZA | 🌊**

Tu compañero perfecto para disfrutar del sol, la arena y el mar. ☀️<br />
Confeccionado con telas impermeables, liviano, práctico y fácil de transportar.<br /><br />

**✨ ¿Por qué lo amarás?**<br />
📱 Bolsillo transparente con cierre para proteger tu celular y tenerlo siempre a mano.<br />
🏖️ Se enrolla fácilmente e incluye un strap independiente para llevarlo cómodamente al hombro.<br /><br />

**📏 Medidas:** 1,97 × 0,97 m.<br /><br />

*¡Extiéndelo, relájate y disfruta!* 🐚<br />
**FERZA** | Hecho a mano, inspirado en el mar.`,
    habilitado: true,
    topVenta: false,
  },
  {
    id: "6",
    name: "Bolsito ferza",
    price: 6900,
    imagenes: [{
      id: "1",
      name: "bolsitoFerza1",
      imagen: bolsitoFerza1,
      habilitado: true,
    },
    {
      id: "2",
      name: "bolsitoFerza2",
      imagen: bolsitoFerza2,
      habilitado: true,
    },
    {
      id: "3",
      name: "bolsitoFerza3",
      imagen: bolsitoFerza3,
      habilitado: true,
    },
    ],
    category: "mar",
    description: `**🌺 Bolsito FERZA | 🐚**

¡Un bolsito, mil posibilidades! 💕<br />
Puedes usarlo como neceser para tus esenciales, estuche para tus lápices o *wet bag* para guardar tu bikini después de un día de playa. 🌊☀️<br /><br />

**✨ ¿Por qué lo amarás?**<br />
👜 Compacto, práctico y versátil.<br />
🔒 Cierre para mantener tus esenciales protegidos.<br />
🤍 Asa para llevarlo cómodamente.<br />
🌊 Ideal para la playa, viajes y uso diario.<br /><br />

*¡Pequeño en tamaño, grande en posibilidades!* 💕<br />
**FERZA** | Hecho a mano, inspirado en el mar. 🐚`,
    habilitado: true,
    topVenta: false,
  },
];