import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Main from "../pages/main";
import User from "../pages/user";
import One from "../pages/other/one";
import Two from "../pages/other/two";

const routes = [
    {
        path: '/',
        Component: Main,
        children: [
            {
                path: '/',
                element: <Navigate to='home'/>
            },
            {
                path: 'home',
                Component: Home
            },
            {
                path: 'user',
                Component: User
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'one',
                        Component: One
                    },
                    {
                        path: 'two',
                        Component: Two
                    }
                ]
            },

        ]
    }
]

export default createBrowserRouter(routes)