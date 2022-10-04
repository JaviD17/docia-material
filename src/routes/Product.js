import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";

const Product = (props) => {
  const { id } = useParams();
  return (
    <Layout>
      <Header>Product</Header>
      <Typography>{id}</Typography>
    </Layout>
  );
};

export default Product;
