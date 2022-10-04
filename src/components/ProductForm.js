import { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(name, price, gender);

    const ref = collection(db, "products");

    await addDoc(ref, {
      name: name,
      price: price,
      description: description,
      gender: gender,
      src: "/card2.jpg",
    });
  };

  return (
    <FormControl
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleClick}
    >
      <TextField
        id="outlined-name"
        label="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-price"
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <FormLabel id="demo-radio-buttons-group-label" sx={{ pt: 2 }}>
        Gender
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="unisex" control={<Radio />} label="Unisex" />
      </RadioGroup>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Create
      </Button>
    </FormControl>
  );
}
