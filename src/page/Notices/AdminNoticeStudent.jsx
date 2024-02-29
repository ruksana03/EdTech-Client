import { Link } from "react-router-dom";
import useAdminNotice from "../../Hooks/useAdminNotice";

// admin posted notice for student only 
const AdminNoticeStudent = () => {
    const { AllAdminNotice } = useAdminNotice();
    const filteredAdminNotices = AllAdminNotice.filter(notice => notice.sentNotices === "student");
    return (
        <div className="w-8/12 mx-auto">
        {filteredAdminNotices?.map(notice => (
          <div key={notice._id}>
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
                {filteredAdminNotices?.length > 0 && filteredAdminNotices.map(sortedNotice => (
                  <tr key={sortedNotice._id} className='border text-white '>
                    <td className='border text-center text-base lg:text-[18px]'>
                        {sortedNotice?.title?.length > 40 ? <>{sortedNotice?.title?.slice(0, 50)}.....</> : sortedNotice?.title}
                    </td>
                    <td className='border uppercase'>{sortedNotice?.sentNotices}</td>
                    <td className='border'>{sortedNotice?.date?.slice(0, 10)}</td>
                    <td className='border '><Link to={`/admin-notice-details/${sortedNotice?._id}`} className="hover:font-extrabold">View</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
};

export default AdminNoticeStudent;