import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import AddAService from "../Pages/AddAService/AddAService";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog/SingleBlog";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/MyReviews/UpdateReview/UpdateReview";
import MyServices from "../Pages/MyServices/MyServices";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import ResetPass from "../Pages/ResetPass/ResetPass";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import ThankYouPage from "../Pages/ThankYouPage/ThankYouPage";
import PriveteRoute from "./PrivateRoute/PriveteRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-11-server-phi.vercel.app/services')

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-phi.vercel.app/services/${params.id}`)
            },

            {
                path: '/blogs',
                element: <Blog></Blog>,
                loader: () => fetch('https://assignment-11-server-phi.vercel.app/blogs')
            },
            {
                path: '/blogs/:id',
                element: <SingleBlog></SingleBlog>,
                loader: ({ params }) => fetch(`https://assignment-11-server-phi.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },



            {
                path: '/thank-you',
                element: <ThankYouPage></ThankYouPage>
            },

            {
                path: '/profile',
                element: <PriveteRoute><Profile></Profile></PriveteRoute>
            },


            {
                path: '/reset-password',
                element: <ResetPass></ResetPass>
            },
            {
                path: '/my-reviews',
                element: <PriveteRoute><MyReviews></MyReviews></PriveteRoute>
            },
            {
                path: '/add-a-service',
                element: <PriveteRoute><AddAService></AddAService></PriveteRoute>
            },
            {
                path: '/my-services',
                element: <PriveteRoute><MyServices></MyServices></PriveteRoute>
            },
            {
                path: '/update-review/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://assignment-11-server-phi.vercel.app/reviews/${params.id}`)
            }
        ]
    }
])