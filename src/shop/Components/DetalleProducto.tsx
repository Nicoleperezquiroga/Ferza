
import { useState } from 'react';
import type { Imagen } from '@/mocks/products.mock';

interface ImagenesProps {
  imagenes: Imagen[];
}

export const DetalleProducto = ({ imagenes }: ImagenesProps) => {
  const imagenesActivas = imagenes.filter((imagen) => imagen.habilitado);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  if (imagenesActivas.length === 0) return null;
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Imagen principal */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={imagenesActivas[imagenSeleccionada].imagen}
          alt={imagenesActivas[imagenSeleccionada].name}
          className="w-full h-full object-contain"
        />
      </div>
      {/* Miniaturas */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {imagenesActivas.map((imagen, index) => (
          <button
            key={imagen.id}
            onClick={() => setImagenSeleccionada(index)}
            className={`cursor-pointer shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
              imagenSeleccionada === index
                ? "border-[#C7A15A]"
                : "border-gray-200 hover:border-[#C7A15A]"
            }`}
          >
            <img
              src={imagen.imagen}
              alt={imagen.name}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
