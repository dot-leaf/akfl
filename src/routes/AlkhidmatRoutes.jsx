import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Layout from '../Layout/index';
import Home from '../pages/Home';
import Layout from '../layouts/index';
const AlkhidmatRoutes = () => {

    const router = createBrowserRouter([
        {
            element: <Layout/>,
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