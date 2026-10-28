import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { cn } from "cn";
import { CustomLogo } from "@/components/custom/CustomLogo";

export const CustomHeader = () => {

  const { coleccion } = useParams();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between md:justify-around">

          {/* Logo */}
          <div className="flex items-center space-x-4">
            <CustomLogo />
          </div>

          {/* Navegación escritorio */}
          <nav className="font-montserrat hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === '/' ? 'underline underline-offset-4' : ''
              )}
            >
              Inicio
            </Link>

            <Link
              to="/coleccion/mar"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                coleccion === 'mar' || coleccion === 'floripia' || coleccion === 'crochet' ? 'underline underline-offset-4' : ''
              )}
            >
              Productos
            </Link>

            <Link
              to="/comoComprar"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === '/quienesSomos' ? 'underline underline-offset-4' : ''
              )}
            >
              Como Comprar
            </Link>
          </nav>

          {/* Botón hamburguesa: solo móvil */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-200 transition-colors"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Menú desplegable móvil */}
        {menuAbierto && (
          <nav className="md:hidden font-montserrat flex flex-col gap-1 pb-4 pt-2">
            <Link
              to="/"
              onClick={() => setMenuAbierto(false)}
              className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
            >
              Home
            </Link>

            <Link
              to="/coleccion/mar"
              onClick={() => setMenuAbierto(false)}
              className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
            >
              Productos
            </Link>

            <Link
              to="/quienesSomos"
              onClick={() => setMenuAbierto(false)}
              className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
            >
              Quiénes Somos
            </Link>

            <Link
              to="/contacto"
              onClick={() => setMenuAbierto(false)}
              className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};