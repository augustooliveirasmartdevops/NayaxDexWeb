import React, { useContext, useEffect, useState } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { authService } from "../../services/auth.service";
import { AuthContext } from "../../contexts/AuthProvider/context";
import { userSignIn } from "../../contexts/AuthProvider/action";
import { useNavigate, useLocation } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#88dc00ff",
    },
  },
});

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userState, userDispatch } = useContext(AuthContext);
  const { isAuthenticated } = userState;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    async function fetchData() {
      await authService
        .authenticate(username, password)
        .then(() => {
          const payload = {
            encodedCredentials: btoa(`${username}:${password}`),
            isAuthenticated: true,
          };
          userSignIn(userDispatch, payload);
          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        })
        .catch(() => {});
    }
    fetchData();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#bdbdbdff" }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 3, width: "100%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
