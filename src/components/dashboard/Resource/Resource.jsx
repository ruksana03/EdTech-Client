
import { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import './Resource.css'


const Resource = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");



  return (
    <div className="">
      <h1 className="">This is resource </h1>
      <div className='mt-12 ml-12'>
        <p>Upload File: PDF,JPEG,PNG,PDF,Zip </p>
        <form className='mt-6' onClick={() => document.querySelector(".input-field").click()}>
          <input type="file" accept='image pdf doc png docx jpeg zip' className='input-field' hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name)
              if (files) {
                setImage(URL.createObjectURL(files[0]))
              }
            }} />
          {image ?
            <div className='flex items-center gap-2'>
              <p>Upload File  </p>
              <FaCloudUploadAlt size={30} />

            </div>
            :
            <div className='flex items-center gap-2'>
              <p>Upload File  </p>
              <FaCloudUploadAlt size={30} />
            </div>

          }
        </form>

        <section className='flex gap-4  items-center mt-6' width={150}>
          <FaFileAlt />
          <span className='flex gap-4 justify-end items-center'>
            {fileName}
            <MdDelete  onClick={() => {
              setFileName("No selected File")
              setImage(null)
              {
                image ? (
                  <div>
                    <img src={image} width={150} height={150} alt={fileName} />

                  </div>
                ) : (
                  <>
                    <FaCloudUploadAlt color='#1475cf' size={60} />
                    <p>Upload File PDF,JPEG,PNG,PDF,Zip </p>

                  </>
                )
              }
            }} />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Resource;