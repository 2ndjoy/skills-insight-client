import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Course from '../Courses/Course';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import Home from '../Home/Home';
import Main from '../Layouts/Main';
import LogIn from '../LoginRegister/LogIn';
import Register from '../LoginRegister/Register';
import ProcedPage from '../ProcedPage/ProcedPage';
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
                loader: () => fetch(`https://skills-insight-server.vercel.app/catagories`),
                element: <Courses></Courses>
            },
            {
                path: '/catagories/courses/:id',
                loader: ({ params }) => fetch(`https://skills-insight-server.vercel.app/catagories/courses/${params.id}`),
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
                loader: () => fetch(`https://skills-insight-server.vercel.app/packages`),
                element: <Subscriiption></Subscriiption>
            },
            {
                path: '/proced',
                element: <ProcedPage></ProcedPage>
            }
        ]
    }
])