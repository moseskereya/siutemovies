import { createBrowserRouter } from "react-router-dom";
import Default from "./components/Pages/Default"
import Notfound from "./components/Pages/Notfound";
import Trending from "./components/Pages/Trending"
import Moviedetails from "./components/Pages/Moviedetails"
import About from "./components/Pages/Home"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Default/>,
        children:[
            {
                path: '/',
                element:<Trending/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/movie/:id',
                element:<Moviedetails/>
            },

        ]
    },

    {
        path: "*",
        element: <Notfound/>,
        children:[
            {
                
            }
        ]

    }
    
])

export default router