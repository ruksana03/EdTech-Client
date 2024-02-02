
import  { useRef, useState } from 'react';
import './Practise.css'

const Practise = () => {
    const [files, setFiles] = useState([]);
    const [isDragging, setDragging] = useState(false);
    const fileInputRef = useRef(null);

    const  selectFile = () => {
        fileInputRef.current.click();
    }

    const  handleDragEnter =(e) => {
        e.preventDefault();
        setDragging(true);
    }

    const  handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    }

    const  handleDrop =(e) => {
        e.preventDefault();
        setDragging(false);

        const selectedFiles = e.dataTransfer.files;
        handleFiles(selectedFiles);
    }

    const  handleChange =(event) => {
        const selectedFiles = event.target.files;
        handleFiles(selectedFiles);
    }

    const  handleFiles = (selectedFiles) => {
        if (selectedFiles.length === 0) return;

        const validFileTypes = ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/zip"];

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];

            // Check if the file type is allowed
            if (!validFileTypes.includes(file.type)) {
                console.log(`File type not allowed: ${file.type}`);
                continue;
            }

            // Display images as thumbnails
            const fileObject = {
                name: file.name,
                type: file.type,
                url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
            };

            setFiles((prevFiles) => [...prevFiles, fileObject]);
        }
    }

    const  deleteFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    }

    return (
        <div className='card w-[400px]'>
            <div className='top'>
                Drag and Drop Uploading
            </div>
            <div
                className={`drag-area ${isDragging ? 'dragover' : ''}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {isDragging ? (
                    <span className='select'>Drop here</span>
                ) : (
                    <>
                        Drag and Drop here or{""}
                        <span className='select items-center' role="button" onClick={selectFile}>
                            Browse
                        </span>
                    </>
                )}
                <br />
                <div className=''>
                    <input
                        name="file"
                        type="file"
                        className='file'
                        multiple
                        ref={fileInputRef}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='container gap-4'>
                {files.map((file, index) => (
                    <div className='file-item w-[100px] h-[100px] gap-2' key={index}>
                        <span className='delete' onClick={() => deleteFile(index)}>
                            &times;
                        </span>
                        {file.type.startsWith("image/") ? (
                            <img src={file.url} alt={file.name} />
                        ) : (
                            <div>{file.name}</div>
                        )}
                    </div>
                ))}
            </div>
            <button type='button' className='mt-6'>
                Upload
            </button>
        </div>
    );
};

export default Practise;


