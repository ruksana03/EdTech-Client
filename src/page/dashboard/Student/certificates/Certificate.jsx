
import './certificate.css'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import PDF from './pdf/PDF';
import { Link } from 'react-router-dom';

const Certificate = () => {
    const user = useSelector(state => state.data.user.user);
    const isComplete = 'successfull';

    return (
        <>
            <div className='my-20 p-5'>
                <div className='flex items-center justify-center gap-5'>
                    {
                        isComplete === 'successfull' ? <>
                            <PDFDownloadLink document={<PDF anotherName={user?.name} />} fileName='certificate.pdf'>
                                {
                                    (({ loading }) => loading ? <button>Loading....</button> : user?.name && <button className='btn btn-success'>Download pdf Now</button>)
                                }
                            </PDFDownloadLink>
                            <Link to='/dashboard/certifications/show'> <button className='btn btn-success'>Show Your Certificate</button></Link>
                        </> : <>
                            <button className='btn-style cursor-not-allowed tooltip tooltip-bottom' data-tip="No Certificate Avaiable!">Download pdf Now</button>
                            <button className='btn-style cursor-not-allowed tooltip tooltip-bottom' data-tip="No Certificate Avaiable!">Show Your Certificate</button>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Certificate;