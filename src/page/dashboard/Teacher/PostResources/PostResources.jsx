/* eslint-disable react/prop-types */
import { pdfjs } from 'react-pdf';
import { useState } from "react";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

const PostResources = () => {

    const user = useSelector(state => state.data.user.user);
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const axiosPublic = useAxiosPublic();

    const teacherName = user?.name;
    const teacherEmail = user?.email;

    const { data: allPdf=[], refetch } = useQuery({
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
        window.open(`https://ed-tech-server-six.vercel.app/files/${pdf}`)
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

                    <button className="btn btn-success w-full mt-6" type="submit">Submit</button>
                </form>

            </div>
            <div className="flex justify-center items-center gap-12 mt-12">
                {
                    allPdf && allPdf.map((pdf) => {
                        return (
                            <div key={pdf._id}>
                                <p>Title: {pdf.title}</p>
                                <button
                                onClick={()=>showPdf(pdf.pdf)}
                                className="btn btn-success">View</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PostResources;