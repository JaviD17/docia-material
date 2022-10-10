import Header from "../components/Header";
import Layout from "../components/Layout";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const Story = (props) => {
  return (
    <Layout>
      <Header>Our Why</Header>

      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: 150,
          bgcolor: "rgba(0, 0, 0, 0.75)",
          color: "secondary.main",
          p: 2,
          fontWeight: "bold",
        }}
      >
        <Typography variant="h4" component="h6">
          Origin
        </Typography>
        <Link
          underline="hover"
          component={RouterLink}
          to="/faq"
          color="secondary"
        >
          F A Q
        </Link>
      </Paper>
    </Layout>
  );
};

export default Story;
