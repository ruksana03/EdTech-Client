import React, {useState } from 'react';
import './certificate.css'
import { saveAsPng } from 'save-html-as-image';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import PDF from './pdf/PDF';

const Certificate = () => {
    const [name, setName] = useState('');
    const componentRef = React.createRef()
    const user = useSelector(state => state.data.user.user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const common = document.querySelector("#certificate")
        localStorage.setItem('name', name)
        await saveAsPng(common)
    }
    // console.log('finding this name is====>', user);


    return (
        <>
            <div className='my-20 p-5'>
                <div className='flex items-center justify-center'>
                    <PDFDownloadLink document={<PDF anotherName={user?.name} />} fileName='certificate.pdf'>
                        {
                            (({ loading }) => loading ? <button>Loading....</button> : user?.name && <button className='btn btn-success'>Fast Download pdf Now</button>)
                        }
                    </PDFDownloadLink>
                    {/* <PDF anotherName={anotherName} /> */}
                </div>
                <div>
                    <h1 className="text-xl font-bold text-center my-5">Please Write Your Name</h1>
                    <form className='flex items-center justify-center gap-3 my-5'>
                        <input onChange={() => setName(event.target.value)} type="text" placeholder='enter your name...' className='input input-success' />
                        <button onClick={handleSubmit} type='submit' className='btn btn-success'>Download</button>
                    </form>
                </div>
                <div>
                    <div id='certificate' ref={componentRef} className='w-full h-full certificate relative'>
                        <h1 className='absolute top-[105px] md:top-44 lg:top-[230px] xl:top-[390px] 2xl:top-[500px] left-0 right-0 text-2xl md:text-5xl lg:text-7xl font-bold capitalize text-center font'>{name}</h1>
                        <img src='https://i.ibb.co/3yMGWhT/certificate-new.png' alt="certificate" className='w-full h-full' />
                        <h1 className='absolute top-[350px] left-0 right-0 text-3xl md:text-4xl lg:text-6xl font-bold capitalize text-center'></h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Certificate;