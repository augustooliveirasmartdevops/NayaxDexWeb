import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/context";
import { Button, Typography } from "@mui/material";

export const Home = () => {
  const { userState } = useContext(AuthContext);
  const { isAuthenticated } = userState;
  return (
    <>
      <Typography variant="h3" component="h2">
        Nayax - DEX
      </Typography>

      {!isAuthenticated ? (
        <Button variant="outlined" sx={{ mt: 3, mb: 2 }} component={Link} to="/login">
          Sing in
        </Button>
      ) : (
        <Button variant="outlined" sx={{ mt: 3, mb: 2 }} component={Link} to="/dexupload">
          Welcome! Go to Dex Upload
        </Button>
      )}
    </>
  );
};
