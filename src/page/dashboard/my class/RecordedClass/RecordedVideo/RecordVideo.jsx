import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const RecordVideo = () => {
  const courseName = useParams();
  const axiosPublic = useAxiosPublic();
  const [data1, setData] = useState([]);
  const [play, setPlay] = useState(null);

  useEffect(() => {
    axiosPublic
      .get("/recorded")
      .then((response) => {
        // Handle successful response
        const jsonData = response.data;
        setData(jsonData);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, [axiosPublic]);

  const orginalData1 = data1.filter(
    (data) => data.title === courseName.courseName
  );

  const orginalData = orginalData1[0];

  const handleClick = (video) => {
    setPlay(video);
  };

  return (
    <div>
      <div className="flex gap-4 max-w-fit ">
        <div>
          <Iframe 
            url={play}
            id=""
            className="w-40 h-52 md:w-[300px] md:h-64 lg:w-[500px] lg:h-72"
            display="block"
            position="relative"
          />
        </div>
        <div className="">
          {orginalData?.data && orginalData?.data.length > 0 ? (
            <div className="w-56 px-3 py-4 bg-gray-50  ">
              <ul className="space-y-2 font-medium">
                {orginalData.data.map((video) => (
                  <li key={video.videoLink}>
                    <button onClick={() => handleClick(video.videoLink)}>
                      <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        <p className="ms-3 text-sm whitespace-nowrap">
                          {video.videoTitle}
                        </p>
                      </a>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex justify-center items-center  ">
              <p className="font-bold flex items-center text-white whitespace-nowrap">No content uploaded yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordVideo;
