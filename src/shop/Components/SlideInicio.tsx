import { Link } from "react-router";
import "../css/home.css";
import fondoPowerblade from "./../assets/home/slideInicio.png";
import { Button } from '@/components/ui/button';

export const SlideInicio = () => {
    return (
        <div className='w-full font-montserrat'>      {/* Hero Section */}
            <section className="relative w-full bg-center bg-no-repeat flex items-center justify-center flex-col "
                style={{
                    backgroundImage: `url(${fondoPowerblade})`,
                    backgroundSize: "100% 100%",
                    aspectRatio: "1920 / 800",
                }}>
                <h1 className="text-[#514329] font-bold text-3xl md:text-6xl" >ferza</h1>
                <div className='mt-10'>
                    <Link to="/coleccion/mar">
                        <Button variant="outline" className="rounded-full
                    mr-3
                    px-6 py-5
                    text-base font-bold
                    bg-[#C7A15A]
                    text-white
                    border-[#C7A15A]
                    shadow-md
                    hover:bg-[#B58D48]
                    hover:bg-[#B58D48]
                    hover:text-white
                    transition-all duration-300">Ver Productos</Button>
                    </Link>
                    <Link to="/contacto">
                        <Button className="rounded-full mr-3
                    px-6 py-5
                    text-base font-bold
                    shadow-md
                    hover:bg-white
                    hover:shadow-lg
                    transition-all duration-300" variant="outline">
                            Contáctanos</Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
