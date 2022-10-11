import Layout from "./Layout";
import NomadologySvg from "./NomadologySvg";
import { Box, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = (props) => {
  return (
    <Layout
      sx={{
        height: 250,
        bgcolor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NomadologySvg sx={{ fontSize: 125 }} />
      </Box>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
        }}
      >
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </Stack>
    </Layout>
  );
};

export default Footer;
