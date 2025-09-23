import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/context";
import { Button, Typography } from "@mui/material";
import { SignInButton } from "../../components/SignInButton";

export const Home = () => {
  const { userState } = useContext(AuthContext);
  const { isAuthenticated } = userState;
  return (
    <>
      <Typography variant="h3" component="h2">
        Nayax - DEX
      </Typography>

      {!isAuthenticated ? (
        <SignInButton title="Sing in" navigateTo="/login" />
      ) : (
        <SignInButton title="Welcome! Go to Dex Upload" navigateTo="/dexupload" />
      )}
    </>
  );
};
