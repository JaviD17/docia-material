import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ products }) {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={products.src}
          alt="shirt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {products.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          size="small"
          color="base"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
