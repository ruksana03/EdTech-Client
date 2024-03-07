/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import  { useRef, useState } from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../Style/Main.css'
import '../../components/Footer/NewsLetter.css'
import { useSelector } from 'react-redux';



const Man = () => {
    const [username, setUsername] = useState('');
    const user = useSelector((state) => state.data.user.user);
    const inputRef = useRef(null);

    const  startQuiz = () => {
        if (inputRef.current?.value) {
            setUsername(inputRef.current?.value);
        }
    }

  return (
    <div className='w-8/12 mx-auto pt-28 p__cormorant'>
        <h1 className='title text-light font-bold text-white text-2xl headtext__cormorant'>Quiz Application</h1>

        <ol className='mt-4 text-sm'>
            <li>1. You will be asked 10 questions one after another.</li>
            <li>2. 10 points is awarded for the correct answer.</li>
            <li>3. Each question has three options. You can choose only one options.</li>
            <li>4. You can review and change answers before the quiz finish.</li>
            <li>5. The result will be declared at the end of the quiz.</li>
            <li>6. The result will be 50% then the passed otherwise Failed.</li>
        </ol>
        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder={user.name} />
        </form>

        <div className='start'>
            <Link to={'/man'} className='btn-style'  onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}

export default Man;