




import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import Menu from '../Pages/Menu'

function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },

        {
            path: "/menu-page",
            element: <Menu />
        },


    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing
