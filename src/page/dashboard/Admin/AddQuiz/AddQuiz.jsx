/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AddQuiz = () => {
    const axiosPublic = useAxiosPublic();
    const handleSubmit = (e) => {
        e.preventDefault();
        const question = e.target.question.value;
        const option1 = e.target.option1.value;
        const option2 = e.target.option2.value;
        const option3 = e.target.option3.value;
        const option4 = e.target.option4.value;
        const correct_answer = e.target.correctAnswer.value;
        const info = {
            question,
            options: [option1, option2, option3, option4],
            correct_answer
        };

        axiosPublic.post('/quiz', info)
            .then(res => {
                if (res.data.status == "ok") {
                    e.target.reset();
                    Swal.fire({
                        position: "top-start",
                        icon: "success",
                        title: "Quiz added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen">
            <h1 className="headtext__cormorant text-center">Add a Quiz</h1>

            <form
                onSubmit={handleSubmit}
            >
                <div className="p__cormorant w-96 mx-auto">
                    <div className="mb-8">
                        <label className="text-xl">Question</label><br />
                        <input type="text" name="question" className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0" required placeholder="Question" />
                        <hr className="border-t border-first" />
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <label className="text-xl">Option1</label><br />
                            <input type="text" name="option1" className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0" required placeholder="Option1" />
                            <hr className="border-t border-first" />
                        </div>
                        <div>
                            <label className="text-xl">Option2</label><br />
                            <input type="text" name="option2" className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0" required />
                            <hr className="border-t border-first" placeholder="Option2" />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-8">
                        <div>
                            <label className="text-xl">Option3</label><br />
                            <input type="text" name="option3" className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0" required placeholder="Option3" />
                            <hr className="border-t border-first" />
                        </div>
                        <div>
                            <label className="text-xl">Option4</label><br />
                            <input type="text" name="option4" className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0" required placeholder="Option4" />
                            <hr className="border-t border-first" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <label className="text-xl">Correct Answer</label><br />
                        <input type="text" name="correctAnswer" className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0" required placeholder="Correct Answer" />
                        <hr className="border-t border-first" />
                    </div>
                </div>


                <div className="flex justify-center mt-8"><button className="btn-style w-8/12 mx-auto" type="submit">Submit</button></div>

            </form>
        </div>
    );
};

export default AddQuiz;