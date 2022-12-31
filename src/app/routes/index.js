import { createBrowserRouter, Navigate } from "react-router-dom"
import { Home } from "../pages"

export const Routes = createBrowserRouter([
    {
        path:'/pagina-inicial',
        element:<Home/>
    },
    {
        path:'*',
        element: <Navigate to='/pagina-inicial'/>
    },
])
