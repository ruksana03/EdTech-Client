/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import useCourseVideo from "../../../../Hooks/useCourseVideo";
import useCourseResources from "../../../../Hooks/useCourseResources";

const TeacherCourseDetails = () => {
    const course = useLoaderData();

    const { CourseAllVideo, loading, refetch } = useCourseVideo()
    const { CourseAllResources } = useCourseResources()
    // Function to filter CourseAllVideo by courseId

    const filterData = CourseAllVideo.filter((video) => video.courseId === course?._id);
    const filterResourcesData = CourseAllResources.filter((resource) => resource.courseId === course?._id);

    return (
        <div className=" mx-auto p-8 p__cormorant mt-12">
            <div className="flex justify-end">
                <Link to={`/dashboard/teacher-course-update/${course?._id}`}>
                    <button
                        className="btn-style">
                        Update full Course
                    </button>
                </Link>
                <Link to={`/dashboard/teacher-add-course-video/${course?._id}`}>
                    <button
                        className="btn-style mx-2">
                        Add Videos
                    </button>
                </Link>

                {filterData.length > 0 ? (
                    <Link to={`/dashboard/teacher-update-course-video/${filterData[0]?._id}`}>
                        <button className="btn-style mx-2">
                            Update Videos
                        </button>
                    </Link>
                ) : (
                    <p>No videos to update</p>
                )}


                <Link to={`/dashboard/teacher-add-course-resources/${course?._id}`}>
                    <button
                        className="btn-style mx-2">
                        Add Resources
                    </button>
                </Link>


                {filterResourcesData.length > 0 ? (<Link to={`/dashboard/teacher-update-course-resources/${filterResourcesData[0]?._id}`}>
                    <button className="btn-style mx-2">
                        Update Resources
                    </button>
                </Link>) : (
                    <p>No resources to update</p>
                )}

            </div>

            <h1 className="headtext__cormorant">{course.title}</h1>
            <hr />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Videos:</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <p>{course?.video?.title}</p>
                        <iframe
                            title={course?.video?.title}
                            className="w-full h-full rounded-lg shadow-md"
                            src={course.video.link}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="my-4">
                <div className="flex text-sm justify-start flex-col md:flex-row ">
                    <p className="mx-2">Courses Category: {course?.category}</p>
                    <p className="mx-2">Duration: {course?.duration} weeks</p>
                    <p className="mx-2">Price: ${course?.price}</p>
                </div>
                <div className="flex text-sm justify-start ">
                    <p className="mx-2">Instructors:</p>
                    <ul className="mx-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.instructors.map((instructor) => (
                            <li key={instructor?._id} className="flex items-center flex-col md:flex-row">
                                <span>{instructor?.email}</span>
                                <span>{instructor?.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr />
            <p className="mt-4">Requirements: {course.requirements}</p>
            <p className="mt-4 text-base text-first">{course.details}</p>
        </div>
    );
};

export default TeacherCourseDetails;
