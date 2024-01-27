import person from '../../assets/image/blog/person.avif';
import { useState } from 'react';
import BlogModal from './BlogModal';
import { FaPlus } from "react-icons/fa";



const BlogRightSide = () => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='flex gap-4 justify-start items-center'>
                <img className='h-8 w-8 rounded-full m-4' src={"https://i.ibb.co/9g72MMf/partner.jpg"} alt="" />
                <p className='text-xs'>atia_123</p>
                <div className='flex items-center justify-center gap-5 mt-2 '>
                    <button onClick={() => setIsOpen(!isOpen)}
                        className=" flex gap-3 justify-center items-center text-xs transition border-b-2  font-medium hover:border-b-first cursor-pointer hover:text-first"
                    >
                       Add New Post <FaPlus/>
                    </button>
                    <BlogModal isOpen={isOpen} setIsOpen={setIsOpen} />
                    <figure onClick={() => setIsOpen(!isOpen)} className='w-20 h-16 scale-y-150 mt-3 cursor-pointer'>
                    </figure>
                </div>
            </div>


            {/* show your blog posts  */}
            <div className='mx-2'>
                <div>
                    <div>
                        <h1 className='text-base font-bold'>Lorem ipsum dolor sit amet.</h1>
                        <p className='overflow-hidden whitespace-nowrap overflow-ellipsis text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit ipsam deleniti aspernatur accusamus eius reiciendis et harum delectus eos perferendis, officia, deserunt distinctio architecto dignissimos tenetur nesciunt odio officiis quae aliquam.</p>
                    </div>
                    <button className='text-xs border px-2 hover:font-bold'>view Details</button>
                </div>
                <div>
                    <div>
                        <h1 className='text-base font-bold'>Lorem ipsum dolor sit amet.</h1>
                        <p className='overflow-hidden whitespace-nowrap overflow-ellipsis text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit ipsam deleniti aspernatur accusamus eius reiciendis et harum delectus eos perferendis, officia, deserunt distinctio architecto dignissimos tenetur nesciunt odio officiis quae aliquam.</p>
                    </div>
                    <button className='text-xs border px-2 hover:font-bold'>view Details</button>
                </div>
                <div>
                    <div>
                        <h1 className='text-base font-bold'>Lorem ipsum dolor sit amet.</h1>
                        <p className='overflow-hidden whitespace-nowrap overflow-ellipsis text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit ipsam deleniti aspernatur accusamus eius reiciendis et harum delectus eos perferendis, officia, deserunt distinctio architecto dignissimos tenetur nesciunt odio officiis quae aliquam.</p>
                    </div>
                    <button className='text-xs border px-2 hover:font-bold'>view Details</button>
                </div>
                <button className='text-base px-3 py-2 '>Show All</button>
            </div>

            {/* other more  */}
            <div className='ml-3 dark:text-gray-400'>
                <h1 className='ml-3 font-bold'>Recommended Blogs</h1>
                <div className='mt-3 space-y-2'>
                    <div className='flex items-center justify-start gap-3'>
                        <figure className='avatar w-12 h-12 online placeholder'>
                            <img src={person} alt="person" className='w-full h-full rounded-full' />
                        </figure>
                        <h1>Sushil</h1>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <figure className='avatar w-12 h-12 online placeholder'>
                            <img src={person} alt="person" className='w-full h-full rounded-full' />
                        </figure>
                        <h1>Sushil</h1>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <figure className='avatar w-12 h-12 online placeholder'>
                            <img src={person} alt="person" className='w-full h-full rounded-full' />
                        </figure>
                        <h1>Sushil</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogRightSide;