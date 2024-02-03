/* eslint-disable react/prop-types */
import { pdfjs } from 'react-pdf';
import { useState } from "react";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PdfView from './PdfView/PdfView';
import { FaEye, FaTrash } from "react-icons/fa";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const PostResources = () => {

    const user = useSelector(state => state.data.user.user);
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [pdfFile, setPdfFile] = useState(null);
    const axiosPublic = useAxiosPublic();

    const teacherName = user?.name;
    const teacherEmail = user?.email;

    const { data: allPdf = [], refetch } = useQuery({
        queryKey: ["allPdf"],
        queryFn: async () => {
            const res = await axiosPublic.get("/get-files");
            return res.data.data;
        }
    });


    console.log(allPdf);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("teacherName", teacherName);
        formData.append("teacherEmail", teacherEmail);
        formData.append("title", title);
        formData.append("file", file);

        const result = await axiosPublic.post("/upload-files", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log(result);
        refetch();
    }

    const showPdf = (pdf) => {
        // window.open(`http://localhost:5000/files/${pdf}`);
        setPdfFile(`http://localhost:5000/files/${pdf}`);
    }


    return (
        <div className="mt-12">
            <div className="w-[800px] mx-auto p-6 border border-black rounded-xl flex justify-center">


                <form
                    onSubmit={handleSubmit}
                >
                    <div className="flex gap-6 justify-between items-center">
                        <div>
                            <label className="text-xl">Your Name</label><br />
                            <input type="text"
                                placeholder={user?.name}
                                readOnly
                                className="w-[350px]" />
                        </div>
                        <div>
                            <label className="text-xl">Your Email</label><br />
                            <input type="text"
                                placeholder={user?.email}
                                readOnly
                                className="w-[350px]" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div>
                            <label className="text-xl">Resource Title</label><br />
                            <input type="text"
                                placeholder="Title"
                                required
                                className="w-[750px]"
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className="border border-black border-dashed p-12 mt-6 flex justify-center">
                        <input type="file"
                            accept="application/pdf"
                            required
                            className="w-[600px]"
                            onChange={(e) => setFile(e.target.files[0])} />
                    </div>

                    <button className="bg-first text-white text-2xl py-1 rounded-xl w-full mt-6" type="submit">Submit</button>
                </form>

            </div>
                
                    
             
            <div className="w-[800px] mx-auto p-6 border border-black rounded-xl my-8">
                <div className="overflow-x-auto">
                <h1 className='text-center text-4xl text-first font-bold mb-4'>Your Uploaded File</h1>
                    <table className="table table-zebra border border-black">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Teacher Name</th>
                                <th>File Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allPdf && allPdf.map((pdf) => {
                                    return (
                                        <tr key={pdf._id}>
                                            <td>{pdf.teacherName}</td>
                                            <td>{pdf.title}</td>
                                            <td><button
                                                onClick={() => showPdf(pdf.pdf)}
                                                className="bg-first text-white p-2 rounded-full text-2xl"><FaEye></FaEye></button></td>
                                            <td><button
                                                onClick={() => showPdf(pdf.pdf)}
                                                className="bg-first text-white p-2 rounded-full text-2xl"><FaTrash></FaTrash></button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

           
            <PdfView pdfFile={pdfFile}></PdfView>
        </div>
    );
};

export default PostResources;