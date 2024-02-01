/* eslint-disable react/prop-types */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import ErrorPage from "../page/errorPage/ErrorPage";
import Courses from "../page/courses/Courses";
import Login from "../Login and Register/Login";
import Register from "../Login and Register/Register";
import JoiningTeacher from "../page/home/joining  teacher/JoiningTeacher";
import Blog from "../page/blog/Blog";
import CardDetails from "../page/detailsPage/CardDetails";
import Contact from "../page/contact/Contact";
import Notices from "../page/Notices/Notices";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../page/dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
import UserProfile from "../page/dashboard/UserProfile";
import NotesLayout from "../page/dashboard/DLayoutList/NotesLayout";
import MyNotes from "../page/dashboard/notes/MyNotes";
import CreateNotes from "../page/dashboard/notes/CreateNotes";
import MyClass from "../page/dashboard/my class/MyClass";
import Liveclass from "../page/dashboard/my class/LiveClass/Liveclass";
import Support from "../page/dashboard/my class/Support/Support";
import MyLabLayout from "../page/dashboard/DLayoutList/MyLabLayout";
import Science from "../page/dashboard/my lab/lab pages/Science";
import Math from "../page/dashboard/my lab/lab pages/Math";
import Coding from "../page/dashboard/my lab/lab pages/Coding";
import ResearchL from "../page/dashboard/my lab/lab pages/ResearchL";
import Creative from "../page/dashboard/my lab/lab pages/Creative";
import Resources from "../page/dashboard/Student/Resources";
import Recommended from "../page/dashboard/Student/Recommended";
import AllUser from "../page/dashboard/Admin/Users/AllUser";
import AllNotices from "../page/dashboard/Admin/AllNotices/AllNotices";
import AllBlogs from "../page/dashboard/Admin/AllBlogs/AllBlogs";
import AllCourses from "../page/dashboard/Admin/AllCourses/AllCourses";
import AllPaymentInfo from "../page/dashboard/Admin/AllPaymentInfo/AllPaymentInfo";
import PostResources from "../page/dashboard/Teacher/PostResources/PostResources";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-courses',
                element: <Courses />
            },

            {
                path: '/blog',
                element: <Blog />,
                // children: [
                //     {
                //         path: '/blog',
                //         element: <BlogHome />
                //     },
                //     {
                //         path: 'blog-settings',
                //         element: <BlogSettings />
                //     }
                // ]

            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: "/details/:id",
                element: <PrivateRouter><CardDetails /></PrivateRouter>,
                loader: ({ params }) =>
                    fetch(
                        `https://ed-tech-server-six.vercel.app/courses/${params.id}`
                    ),
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: 'join-teacher',
                element: <JoiningTeacher />
            },
            {
                path: 'notices',
                element: <Notices />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [

            // admin routes 

            {
                path: 'allUsers',
                element: <AllUser />
            },
            {
                path: 'allNotices',
                element: <AllNotices />
            },
            {
                path: 'allBlogs',
                element: <AllBlogs />
            },
            {
                path: 'allCourses',
                element: <AllCourses />
            },
            {
                path: 'allPaymentInfo',
                element: <AllPaymentInfo />
            },
            // Student route 
            {
                path: 'my-class',
                element: <MyClass />,
                children: [{
                    path: 'liveclss',
                    element: <Liveclass></Liveclass>
                },

                {
                    path: 'support',
                    element: <Support></Support>
                },

                ]
            },
            {
                path: 'my-lab',
                element: <MyLabLayout />,
                children: [
                    {
                        path: 'science-lab',
                        element: <Science />
                    },
                    {
                        path: 'math-lab',
                        element: <Math />
                    },
                    {
                        path: 'coding-lab',
                        element: <Coding />
                    },
                    {
                        path: 'research-lab',
                        element: <ResearchL />
                    },
                    {
                        path: 'creative-lab',
                        element: <Creative />
                    },
                ]
            },
            {
                path: 'resources',
                element: <Resources />
            },
            {
                path: 'recommended',
                element: <Recommended />
            },
            // teachers route 
            {
                path: 'post-resources',
                element: <PostResources />
            },

            //             {
            //                 path: 'research',
            //                 element: <ResearchL />,
            //             },
            //             {
            //                 path: 'assignment',
            //                 element: <AssignmentSection />,
            //             },

            //             {
            //                 path: 'bookmarks',
            //                 element: <BookmarkLayout />,
            //                 children: [
            //                     {
            //                         path: 'show-bookmarks',
            //                         element: <ShowBookmarks />
            //                     }
            //                 ]
            //             },

            // common route 
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'profile',
                element: <UserProfile />
            },
            {
                path: 'notes',
                element: <NotesLayout />,
                children: [
                    {
                        path: 'my-notes',
                        element: <MyNotes />
                    },
                    {
                        path: 'create-notes',
                        element: <CreateNotes />
                    }
                ]
            },

        ]
    }
])

export default router;