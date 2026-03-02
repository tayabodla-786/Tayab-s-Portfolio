import React from 'react'
import Home from '../Pages/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",element: <Home />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
