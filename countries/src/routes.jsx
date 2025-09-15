import { createBrowserRouter } from "react-router";
import Home from "./components/pages/home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

export default router;