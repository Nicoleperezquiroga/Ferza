import React from 'react'
import Img1 from "@/shop/assets/home/Img1.png";
import Img2 from "@/shop/assets/home/Img2.png";
import Img3 from "@/shop/assets/home/Img3.png";

export const ImagenesInicio = () => {
    return (
<div className="px-10 lg:px-40 my-15 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:items-stretch">
  {/* Primera columna */}
  <div className="min-h-0">
    <img
      src={Img1}
      alt="Imagen Remo"
      className="w-full h-full rounded-xl object-cover"
    />
  </div>

  {/* Segunda columna */}
  <div className="grid grid-rows-2 gap-1 min-h-0">
    <img
      src={Img2}
      alt="Joven Remando"
      className="w-full h-full rounded-xl object-cover"
    />

    <img
      src={Img3}
      alt="Mujer remando"
      className="w-full h-full rounded-xl object-cover"
    />
  </div>
</div>
    )
}
