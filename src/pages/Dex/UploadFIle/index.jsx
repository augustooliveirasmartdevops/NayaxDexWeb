import { useEffect, useState } from "react";
import DexUploader from "../../../components/ButtonFileUpload";
import FileViewer from "../../../components/FileViewer";
import { Box } from "@mui/material";
import FileSubmit from "../../../components/FileSubmit";

export const FileHandler = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    console.log("selectedFile", selectedFile);
  }, [selectedFile]);

  const handleFileSelected = (file) => {
    setSelectedFile(file);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <DexUploader onFileSelect={handleFileSelected} />
      <FileViewer file={selectedFile} />
      <FileSubmit file={selectedFile} />
    </Box>
  );
};
