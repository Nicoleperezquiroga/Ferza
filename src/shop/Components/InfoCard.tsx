import { Card, CardContent } from '@/components/ui/card'
import type { ComoComprar } from '@/mocks/comoComprar.mock';
import { pasosCompra } from '@/mocks/comoComprar.mock';



import React from 'react'

export const InfoCard = () => {
    return (
        <div>
            <h1 className='py-3 px-4 lg:px-40 uppercase font-bold font-montserrat text-center '>¡Sigue estos 5 pasos!</h1>
            <section className="py-12 px-4 lg:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {pasosCompra.map((pasoCompra) => {
                    const Icono = pasoCompra.icono;
                    return (
                        <Card
                            key={pasoCompra.paso}
                            className="group min-w-[200px] max-w-[200px] w-full border-0 shadow-none product-card-hover p-0"
                        >
                            <CardContent className="p-0">
                                <div className="text-center font-bold p-2 bg-white text-5xl text-[#d09d81] shadow-md">
                                    <h1>{pasoCompra.paso}</h1>
                                </div>

                                <div className="pt-6 px-4 pb-4 space-y-1 flex flex-col items-center text-center">
                                    <Icono size={28} className="text-[#d09d81]" />

                                    <h3 className="text-sm tracking-tight uppercase font-bold">
                                        {pasoCompra.titulo}
                                    </h3>

                                    <p className="text-xs text-muted-foreground">
                                        {pasoCompra.descripcion}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </section>
        </div>
    )
}
