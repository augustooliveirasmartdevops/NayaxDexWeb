import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/context";
import { Button, Typography } from "@mui/material";
import { SignInButton } from "../../components/SignInButton";
import { Link } from "react-router-dom";

export const Home = () => {
  const { userState } = useContext(AuthContext);
  const { isAuthenticated } = userState;
  return (
    <>
      <Typography variant="h3" component="h2">
        Nayax
      </Typography>

      {!isAuthenticated ? (
        <SignInButton title="Sing in" navigateTo="/login" />
      ) : (
        <Button
          variant="outlined"
          color="default"
          sx={{ mt: 3, mb: 2, mr: 2 }}
          component={Link}
          to={"/dexupload"}
        >
          Welcome! Go to Dex Upload
        </Button>
      )}
    </>
  );
};
