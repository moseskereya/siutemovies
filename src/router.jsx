import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Default from "./components/Pages/Default"
import Notfound from "./components/Pages/Notfound";
import Trending from "./components/Pages/Trending"
import Moviedetails from "./components/Pages/Moviedetails"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Default/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/movies',
                element:<Trending/>
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