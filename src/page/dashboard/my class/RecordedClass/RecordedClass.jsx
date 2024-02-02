import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
const RecordedClass = () => {

   const [data,setData]=useState([])
    useEffect(() => {
        fetch('../../../../../public/recordedclass.json')
            .then(res => res.json())
            .then(data => {
               setData(data);
            })
    }, []);
    console.log(data)
    return (
       <div  className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
         
         {
            data.map(data => 
               
           <Link key={data.id} to={`${data.courseName}`}> 
            <div  className="card w-72 h-72 bg-base-100 shadow-xl">


           <figure className="px-10 pt-10">
             <img src={data.courseImage} alt="Shoes" className="rounded-xl" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title">{data.courseName}</h2>
             
             
           </div>
         </div></Link>
               )
         }
         
       </div>
    );
};

export default RecordedClass;