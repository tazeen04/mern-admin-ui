import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/login/login";

export const route = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/auth/login",
        element:<LoginPage/>
    },
])