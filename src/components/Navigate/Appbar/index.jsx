import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../../../contexts/AuthProvider/context";
import { useContext } from "react";
import { SignInButton } from "../../SignInButton";

function HomeAppBar() {
  const { userState } = useContext(AuthContext);
  const { isAuthenticated } = userState;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nayax - DEX
          </Typography>
          {!isAuthenticated ? (
            <SignInButton title="Sing in" navigateTo="/login" />
          ) : (
            <Typography variant="subtitle1" gutterBottom>
              Welcome!
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default HomeAppBar;
