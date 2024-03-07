/* eslint-disable no-unused-vars */


import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Questions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { data: quizData, isLoading, isError } = useQuery({
        queryKey: "quizData",
        queryFn: async () => {
            const response = await axiosPublic.get('/quiz'); // Update the URL as per your backend API
            return response.data;
        },
    });
    useEffect(() => {
        axiosPublic.get("http://localhost:5000/quiz")
        .then(response => {
          
            if (response.data) {
                setSelectedOptions(Array.isArray(response.data) ? Array(response.data.length).fill(null) : []);
            }
        })
        .catch(error => {
            console.log('error in data', error);
        });
    }, []);
    

    const onSelect = (option) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestionIndex] = option;
        setSelectedOptions(updatedSelectedOptions);
    };

    const onNext = () => {
        if (currentQuestionIndex < quizData.length - 1) {
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

    const isQuizCompleted = selectedOptions.length === quizData?.length && !selectedOptions.includes(null);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <div className="pt-28 p__cormorant">
            <div className="mx-auto flex justify-center">
                {isQuizCompleted && !isReviewMode ? (
                    <Result selectedOptions={selectedOptions} quiz={quizData} />
                ) : (
                    <div className="">
                        <div className='questions'>
                            <h2 className='text-white text-3xl'>{quizData[currentQuestionIndex]?.question}</h2>
                            <ul className="mt-4 space-y-2 " key={quizData[currentQuestionIndex]?.id}>
                                {quizData[currentQuestionIndex]?.options.map((q, i) => (
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




















