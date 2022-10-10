import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeStepper from "../components/HomeStepper";
import Layout from "../components/Layout";
import NomadologySvg from "../components/NomadologySvg";

const Home = (props) => {
  return (
    <Layout>
      <Header component="h1">NOMADOLOGY</Header>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <NomadologySvg sx={{ fontSize: 250 }} />
      </Box>
      <Hero />
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ my: 3, fontWeight: "bold" }}
      >
        The NOMADOLOGY Process
      </Typography>
      <HomeStepper />
    </Layout>
  );
};

export default Home;
