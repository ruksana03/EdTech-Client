/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import '../../components/Footer/NewsLetter.css'
const Quiz = ({ onNext, onPrev, onReview, isReviewMode }) => {
    return (
        <div className='text-white'>
            <div className="space-x-2">
                <button onClick={onPrev} className='btn-style prev'>Prev</button>
                <button onClick={onNext} className='btn-style next'>Next</button>
            </div>
            <div className="mt-12">
  
            </div>
        </div>
    );
};

export default Quiz;



