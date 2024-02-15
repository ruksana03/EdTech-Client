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

        console.log(info);
        axiosPublic.post('/quiz', info)
                            .then(res => {
                                console.log(res.data)
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
            <h1 className="text-slate-400 font-bold text-3xl text-center">Add a Quiz</h1>

            <form
                onSubmit={handleSubmit}
            >
                <div className="text-slate-400 w-96 mx-auto">
                    <div className="mb-8">
                        <label className="text-xl">Question</label><br />
                        <input type="text" name="question" className="w-full text-white bg-slate-400 rounded-md" required />
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <label className="text-xl">Option1</label><br />
                            <input type="text" name="option1" className="w-full text-white bg-slate-400 rounded-md" required />
                        </div>
                        <div>
                            <label className="text-xl">Option2</label><br />
                            <input type="text" name="option2" className="w-full text-white bg-slate-400 rounded-md" required />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <label className="text-xl">Option3</label><br />
                            <input type="text" name="option3" className="w-full text-white bg-slate-400 rounded-md" required />
                        </div>
                        <div>
                            <label className="text-xl">Option4</label><br />
                            <input type="text" name="option4" className="w-full text-white bg-slate-400 rounded-md" required />
                        </div>
                    </div>
                    <div className="mt-8">
                        <label className="text-xl">Correct Answer</label><br />
                        <input type="text" name="correctAnswer" className="w-full text-white bg-slate-400 rounded-md" required />
                    </div>
                </div>


                <div className="flex justify-center"><button className="bg-first text-black text-2xl py-1 rounded-xl w-1/2  mt-6" type="submit">Submit</button></div>

            </form>
        </div>
    );
};

export default AddQuiz;