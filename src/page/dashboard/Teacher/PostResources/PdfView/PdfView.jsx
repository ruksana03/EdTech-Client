/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import "./PdfView.css"

const PdfView = ({pdfFile}) => {
  const [numPages, setNumPages] = useState();
  // eslint-disable-next-line no-unused-vars
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='pdf-div w-[800px] mx-auto border border-black'>
      <p className='mb-4'>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page, i) => {
          return (
            <Page key={i}
            pageNumber={page}
            renderTextLayer={false}
            renderAnnotationLayer={false} />
          )
        })}

      </Document>
      
    </div>
  );
}

export default PdfView;