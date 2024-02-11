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
import AllBlogs from "../page/dashboard/Admin/AllBlogs/AllBlogs";
import AllCourses from "../page/dashboard/Admin/AllCourses/AllCourses";
import AllPaymentInfo from "../page/dashboard/Admin/AllPaymentInfo/AllPaymentInfo";
import PostResources from "../page/dashboard/Teacher/PostResources/PostResources";
import AllNotices from "../page/dashboard/Admin/AllNotices/AllNotices";
import NoticeDetails from "./../page/dashboard/Admin/AllNotices/details/NoticeDetails";
import UpdateNotice from "../page/dashboard/Admin/AllNotices/update/UpdateNotice";
import BlogHome from "../page/blog/BlogHome";
import WriteBlog from "../page/blog/WriteBlog";
import BlogProfile from "../page/blog/BlogProfile";
import NoticeHomeDetails from "../page/Notices/NoticeHomeDetails";
import NoticeHome from "../page/Notices/NoticeHome";
import RecordedClass from "../page/dashboard/my class/RecordedClass/RecordedClass";
import RecordVideo from "../page/dashboard/my class/RecordedClass/RecordedVideo/RecordVideo";
import DashboardLayout from "../layout/DashboardLayout";
import AddCourse from "../page/dashboard/Teacher/AddCourse";
import Notices from "../page/home/userNotice/Notices";
import CreateNotice from "../page/dashboard/Teacher/noticeCreate/CreateNotice";
import NoticeBanner from "../page/Notices/NoticeBanner";
import NewNotices from "../page/Notices/NewNotices";
import UpdateProfile from "../page/dashboard/update profile/UpdateProfile";
import CommonNoticeDetails from "../page/Notices/CommonNoticeDetails";
// import DashboardLayout2 from "../layout/DashboardLayout2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-courses",
                element: <Courses />,
            },

            {
                path: "/blog",
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
                path: "contact",
                element: <Contact />,
            },
            {
                path: "/details/:id",
                element: (
                    <PrivateRouter>
                        <CardDetails />
                    </PrivateRouter>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/courses/${params.id}`),
            },

            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "join-teacher",
                element: <JoiningTeacher />,
            },
            {
                path: "common-notice-details",
                element: <CommonNoticeDetails />,
            },
            // {
            //     path: "notices",
            //     element: <NoticeHome />,
            // },


            // for  teacher notices only

            {
                path: "/notices",
                element: <NoticeBanner />,
                children: [
                    {
                        path: 'teacher-notices',
                        element: <NoticeHome />
                    },
                    {
                        path: 'user-notices',
                        element: <Notices />
                    },
                    {
                        path: 'new-notices',
                        element: <NewNotices />
                    },
                ]
            },
            {
                path: 'notice-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/notice-user/${params.id}`),
                element: <NoticeHomeDetails />
            },
        ],
    },
    {
        path: "/blog",
        element: <Blog />,
        children: [
            {
                path: "/blog",
                element: <BlogHome />,
            },
            {
                path: "new-blog",
                element: <WriteBlog />,
            },
            {
                path: "blog-profile",
                element: <BlogProfile />,
            },
            {
                // path: 'blog-settings',
                // element: <BlogSettings />
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            // admin routes

            {
                path: "allUsers",
                element: <AllUser />,
            },
            {
                path: "allNotices",
                element: <AllNotices />,
            },
            {
                path: "notice-details/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/notice/${params.id}`),
                element: <NoticeDetails />,
            },
            {
                path: "notice-updated/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/notice/${params.id}`),
                element: <UpdateNotice />,
            },
            {
                path: "allBlogs",
                element: <AllBlogs />,
            },
            {
                path: "allCourses",
                element: <AllCourses />,
            },
            {
                path: "allPaymentInfo",
                element: <AllPaymentInfo />,
            },
            // Student route
            {
                path: "my-class",
                element: <MyClass />,
                children: [
                    {
                        path: "liveclss",
                        element: <Liveclass></Liveclass>,
                    },

                    {
                        path: "support",
                        element: <Support></Support>,
                    },
                    {
                        path: "recordedclass",
                        element: <RecordedClass></RecordedClass>,
                    },
                    {
                        path: "recordedclass/:courseName",
                        element: <RecordVideo></RecordVideo>,
                    },
                ],
            },
            {
                path: "my-lab",
                element: <MyLabLayout />,
                children: [
                    {
                        path: "science-lab",
                        element: <Science />,
                    },
                    {
                        path: "math-lab",
                        element: <Math />,
                    },
                    {
                        path: "coding-lab",
                        element: <Coding />,
                    },
                    {
                        path: "research-lab",
                        element: <ResearchL />,
                    },
                    {
                        path: "creative-lab",
                        element: <Creative />,
                    },
                ],
            },
            {
                path: "resources",
                element: <Resources />,
            },
            {
                path: "recommended",
                element: <Recommended />,
            },
            // teachers route
            {
                path: "post-resources",
                element: <PostResources />,
            },
            {
                path: "add-course",
                element: <AddCourse />,
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
                path: 'create-notice',
                element: <PrivateRouter><CreateNotice /></PrivateRouter>
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "profile",
                element: <UserProfile />,
            },

            {
                path: "notes",
                element: <NotesLayout />,
                children: [
                    {
                        path: "my-notes",
                        element: <MyNotes />,
                    },
                    {
                        path: "create-notes",
                        element: <CreateNotes />,
                    },
                ],
            },
        ],

    },
    {
        path: "/updated-profile",
        element: <UpdateProfile />,
    },
]);

export default router;