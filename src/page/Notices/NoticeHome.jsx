import { Link } from "react-router-dom";
import useTeacherNotice from "../../Hooks/useTeacherNotice";

// teacher Notice
const NoticeHome = () => {
   const {AllTeacherNotice} = useTeacherNotice();
    return (
        <div className="w-8/12 mx-auto">
        <table className="table border mb-8">
          <thead className='text-base text-white'>
            <tr>
              <th className='border'>Notice Title</th>
              <th className='border w-36'>Notice Category</th>
              <th className='border w-36'>Published On</th>
              <th className='border w-36'>View Details</th>
            </tr>
          </thead>
          <tbody>
            {AllTeacherNotice?.map(notice => (
              <tr key={notice._id} className='border text-white'>
                <td className='border text-center text-base lg:text-[18px]'>
                  {notice?.title?.length > 40 ? <>{notice?.title?.slice(0, 50)}.....</> : notice?.title}
                </td>
                <td className='border uppercase'>{notice?.sentForCourse}</td>
                <td className='border'>{notice?.date?.slice(0, 10)}</td>
                <td className='border'>
                  <Link to={`/teacher-notice-details/${notice?._id}`} className="hover:font-extrabold">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    );
};

export default NoticeHome;