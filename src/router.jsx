import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Default from "./components/Pages/Default"
import Notfound from "./components/Pages/Notfound";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Default/>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    },

    {
        path: "*",
        element: <Notfound/>
    }
    
])

export default router