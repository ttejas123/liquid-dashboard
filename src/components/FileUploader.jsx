import React, { useState } from 'react';
import PdfPreview from './PreviewPdf';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {selectedFile && <PdfPreview pdfFile={selectedFile} />}
    </div>
  );
}

export default FileUploader;
