// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function ProductForm() {
  return (
    <FormControl
      //   component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-name" label="Product Name" defaultValue="" />
      <TextField id="outlined-price" label="Price" defaultValue="" />

      <FormLabel id="demo-radio-buttons-group-label" sx={{ pt: 2 }}>
        Gender
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Unisex" />
      </RadioGroup>
      <Button color="primary" variant="contained" size="large" sx={{ mt: 2 }}>
        Create
      </Button>
    </FormControl>
  );
}
