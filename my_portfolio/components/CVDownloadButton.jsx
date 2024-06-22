"use client"
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const CVDownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/16pMNQ1kISgHYQLFFAWLq2bIrXnaX95gz/view'; // yaha apna CV ka URL dalein
    link.download = 'SanchitCV.pdf'; // yaha file ka naam specify karein
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownloadCloud />
    </Button>
  );
};

export default CVDownloadButton;
