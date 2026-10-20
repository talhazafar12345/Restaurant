




import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import Shop from '../Pages/Shop'
import Contact from '../Pages/Contact'
import Order from '../Pages/Order'

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

        {
            path: "/shop-page",
            element: <Shop />
        },


          {
            path: "/contact-page",
            element: <Contact />
        },


          {
            path: "/order-page",
            element: <Order />
        },



    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing
