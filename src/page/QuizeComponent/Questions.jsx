



import { useEffect, useState } from "react";
import quiz from '../../../public/quiz.json';
import Quiz from "./Quiz";
import Result from "./Result";

const Questions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(quiz.length).fill(null));
    const [isReviewMode, setIsReviewMode] = useState(false);

    const question = quiz[currentQuestionIndex];

    useEffect(() => {
        console.log(question);
    }, [currentQuestionIndex]);

    const onSelect = (option) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestionIndex] = option;
        setSelectedOptions(updatedSelectedOptions);
    };

    const onNext = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const onPrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const onReview = () => {
        setIsReviewMode(!isReviewMode);
    };

    const isQuizCompleted = selectedOptions.every(option => option !== null);

    return (
        <div className="pt-28 p__cormorant">
            <div className="mx-auto flex justify-center">
                {isQuizCompleted && !isReviewMode ? (
                    <Result selectedOptions={selectedOptions} quiz={quiz} />
                ) : (
                    <div className="">
                        <div className='questions'>
                            <h2 className='text-white text-3xl'>{question.question}</h2>
                            <ul className="mt-4 space-y-2 " key={question.id}>
                                {question.options.map((q, i) => (
                                    <li key={i}>
                                        <input
                                            type="radio"
                                            value={q}
                                            name="options"
                                            id={`q${i}-option`}
                                            onChange={() => onSelect(q)}
                                            checked={selectedOptions[currentQuestionIndex] === q}
                                        />
                                        <label className="text-white text-xl ml-2" htmlFor={`q${i}-option`}>{q}</label>
                                        <div className="check"></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <Quiz onNext={onNext} onPrev={onPrev} onReview={onReview} isReviewMode={isReviewMode} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Questions;










