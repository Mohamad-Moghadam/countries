import { createBrowserRouter } from "react-router";
import Home from "./components/pages/home";
import NavBar from "./components/shared/NavBar";
import Countries from "./components/pages/Countries";


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
        }]
    }
])

export default router;