import { createBrowserRouter, Navigate } from "react-router";

import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { ColeccionesPage } from "./shop/pages/Colecciones/ColeccionesPage";

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/Register";

const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { lazy } from "react";
import { ComoComprarPage } from "./shop/pages/comoComprar/ComoComprarPage";



export const appRouter = createBrowserRouter([
    //Rutas públicas
    {
        path:'/',
        element:<ShopLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage/>
            },
            {
                path: 'coleccion/:coleccion',
                element: <ColeccionesPage/>
            },
            {
                path: 'comoComprar',
                element: <ComoComprarPage/>
            }
        ]
    },
    //Rutas con autentificación
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login"/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <DashboardPage/>
            },
            {
                path: 'products',
                element: <AdminProductsPage/>
            },
            {
                path: 'products/:id',
                element: <AdminProductPage/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
])