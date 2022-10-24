import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import Home from '../Home/Home';
import Main from '../Layouts/Main';
import Login from '../LoginAndRegister/Login';
import Register from '../LoginAndRegister/Register';
export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {

                path: '/',
                element: <Home></Home>

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])