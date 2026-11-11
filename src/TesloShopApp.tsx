import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"
import { Suspense } from "react";

export const TesloShopApp = () => {
    return (
    <Suspense fallback={<div>Cargando tienda...</div>}>
      <RouterProvider router={appRouter} />
    </Suspense>
        
    )
}