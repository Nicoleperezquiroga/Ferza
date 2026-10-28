import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomCategorias } from "@/shop/Components/CustomCategorias"
import { CustomJumbotron } from "@/shop/Components/CustomJumbotron"
import { ImagenesInicio } from "@/shop/Components/ImagenesInicio"
import { SlideInicio } from "@/shop/Components/SlideInicio"
import { TopVentasGrid } from "@/shop/Components/TopVentasGrid"

export const HomePage = () => {
    return (
        <>
            <SlideInicio/>
            <CustomJumbotron title="Colecciones" subTitle="Conoce nuestras colecciones aquí"/>
            <CustomCategorias/>
            <CustomJumbotron title="Top Ventas" subTitle="Lo que más llevan"/>
            <TopVentasGrid/>
            <ImagenesInicio/>
        </>
    )
}