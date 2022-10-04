import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link as RouterLink } from "react-router-dom";

export default function MultiActionAreaCard({ product }) {
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
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
        >
          To Cart
        </Button>
      </CardActions>
      <CardActions disableSpacing>
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
