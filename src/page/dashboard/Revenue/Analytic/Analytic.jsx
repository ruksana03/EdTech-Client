import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const Analytic = () => {

const axiosPublic=useAxiosPublic()
const [data, setData]= useState([])

  useEffect(()=>{
    axiosPublic.get('/applications')
    .then(response => {
       // Handle successful response
       const jsonData = response.data;
       console.log(jsonData);
       setData(jsonData)
     })
     .catch(error => {
       // Handle error
       console.error('Error fetching data:', error);
     });
  },[])
  console.log(data)

  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="headtext__cormorant">Teacher Position requests</h2>

              <p className="mt-4 p__opensans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                assumenda? Deleniti quasi inventore, libero reiciendis minima
                aliquid tempora. Obcaecati, autem.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded btn-style  px-12 py-3 text-sm font-medium   transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Goto The page
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytic;
