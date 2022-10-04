// import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Layout from "../components/Layout";
import ShopCard from "../components/ShopCard";
import ShopModal from "../components/ShopModal";
import Header from "../components/Header";
// import ShopMenu from "../components/ShopMenu";
import { useCollection } from "../hooks/useCollection";

export default function Shop() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   const ref = collection(db, "products");
  //   getDocs(ref).then((snapshot) => {
  //     let results = [];
  //     snapshot.docs.forEach((doc) => {
  //       results.push({ id: doc.id, ...doc.data() });
  //     });
  //     setProducts(results);
  //     console.log(results);
  //   });
  // }, []);

  const { documents: products } = useCollection("products");

  return (
    <Layout>
      <Header>Shop</Header>

      {matches && (
        <Box
          sx={{
            mb: 3,
            py: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "secondary.main",
            boxShadow:
              "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            borderRadius: 2,
          }}
        >
          <ShopModal />
        </Box>
      )}

      {products && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {products.map((p) => (
              <Grid key={p.id} xs={12} md={3}>
                <ShopCard product={p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {/* <ShopMenu /> */}
    </Layout>
  );
}
