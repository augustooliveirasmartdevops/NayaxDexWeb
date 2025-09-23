import { useEffect, useState } from "react";
import DexUploader from "../../../components/ButtonFileUpload";
import FileViewer from "../../../components/FileViewer";
import { Box } from "@mui/material";
import FileSubmit from "../../../components/FileSubmit";

export const FileHandler = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  useEffect(() => {
    console.log("selectedFile", selectedFiles);
  }, [selectedFiles]);

  const handleFileSelected = (files) => {
    setSelectedFiles(files);
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
      <FileViewer files={selectedFiles} />
      <FileSubmit files={selectedFiles} />
    </Box>
  );
};
