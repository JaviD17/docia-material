import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Item(props) {
  // bgcolor: "rgba(164, 203, 180, .5)", for Paper component

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        bgcolor: "rgba(0, 0, 0, .25)",
        height: 400,
      }}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button sx={{ borderRadius: 2 }} variant="contained" color="primary">
        Check it out!
      </Button>
    </Paper>
  );
}

const Hero = (props) => {
  var items = [
    {
      name: "DOCIA Fall Drop",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel sx={{ borderRadius: 2 }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Hero;
