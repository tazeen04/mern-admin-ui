import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";

export const route = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/categories",
        element:<Categories/>
    },
])