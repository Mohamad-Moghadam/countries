import { createBrowserRouter } from "react-router";
import Home from "./components/pages/home";
import NavBar from "./components/shared/NavBar";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        children:[{
            path: "/home",
            element: <Home/>
        }]
    }
])

export default router;