import { useEffect, useState } from "react";
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
              {
                data.map(d => <a key={d.id}
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg  bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  > 

                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    
                  </svg>
                  <img  className="w-12 h-12" src={d.profile_photo} />

                </span>
              
    

                <h2 className="mt-2 p__cormorant font-bold">{d.position}</h2>

                <p className="hidden sm:mt-1 sm:block  p__opensans">
                  Hi, there i am  {d.fullName} looking for {d.position} teacher position
                </p>
              </a>)
              }
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytic;
