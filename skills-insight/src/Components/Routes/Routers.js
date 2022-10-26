import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Course from '../Courses/Course';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import Home from '../Home/Home';
import Main from '../Layouts/Main';
import LogIn from '../LoginRegister/LogIn';
import Register from '../LoginRegister/Register';
import Subscriiption from '../Subsciption/Subscriiption';
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
                loader: () => fetch(`http://localhost:5000/catagories`),
                element: <Courses></Courses>
            },
            {
                path: '/catagories/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/courses/${params.id}`),
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/subscription',
                loader: () => fetch(`http://localhost:5000/packages`),
                element: <Subscriiption></Subscriiption>
            }
        ]
    }
])