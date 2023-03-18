import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Test from './Test';
import Test2 from './Test2';

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Test2",
            element: <Test2 />,
        },
    ]
);