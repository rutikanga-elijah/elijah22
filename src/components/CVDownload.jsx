import React, { useState } from 'react';
import { useDownload } from '../hooks/useDownload';

const CVDownload = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { downloadFile, isDownloading } = useDownload();

  const downloadOptions = [
    {
      format: 'PDF',
      file: '/Rutikanga_Elijah_CV.pdf',
      description: 'Professional formatted CV'
    },
    {
      format: 'Word',
      file: '/Rutikanga_Elijah_CV.docx',
      description: 'Editable Word document'
    },
    {
      format: 'Text',
      file: '/Rutikanga_Elijah_CV.txt',
      description: 'Simple text version'
    }
  ];

  const handleDownload = async (fileUrl, format) => {
    const fileName = `Rutikanga_Elijah_CV.${format.toLowerCase()}`;
    await downloadFile(fileUrl, fileName);
    setShowOptions(false);
  };

  return (
    <div className="cv-download-wrapper">
      <button 
        className="btn btn-primary"
        onClick={() => setShowOptions(!showOptions)}
      >
        📄 Download CV
      </button>

      {showOptions && (
        <div className="cv-options">
          <h4>Choose Format:</h4>
          {downloadOptions.map((option) => (
            <button
              key={option.format}
              className="cv-option-btn"
              onClick={() => handleDownload(option.file, option.format)}
              disabled={isDownloading}
            >
              <span className="format">{option.format}</span>
              <span className="description">{option.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CVDownload;