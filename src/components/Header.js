import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = (props) => {
  const component = props.component ? props.component : "h2";
  const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box sx={{ textAlign: "center", pb: 3 }}>
      {matches && (
        <Typography variant="h1" component={component}>
          {props.children}
        </Typography>
      )}
      {!matches && (
        <Typography variant="h2" component={component}>
          {props.children}
        </Typography>
      )}
    </Box>
  );
};

export default Header;
