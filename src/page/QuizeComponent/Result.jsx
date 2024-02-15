


import { Link } from 'react-router-dom';
import '../Style/Result.css';

import ResultTable from './ResultTable';
import { useSelector } from 'react-redux';
import  '../../components/Footer/NewsLetter.css'

const Result = ({ selectedOptions, quiz }) => {
    const totalQuestions = quiz.length;
    const user = useSelector((state) => state.data.user.user);
    const totalAttempts = selectedOptions.filter(option => option !== null).length;
    const totalEarnPoints = selectedOptions.reduce((acc, option, index) => {
        return option === quiz[index].correct_answer ? acc + 10 : acc; // Assuming each correct answer earns 10 points
    }, 0);
    const quizResult = totalEarnPoints >= totalQuestions * 5 ? 'Passed' : 'Failed'; // Assuming passing score is 50%

    const  onRestart = () => {
        console.log('on Restart');
    }

    return (
        <div className='container justify-center mx-auto'>
            <div className='flex mx-auto items-center justify-center'>
                <h1 className='title text-2xl text-white '>Result</h1>

            </div>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'>{user.name}</span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'>{totalEarnPoints}</span>
                </div>
                <div className='flex'>
                    <span>Total Question : </span>
                    <span className='bold'>{totalQuestions}</span>
                </div>
                <div className='flex'>
                    <span>Total Attempts : </span>
                    <span className='bold'>{totalAttempts}</span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'>{totalEarnPoints}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Results : </span>
                    <span className='bold'>{quizResult}</span>
                </div>
            </div>

            <div className="start">
                <Link onClick={onRestart} className=' btn-style ' to={'/quest'} >Restart</Link>
            </div>
            <div className=''>
                <ResultTable quiz={quiz} selectedOptions={selectedOptions} />
            </div>
        </div>
    );
};

export default Result;

