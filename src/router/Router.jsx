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
import Support from "../page/dashboard/my class/Support/Support";
import Resources from "../page/dashboard/Student/Resources";
import Recommended from "../page/dashboard/Student/Recommended";
import AllUser from "../page/dashboard/Admin/Users/AllUser";
import AllBlogs from "../page/dashboard/Admin/AllBlogs/AllBlogs";
import AllCourses from "../page/dashboard/Admin/AllCourses/AllCourses";
import AllPaymentInfo from "../page/dashboard/Admin/AllPaymentInfo/AllPaymentInfo";
import AllNotices from "../page/dashboard/Admin/AllNotices/AllNotices";
import NoticeDetails from "./../page/dashboard/Admin/AllNotices/details/NoticeDetails";
import BlogHome from "../page/blog/BlogHome";
import WriteBlog from "../page/blog/WriteBlog";
import BlogProfile from "../page/blog/BlogProfile";
import RecordedClass from "../page/dashboard/my class/RecordedClass/RecordedClass";
import RecordVideo from "../page/dashboard/my class/RecordedClass/RecordedVideo/RecordVideo";
import DashboardLayout from "../layout/DashboardLayout";
import AddCourse from "../page/dashboard/Teacher/AddCourse";
import CreateNotice from "../page/dashboard/Teacher/noticeCreate/CreateNotice";
import UpdateProfile from "../page/dashboard/update profile/UpdateProfile";
import Applications from "../page/dashboard/Admin/application/Applications";
import MyCart from "../page/dashboard/Common/MyCart";
import Myenroll from "../page/dashboard/Student/Enroll/Myenroll";
import AddQuiz from "../page/dashboard/Admin/AddQuiz/AddQuiz";
import NewPostResources from "../page/dashboard/Teacher/PostResources/NewPostResources";
import Questions from "../page/QuizeComponent/Questions";
import BlogDetails from "../page/blog/BlogDetails";
import BlogSettings from "../page/blog/BlogSettings";
import { getOneBlog } from "../api/blogs";
import UpdatedBlog from "../page/blog/UpdatedBlog";
import StudentDashboard from "../page/dashboard/Student/StudentDashboard";
import ShowNotices from "../page/dashboard/Teacher/ShowNotices/ShowNotices";
import TeacherUpdateNotices from "../page/dashboard/Teacher/UpdateNotice/TeacherUpdateNotices";
import SpeechToText from "../components/SpeechToText/SpeechToText";
import Subscriber from "../page/dashboard/Admin/Subscriber/Subscriber";
import Partner from "../page/home/joining  teacher/Partner";
import Partners from "../page/dashboard/Admin/Partners/Partners";
import Man from "../page/QuizeComponent/Man"
import LiveClass from "../page/dashboard/Teacher/LiveClass/LiveClass";
import ChatRoom from "../page/dashboard/Common/ChatRoom";
import TeacherDetailsNotice from "../page/dashboard/Teacher/ShowNotices/TeacherDetailsNotice";
import UpdateAdminNotice from "../page/dashboard/Admin/AllNotices/update/UpdateAdminNotice";
import NoticeBanner from "../page/Notices/NoticeBanner";
import NoticeHome from "../page/Notices/NoticeHome";
import NewNotices from "../page/Notices/NewNotices";
import Notices from "../page/home/userNotice/Notices";
import AdminNoticeStudent from "../page/Notices/AdminNoticeStudent";
import NoticeHomeDetails from "../page/Notices/NoticeHomeDetails";
import TeacherNoticeDetails from "../page/Notices/TeacherNoticeDetails";
import Certificate from "../page/dashboard/Student/certificates/Certificate";
import ShowCertificate from "../page/dashboard/Student/certificates/ShowCertificate";
import AddMember from './../page/dashboard/Admin/AllMembers/AddMember';
import ServicesHome from "../page/Services/ServicesHome";
import AddOffer from "../page/dashboard/Admin/addOffer/AddOffer";
import AdmissionForm from "../page/Services/admission form/AdmissionForm";
import TRoutine from "../page/dashboard/Teacher/Date of Rutine/TRoutine";
import AllFeedback from "../page/dashboard/Admin/all feedback/AllFeedback";
import MakeAdvertisement from './../page/dashboard/Admin/Advertisement/MakeAdvertisement';
import VideoFeature from "../page/dashboard/Teacher/LiveClass/VideoCall/VideoFeature";
import Help from "../page/dashboard/Teacher/LiveClass/Help/Help";
import RecordedCoursesLayout from "../page/dashboard/Teacher/AllRecordedCourses/RecordedCoursesLayout";
import axiosSecure from "../api/axiosSecure";
import TeacherCourseDetails from "../page/dashboard/Teacher/AllRecordedCourses/TeacherCourseDetails";
import TeacherUpdateCourse from "../page/dashboard/Teacher/AllRecordedCourses/TeacherUpdateCourse";
import AddCourseVideo from "../page/dashboard/Teacher/AllRecordedCourses/AddCourseVideo";
import UpdateCourseVideo from "../page/dashboard/Teacher/AllRecordedCourses/UpdateCourseVideo";
import RoutineHome from "../page/dashboard/Student/rutine/RoutineHome";
import AllAdmission from "../page/dashboard/Admin/all online-admission/AllAdmission";
import AddCourseResources from "../page/dashboard/Teacher/TeacherProvideResources/AddCourseResources";
import UpdateCourseResources from "../page/dashboard/Teacher/TeacherProvideResources/UpdateCourseResources";
import CommonDashboard from './../page/dashboard/Common/CommonDashboard';



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
                path: '/services',
                element: <ServicesHome />
            },
            {
                path: 'get-addmission',
                element: <PrivateRouter><AdmissionForm /></PrivateRouter>
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
                path: "/notices",
                element: <NoticeBanner />,
                children: [
                    {
                        path: 'teachers-notices',
                        element: <NoticeHome />
                    },
                    {
                        path: 'admins-notices-teacher',
                        element: <Notices />
                    },
                    {
                        path: 'admins-notices-student',
                        element: <AdminNoticeStudent />
                    },
                    {
                        path: 'common-notices-admin',
                        element: <NewNotices />
                    },
                ]
            },
            {
                path: 'admin-notice-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/admin-notice/${params.id}`),
                element: <NoticeHomeDetails />
            },
            {
                path: 'teacher-notice-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/teacher-notice/${params.id}`),
                element: <TeacherNoticeDetails />
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
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "applications",
                element: <Applications />,
            },
            {
                path: "online-applications",
                element: <AllAdmission />,
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
                path: "admin-notice-details/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/admin-notice/${params.id}`),
                element: <NoticeDetails />,
            },
            {
                path: "admin-notice-updated/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/admin-notice/${params.id}`),
                element: <UpdateAdminNotice />,
            },
            {
                path: "allBlogs",
                element: <AllBlogs />,
            },
            {
                path: "quiz",
                element: <AddQuiz />
            },
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
            {
                path: "add-member",
                element: <AddMember />
            },
            {
                path: "add-advertisement",
                element: <MakeAdvertisement />
            },
            {
                path: "all-feedback",
                element: <AllFeedback />
            },
            {
                path: "add-offer",
                element: <AddOffer></AddOffer>
            },
            // Student route
            {
                path: "my-class",
                element: <MyClass />,
                children: [


                    {
                        path: "support",
                        element: <Support />,
                    },
                    {
                        path: "recordedclass",
                        element: <RecordedClass />,
                    },
                    {
                        path: "recordedclass/:courseName",
                        element: <RecordVideo />,
                    },
                ],
            },
            {
                path: 'my-class/recordedclass/English%20Mastery',
                element: <RecordVideo />
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
                element: <StudentDashboard />

            },
            {
                path: "routine",
                element: <RoutineHome />,

            },


            {
                path: "my-enroll",
                element: <Myenroll />,
                children: [
                    {
                        path: "record",
                        element: <RecordedClass />
                    },


                ]
            },
            {
                path: "certifications",
                element: <Certificate />
            },
            {
                path: "certifications/show",
                element: <ShowCertificate />
            },

            // teachers route
            {
                path: "all-class",
                element: <RecordedCoursesLayout />
            },
            {
                path: 'teacher-course-details/:id',
                element: <TeacherCourseDetails />,
                loader: ({ params }) =>
                    axiosSecure.get(`/courses/${params.id}`)
                        .then(response => response.data)
                        .catch(error => {
                            console.error("Error fetching course:", error);
                            throw error;
                        })
            },
            {
                path: 'teacher-course-update/:id',
                element: <TeacherUpdateCourse />,
                loader: ({ params }) =>
                    axiosSecure.get(`/courses/${params.id}`)
                        .then(response => response.data)
                        .catch(error => {
                            console.error("Error fetching course:", error);
                            throw error;
                        })

            },
            {
                path: 'teacher-add-course-video/:id',
                element: <AddCourseVideo />,
                loader: ({ params }) =>
                    axiosSecure.get(`/courses/${params.id}`)
                        .then(response => response.data)
                        .catch(error => {
                            console.error("Error fetching course:", error);
                            throw error;
                        })
            },
            {
                path: 'teacher-add-course-resources/:id',
                element: <AddCourseResources />,
                loader: ({ params }) =>
                    axiosSecure.get(`/courses/${params.id}`)
                        .then(response => response.data)
                        .catch(error => {
                            console.error("Error fetching course:", error);
                            throw error;
                        })
            },
            {
                path: 'teacher-update-course-video/:id',
                element: <UpdateCourseVideo />,
                loader: ({ params }) => {
                    console.log("Params:", params); // Log the params object
                    return axiosSecure.get(`/videos/${params.id}`)
                        .then(response => response.data)
                        .catch(error => {
                            console.error("Error fetching course:", error);
                            throw error;
                        });
                }

            },
            {
                path: 'teacher-update-course-resources/:id',
                element: <UpdateCourseResources />,
                loader: ({ params }) => {
                    console.log("Params:", params); // Log the params object
                    return axiosSecure.get(`/resources/${params.id}`)
                        .then(response => response.data)
                        .catch(error => {
                            console.error("Error fetching course:", error);
                            throw error;
                        });
                }

            },
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
                element: <LiveClass />,
                children: [
                    {
                        path: "video-class",
                        element: <VideoFeature />,
                    },
                    {
                        path: "teacher-help",
                        element: <Help />
                    }
                ]
            },
            {
                path: "provide-routine",
                element: <TRoutine />,
            },


            {
                path: "show-notices",
                element: <ShowNotices />
            },

            {
                path: "teacher-notice-update/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/teacher-notice/${params.id}`),
                element: <TeacherUpdateNotices />,
            },
            {
                path: 'create-notice',
                element: <CreateNotice />
            },
            {
                path: "teacher-notice-details/:id",
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/teacher-notice/${params.id}`),
                element: <TeacherDetailsNotice />,
            },

            // common route

            {
                path: "common-dashboard",
                element: <CommonDashboard />,
            },
            {
                path: "common-dashboard",
                element: <CommonDashboard />,
            },
            {
                path: "chat",
                element: <ChatRoom />,
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