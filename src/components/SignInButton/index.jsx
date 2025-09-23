import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const SignInButton = (props) => {
  const { title, navigateTo } = props;
  return (
    <Button
      variant="outlined"
      color="default"
      sx={{ mt: 3, mb: 2 }}
      component={Link}
      to={navigateTo}
    >
      {title}
    </Button>
  );
};
