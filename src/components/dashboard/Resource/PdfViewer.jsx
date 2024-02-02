import React, { useState } from 'react';
import  './PdfViewer.css'

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { DefaultLayoutPlugin, defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const PdfViewer = () => {

    const [pdfFile, setPdfFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);

    const fileType = ['application/pdf'];

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                const reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload = (e) => {
                    setPdfFile(e.target.result);
                };
            } else {
                setPdfFile(null);
            }
        } else {
            console.log("Please Select");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile); // Set viewPdf instead of pdfFile
        } else {
            setViewPdf(null);
        }
    };

    const newPlugin = defaultLayoutPlugin();

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="file" className="form-control" onChange={handleChange} />
                <br />
                <button className="btn btn-secondary" type="submit">
                    View Pdf
                </button>
            </form>

            <h2>View Pdf</h2>
            <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.349/build/pdf.worker.min.js">
                    {viewPdf && <Viewer fileUrl={viewPdf} plugins={[newPlugin]} />}
                    {!viewPdf && <>NO Pdf</>}
                </Worker>
            </div>
        </div>
    );
};

export default PdfViewer;