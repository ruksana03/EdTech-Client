import { useEffect, useState } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOff } from "react-icons/io";
import useNoticeSearch from './../../../../Hooks/useNoticeSearch';
import useNotices from './../../../../Hooks/useNotices';
import NoticeModal from './NoticeModal';
import NoticeTable from './NoticeTable';



const AllNotices = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const noticesData = useNoticeSearch(search)
    const [search2, setSearch2] = useState('');
    const [notices, refetch,] = useNotices();
    const [filterData, setFilterData] = useState([]);
    refetch();

console.log('filter data count---->',filterData?.length);
console.log('by default data count---->',noticesData?.length);
    useEffect(() => {
        // let noticeIData = [];
        if (noticesData?.length !== 0) {
            console.log('data er length nai...');
            const findData = noticesData?.filter(item => item?.date?.slice(0, 10) === search2);
            return setFilterData(findData);
        }
        else if(!noticesData?.length > 0) {
            setFilterData(noticesData)
            console.log('data paici happy hoici.....');


        }
    }, [search2, noticesData?.length, noticesData])
    // console.log(noticesData);


    return (
        <div className='section-container' >
            <NoticeModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='flex items-center justify-between flex-col md:flex-row lg:flex-row shadow-md border my-8 p-5 gap-2'>
                <div>
                    <h1 className='text-base font-bold'>Important Notice Provide Here...</h1>
                    <p className='text-[14px] font-normal'>Innavated Education for Admin</p>
                </div>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)} className='px-3 py-2 rounded transition-all duration-200 bg-transparent border border-first text-first hover:bg-first hover:text-white font-medium'>Create Notice</button>
                </div>
            </div>
            <form className='flex items-center justify-start gap-8 w-full my-5 px-5'>
                <select onChange={() => setSearch2(event.target.value)} className=" border border-gray-300 text-black focus:outline-none focus:bg-white focus:border-first leading-tight input" name='select'>
                    <option disabled selected>Date filter</option>
                    {notices?.map(noti => <option key={noti?._id} defaultValue={noti?.date}>
                        {noti?.date?.slice(0, 10)}</option>)}
                </select>
                <div className='relative w-full'><input type="text" onChange={() => setSearch(event.target.value)} className='pl-10 text=[17px]dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full md:w-2/3 lg:w-1/3 py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-first' name='search' placeholder=' type here...' /> <MdOutlineSearch className='absolute top-2 left-1 text-3xl' /> </div>
            </form>
            <div className='px-5 my-3'>
                <h1 className='my-3 text-[17px] md:text-xl lg:text-[23px] relative'>Show Previous Notice <article className='text-xl font-bold flex items-center justify-center w-9 h-9 rounded-full text-first bg-base-300 absolute left-48 lg:left-64 top-0'>{notices?.length}</article></h1>
                <hr className='w-[180px] md:w-[200px] lg:w-[260px] h-1 bg-first ' />
            </div>

            <div className='my-10 w-full h-auto z-0'>
                <div className="">
                    <table className="table border">
                        {/* head */}
                        <thead className='text-base'>
                            <tr>
                                <th className='border w-8'></th>
                                <th className='border w-8'></th>
                                <th className='border w-32'>Person</th>
                                <th className='border text-center'>Title</th>
                                <th className='border'>Date</th>
                                <th className='border'>Time</th>
                                <th className='p-0'></th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                filterData?.length === 0 ? noticesData.map(notice => <NoticeTable key={notice?._id} notice={notice} refetch={refetch} />) : filterData.map(notice => <NoticeTable key={notice?._id} notice={notice} refetch={refetch} />)
                            }
                        </tbody>
                        {/* <tbody className={`overflow-y-auto ${search && 'hidden'}`}>
                            {
                                noticesData?.length > 0 && noticesData?.map(notice => <NoticeTable key={notice?._id} notice={notice} refetch={refetch} />
                                 ) 
                            }
                        </tbody> */}
                    </table>
                </div>
            </div>
            {
                notices?.length <= 0 && <div className='text-4xl w-full h-[30vh] flex items-center justify-center gap-2'>
                    <h1>Here No Notice Available <IoMdNotificationsOff className='w-full text-5xl text-red-600' /></h1>
                </div>
            }
        </div>
    );
};

export default AllNotices;