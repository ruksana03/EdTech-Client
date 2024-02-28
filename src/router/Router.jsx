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
import Applications from "../page/dashboard/Admin/application/Applications";
import MyCart from "../page/dashboard/Common/MyCart";
import Myenroll from "../page/dashboard/Student/Enroll/Myenroll";
import AddQuiz from "../page/dashboard/Admin/AddQuiz/AddQuiz";
// import DashboardLayout2 from "../layout/DashboardLayout2";
import NewPostResources from "../page/dashboard/Teacher/PostResources/NewPostResources";
import Questions from "../page/QuizeComponent/Questions";
import BlogDetails from "../page/blog/BlogDetails";
import BlogSettings from "../page/blog/BlogSettings";
import { getOneBlog } from "../api/blogs";
import UpdatedBlog from "../page/blog/UpdatedBlog";
import StudentDashboard from "../page/dashboard/Student/StudentDashboard";
// import DashboardLayout2 from "../layout/DashboardLayout2";
import ShowNotices from "../page/dashboard/Teacher/ShowNotices/ShowNotices";
import TeacherUpdateNotices from "../page/dashboard/Teacher/UpdateNotice/TeacherUpdateNotices";
import SpeechToText from "../components/SpeechToText/SpeechToText";
import TRutine from "../page/dashboard/Teacher/Date of Rutine/TRoutine";
import SRutine from "../page/dashboard/Student/rutine/SRoutine";
import Subscriber from "../page/dashboard/Admin/Subscriber/Subscriber";
import Partner from "../page/home/joining  teacher/Partner";
import Partners from "../page/dashboard/Admin/Partners/Partners";
// import Man from "../page/QuizeComponent/man";
// import Demo from './../page/dashboard/Student/Enroll/Demo';
import LiveClass from "../page/dashboard/Teacher/LiveClass/LiveClass";
import ChatRoom from "../page/dashboard/Common/ChatRoom";
import Certificate from "../page/dashboard/Student/certificates/Certificate";
import ShowCertificate from "../page/dashboard/Student/certificates/ShowCertificate";
import Man from './../page/QuizeComponent/Man';




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
                path: '/quest',
                element: <Man />
            },
            {
                path: '/man',
                element: <Questions />
            },
            
            {
                path: '/voiceTyping',
                element: <SpeechToText />
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
                path: "/partner",
                element: <Partner />,
            },
            {
                path: "join-teacher",
                element: <PrivateRouter> <JoiningTeacher /></PrivateRouter>,
            },
            {
                path: "common-notice-details",
                element: <CommonNoticeDetails />,
            },
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
                loader: ({ params }) => fetch(`http://localhost:5000/notice/${params.id}`),
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
                path: 'blog-details/:id',

                element: <BlogDetails />,
                loader: ({ params }) => getOneBlog(params.id),
            },
            {
                path: 'blog-updated/:id',

                element: <UpdatedBlog />,
                loader: ({ params }) => getOneBlog(params.id),
            },
            {
                path: 'blog-settings',
                element: <BlogSettings />
            },
        ]
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
                path: "applications",
                element: <Applications />,
            },
            {
                path: "quiz",
                element: <AddQuiz />
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
            // {
            //     path: "quiz",
            //     element: <AddQuiz />
            // },
            {
                path: "allCourses",
                element: <AllCourses />,
            },
            {
                path: "applications",
                element: <Applications />,
            },
            {
                path: "allPaymentInfo",
                element: <AllPaymentInfo />,
            },
            {
                path: "subscriber",
                element: <Subscriber />,
            },
            {
                path: "allpartners",
                element: <Partners />,
            },
            // {
            //     path: "add-member",
            //     element:<AddMember/>
            // },
            // Student route
            {
                path: "my-class",
                element: <MyClass />,
                children: [
                  

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
                path:'my-class/recordedclass/English%20Mastery',
                element: <RecordVideo></RecordVideo>
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
            {
                path: "studentdashboard",
                element: <StudentDashboard></StudentDashboard>

            },
            {
                path: "rutine",
                element: <SRutine />,
            },
            {
                path: "my-enroll",
                element:  <Myenroll/>,
                children:[
                    {
                        path:"record",
                        element:<RecordedClass></RecordedClass>
                    },
                    
                  
                ]
            },
            {
                path:"certifications",
                element:<Certificate />
            },
            {
                path:"certifications/show",
                element:<ShowCertificate />
            },
            {
                path:"record",
                element:<RecordedClass></RecordedClass>
            },
           
            // teachers route
            {
                path: "post-resources",

                element: <NewPostResources />
            },
            {
                path: "add-course",
                element: <AddCourse />,
            },
            {
                path: "live-class",
                element: <LiveClass></LiveClass>,
                children:[
                    {
                        path: "liveclss",
                        element: <Liveclass></Liveclass>,
                    },
                ]
            },
            {
                path: "provide-rutine",
                element: <TRutine />,
            },
          

            {
                path: "show-notices",
                element: <ShowNotices />
            },

            {
                path: "notice-update/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/notice/${params.id}`),
                element: <TeacherUpdateNotices />,
            },



            {
                path: 'create-notice',
                element: <CreateNotice />
            },
            {
                path: 'show-notices',
                element: <ShowNotices />
            },
            {
                path: "notice-update/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/notice/${params.id}`),
                element: <TeacherUpdateNotices />,
            },

            // common route
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "chat",
                element: <ChatRoom/>,
            },
            {
                path: "profile",
                element: <UserProfile />,
            },
            {
                path: "my-cart",
                element: <MyCart />,
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