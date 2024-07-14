import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Browse from "../../Components/Browse/Browse";
import Root from "../../Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/browse',
                element: <Browse />
            }
        ]
    }
]);

export default router;