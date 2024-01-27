import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import ErrorPage from "../page/errorPage/ErrorPage";
import Blog from "../page/blog/Blog";
import Contact from "../page/contact/Contact";
import Courses from "../page/courses/Courses";
import Login from "../Login and Register/Login";
import Register from "../Login and Register/Register";
import BlogHome from "../page/blog/BlogHome";
import BlogSettings from "../page/blog/BlogSettings";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";
import MyClass from "../components/dashboard/my class/MyClass";
import JoiningTeacher from "../page/home/joining  teacher/JoiningTeacher";
import MyLabLayout from "../components/dashboard/my lab/MyLabLayout";
import Science from "../components/dashboard/my lab/lab pages/Science";
import Math from "../components/dashboard/my lab/lab pages/Math";
import Coding from "../components/dashboard/my lab/lab pages/Coding";
import ResearchL from "../components/dashboard/my lab/lab pages/ResearchL";
import Creative from "../components/dashboard/my lab/lab pages/Creative";
import AssignmentSection from "../components/dashboard/assignment/AssignmentSection";
import BookmarkLayout from "../components/dashboard/bookmark/BookmarkLayout";
import ShowBookmarks from "../components/dashboard/bookmark/ShowBookmarks";
import NotesLayout from "../components/dashboard/notes/NotesLayout";
import MyNotes from "../components/dashboard/notes/MyNotes";
import CreateNotes from "../components/dashboard/notes/CreateNotes";
import Liveclass from "../components/dashboard/my class/LiveClass/Liveclass";
import Support from "../components/dashboard/my class/Support/Support";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/all-courses',
                element: <Courses/>
            },
            {
                path:'/blog',
                element:<Blog/>,
                children:[
                    {
                        path:'/blog',
                        element:<BlogHome/>
                    },
                    {
                        path:'blog-settings',
                        element:<BlogSettings/>
                    }
                ]

            },
            {
                path: 'contact',
                element:<Contact />
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
                path: 'join-teacher',
                element:<JoiningTeacher />
            },
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path:'dashboard',
                element: <Dashboard/>
            },
            {
                path:'my-class',
                element: <MyClass />,
                children:[{
                    path:'liveclss',
                    element:<Liveclass></Liveclass>
                },
            
                {
                    path:'support',
                    element:<Support></Support>
                },
            
            ]
            },
            {
                path:'my-lab',
                element: <MyLabLayout />,
                children: [
                    {
                        path:'science-lab',
                        element: <Science />
                    },
                    {
                        path:'math-lab',
                        element: <Math />
                    },
                    {
                        path:'coding-lab',
                        element: <Coding />
                    },
                    {
                        path:'research-lab',
                        element: <ResearchL />
                    },
                    {
                        path:'creative-lab',
                        element: <Creative />
                    },
                ]
            },
            {
                path:'research',
                element: <ResearchL />,
            },
            {
                path:'assignment',
                element: <AssignmentSection />,
            },
           
            {
                path:'bookmarks',
                element: <BookmarkLayout />,
                children: [
                    {
                        path: 'show-bookmarks',
                        element:<ShowBookmarks />
                    }
                ]
            },
            {
                path:'notes',
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