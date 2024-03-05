import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useGetAllPdf from "../../../Hooks/useGetAllPdf";
import { FaFileDownload } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";


const Resources = () => {
    const user = useSelector((state) => state.data.user.user);
    const [enrollsCourse, setEnrollsCourse] = useState([]);
    const { allPdf } = useGetAllPdf()
    useEffect(() => {
        // Check if user is defined before making the API call
        if (user && user.email) {
            fetch(`http://localhost:5000/bookings?stEmail=${user.email}`)
                .then((res) => res.json())
                .then((data) => setEnrollsCourse(data))
                .catch((error) =>
                    console.error("Error fetching enrolled courses:", error)
                );
        }
    }, [user]);
    // data for cources title === pdf title 
    const [matchedPdfs, setMatchedPdfs] = useState([]);
    useEffect(() => {
        if (enrollsCourse.length > 0 && allPdf.length > 0) {
            const allMatchedPdfs = [];
            enrollsCourse.forEach(course => {
                const matchingPdfs = allPdf.filter(pdf => pdf.title === course.title);
                allMatchedPdfs.push(...matchingPdfs);
            });
            setMatchedPdfs(allMatchedPdfs);
        }
    }, [enrollsCourse, allPdf]);
    console.log("matched courses  PDFs", matchedPdfs);
    // this function work to open pdf file in the new tab 
    const handelOpenPdf = (pdfLink) => {
        // Open the PDF link in a new tab
        window.open(pdfLink, '_blank');
    };

    return (
        <div>
            <h2>hello</h2>
            {/* show here teacher given pdf file  */}
            <div className="w-[800px] mx-auto p-6 border border-black rounded-xl my-8">
                <div className="overflow-x-auto">
                    <h1 className='text-center text-4xl text-first font-bold mb-4'>Download Resource File</h1>
                    <table className="table  border border-black">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-white'>Index</th>
                                {/* <th className='text-white'>Teacher Name</th> */}
                                <th className='text-white'>Title</th>
                                <th className='text-white'>Pdf Resource</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                matchedPdfs && matchedPdfs.map((item, index) => {
                                    return (
                                        <tr key={item._id}>
                                            <td className="text-white">{index + 1}</td>
                                            <td className="text-white">{item?.title}</td>
                                            <td className="text-white">
                                                <button
                                                    onClick={() => handelOpenPdf(item.pdfLink)}
                                                    className="bg-first text-white p-2 rounded-full text-2xl"><FaFileDownload />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    {
                        matchedPdfs?.length <= 0 && <Skeleton count={15 || matchedPdfs?.length} height={30} borderRadius={10} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Resources;