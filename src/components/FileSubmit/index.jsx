import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress } from "@mui/material";
import { dexService } from "../../services/dex.service";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/context";
import { useState } from "react";

export default function FileSubmit({ file }) {
  const { userState } = useContext(AuthContext);
  const { encodedCredentials } = userState;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (file) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);

        const result = await dexService.uploadfile(formData, encodedCredentials);
        console.log("Result", result);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Paper elevation={0} sx={{ mt: 2 }}>
      <Box sx={{ mt: 1 }}>
        {file ? (
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size="30px" /> : "Submit File"}
          </Button>
        ) : null}
      </Box>
    </Paper>
  );
}
