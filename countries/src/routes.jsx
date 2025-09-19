import { createBrowserRouter } from "react-router";
import Home from "./components/pages/home";
import NavBar from "./components/shared/NavBar";
import Countries from "./components/pages/Countries";
import Nation from "./components/pages/Nation";
import About from "./components/pages/About"


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        children:[{
            path: "/",
            element: <Home/>
        },{
            path: "/countries",
            element: <Countries/>
        },{
            path: "/nation/:cca3",
            element: <Nation/>
        },{
            path: "/about",
            element: <About/>
        }]
    }
])

export default router;