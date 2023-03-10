// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilities
import AboutUs from "./components/utilities/AboutUs";
import ErrorPage from "./components//utilities/ErrorPage";
import FetchForHomepage from "./components/utilities/FetchForHomepage";
import HomePage from "./components/utilities/HomePage";
import Search from "./components/utilities/Search";

// Import Pages
import Blog from "./components/pages/Blog";
import Breakfast from "./components/pages/Breakfast";
import BreakfastDetail from "./components/pages/BreakfastDetail";
import Department from "./components/pages/Department";
import Desserts from "./components/pages/Desserts";
import DessertsDetail from "./components/pages/DessertsDetail";
import Entrees from "./components/pages/Entrees";
import EntreesDetail from "./components/pages/EntreesDetail";
import Sides from "./components/pages/Sides";
import SidesDetail from "./components/pages/SidesDetail";

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <FetchForHomepage />, // useEffects & fetches;
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage /> // Actual homepage;
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/department/breakfast",
                element: <Breakfast />
            },
            {
                path: "/department/breakfast/:breakfastId",
                element: <BreakfastDetail />
            },
            {
                path: "/department",
                element: <Department />
            },
            {
                path: "/department/desserts",
                element: <Desserts />
            },
            {
                path: "/department/desserts/:dessertsId",
                element: <DessertsDetail />
            },
            {
                path: "/department/entrees",
                element: <Entrees />
            },
            {
                path: "/department/entrees/:entreesId",
                element: <EntreesDetail />
            },
            {
                path: "/department/sides",
                element: <Sides />
            },
            {
                path: "/department/sides/:sidesId",
                element: <SidesDetail />
            },
            {
                path: "/search",
                element: <Search />
            }
            
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)