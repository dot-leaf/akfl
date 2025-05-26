import React from 'react';
import Layout from '../layouts/index';
import Home from '../pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const AlkhidmatRoutes = () => {

    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },  
              
               
            ],
        },
     
        
    ]);

    return <RouterProvider router={router} />;
};

export default AlkhidmatRoutes;