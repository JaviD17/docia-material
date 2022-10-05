import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Delete from "@mui/icons-material/Delete";

import { Link as RouterLink } from "react-router-dom";

import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

export default function MultiActionAreaCard({ product }) {
  const { user } = useAuthContext();
  const handleDelete = async () => {
    const ref = doc(db, "products", product.id);
    await deleteDoc(ref);
  };

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardActionArea component={RouterLink} to={product.id}>
        <CardMedia
          component="img"
          height="200"
          image={product.src}
          alt="shirt"
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              ${product.price}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          color="base"
          startIcon={<IosShareIcon />}
        >
          Share
        </Button>
        <Button sx={{ borderRadius: 2 }} variant="contained" color="primary">
          Buy Now
        </Button>
      </CardActions>
      <CardActions disableSpacing>
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<AddShoppingCartIcon />}
        >
          Add To Cart
        </Button>
      </CardActions>
      {user && (
        <CardActions disableSpacing>
          <Button
            sx={{ borderRadius: 2 }}
            variant="text"
            color="warning"
            fullWidth
            startIcon={<Delete />}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
