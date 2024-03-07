
import '../../components/Footer/NewsLetter.css'

const ResultTable = ({ quiz, selectedOptions }) => {
    return (

        <div className=''>
            <button className="btn-style flex justify-center mx-auto mt-4" onClick={() => document.getElementById('my_modal_5').showModal()}>See Correct Answer</button>
            <dialog id="my_modal_5" className="modal ">
                <div className="modal-box">

                    <div className="">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <table className="result-table  text-white">
                                <thead className=''>
                                    <tr className='text-xl text-black'>
                                        <th>Question</th>
                                        <th>Correct Answer</th>
                                        <th>Your Answer</th>
                                    </tr>
                                </thead>
                                <tbody className='text-black'>
                                    {quiz.map((question, index) => (
                                        <tr key={question.id}>
                                            <td className='border p-2'>{question.question}</td>
                                            <td className='border p-2'>{question.correct_answer}</td>
                                            <td className='border p-2'>{selectedOptions[index]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ResultTable;





