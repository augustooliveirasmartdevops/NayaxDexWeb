import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { dexService } from "../../services/dex.service";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/context";

export default function FileSubmit({ file }) {
  const { userState } = useContext(AuthContext);
  const { encodedCredentials } = userState;

  const handleSubmit = async () => {
    console.log("handleSubmit called with file:", file);

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        var result = await dexService.uploadfile(formData, encodedCredentials);
        console.log("result", result);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <Paper elevation={0} sx={{ mt: 2 }}>
      <Box sx={{ mt: 1 }}>
        {file ? (
          <Button variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
            Submit File
          </Button>
        ) : null}
      </Box>
    </Paper>
  );
}
