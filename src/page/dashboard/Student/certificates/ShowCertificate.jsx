import React from 'react';
import { useSelector } from 'react-redux';
import { saveAsPng } from 'save-html-as-image';

const ShowCertificate = () => {
    const componentRef = React.createRef();
    const user = useSelector(state => state.data.user.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const common = document.querySelector("#certificate")
        localStorage.setItem('name', name)
        await saveAsPng(common)
    }
    return (
        <div className='mt-14 p-5'>
            <div className='flex items-center justify-center mb-5'>
                <button onClick={handleSubmit} type='submit' className='btn-style'>Download png</button>
            </div>
            <div>
                <div id='certificate' ref={componentRef} className='w-full h-full certificate relative'>
                    <h1 className='absolute top-[110px] md:top-44 lg:top-[240px] xl:top-[400px] 2xl:top-[570px] left-0 right-0 text-2xl md:text-5xl lg:text-7xl font-bold capitalize text-center text-black'>{user?.name}</h1>
                    <img src='https://i.ibb.co/XyDTKZj/certificat.png' alt="certificate" className='w-full h-full' />
                    <h1 className='absolute top-[350px] left-0 right-0 text-3xl md:text-4xl lg:text-6xl font-bold capitalize text-center'></h1>
                </div>
            </div>
        </div>
    );
};

export default ShowCertificate;