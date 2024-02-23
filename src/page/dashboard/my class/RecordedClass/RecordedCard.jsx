import React from 'react';
import { Link } from 'react-router-dom';

const RecordedCard = ({data}) => {
    const {_id, image, name, title} = data
    return (
        <div>
             <Link key={_id} to={`${title}`}> 
            <div  className="card w-52 h-52 bg-base-100 shadow-xl">


           <figure className="px-10 pt-10">
             <img src={data.courseImage} alt="Shoes" className="rounded-xl" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title">{title}</h2>
             
             
           </div>
         </div>
         </Link>
        </div>
    );
};

export default RecordedCard;