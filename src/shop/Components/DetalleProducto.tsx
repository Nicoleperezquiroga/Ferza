import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import type { Imagen } from '@/mocks/products.mock';

interface ImagenesProps {
    imagenes: Imagen[];

}

export const DetalleProducto = ({ imagenes }: ImagenesProps) => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {imagenes
                        .filter((imagen) => imagen.habilitado)
                        .map((imagen) => (
                            <CarouselItem key={imagen.id}>
                                <img
                                    src={imagen.imagen}
                                    alt={imagen.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </CarouselItem>
                        ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel></div>
    )
}
