import React from 'react'
import { categorias } from '@/mocks/categorias.mock';
import { useNavigate, useParams, useSearchParams } from 'react-router';

export const CustomCategorias = () => {

const navigate = useNavigate();

const handleClick = (name: string): void => {
  navigate(`/coleccion/${name.toLowerCase()}`);
};

  return (
    <div className='flex justify-center'>
      <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-4" >
        {categorias.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center justify-center cursor-pointer" onClick={() => handleClick(cat.name)}>
            <img
              src={cat.image}
              alt="Powerblade"
              className="w-20 sm:w-24 md:w-32 h-auto object-contain"
            />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>

  )
}
