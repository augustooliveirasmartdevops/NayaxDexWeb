import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { dexService } from "../../services/dex.service";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/context";

export default function FileSubmit({ files }) {
  const { userState } = useContext(AuthContext);
  const { encodedCredentials } = userState;

  const handleSubmit = async () => {
    console.log("handleSubmit called with file:", files);

    if (files) {
      try {
        const formData = new FormData();
        Array.from(files).forEach((file) => {
          formData.append("files", file);
        });

        await dexService.uploadfile(formData, encodedCredentials);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <Paper elevation={0} sx={{ mt: 2 }}>
      <Box sx={{ mt: 1 }}>
        {files ? (
          <Button variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
            Submit File
          </Button>
        ) : null}
      </Box>
    </Paper>
  );
}
