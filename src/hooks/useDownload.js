import { useState } from 'react';

export const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async (fileUrl, fileName) => {
    setIsDownloading(true);
    
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      setIsDownloading(false);
      
      return true;
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      return false;
    }
  };

  return { downloadFile, isDownloading };
};