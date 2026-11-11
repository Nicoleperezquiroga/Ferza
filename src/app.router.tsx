import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { ColeccionesPage } from "./shop/pages/Colecciones/ColeccionesPage";
import { lazy, Suspense } from "react";
import { ComoComprarPage } from "./shop/pages/comoComprar/ComoComprarPage";

// Páginas públicas
const HomePage = lazy(() =>
    import("./shop/pages/home/HomePage").then((m) => ({
        default: m.HomePage,
    }))
);
// Componente de carga
const Cargando = () => (
    <div className="flex min-h-[200px] items-center justify-center">
        Cargando...
    </div>
);
export const appRouter = createBrowserRouter([
    //Rutas públicas
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Cargando />}>
                    <HomePage />
                </Suspense>
            },
            {
                path: 'coleccion/:coleccion',
                element: <ColeccionesPage />
            },
            {
                path: 'comoComprar',
                element: <ComoComprarPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
])