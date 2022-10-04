import { useState } from "react";
import TextField from "@mui/material/TextField";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useSignup } from "../hooks/useSignup";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [gender, setGender] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);

    signup(name, email, password);
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
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-name"
        label="Name"
        // variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-email"
        label="Email"
        type="email"
        // variant="standard"
        autoComplete="current-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-price"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <Alert variant="outlined" severity="error" sx={{ mt: 1 }}>
          <AlertTitle>Error</AlertTitle>
          {error} — <strong>check it out!</strong>
        </Alert>
      )}

      {/* <FormLabel id="demo-radio-buttons-group-label" sx={{ pt: 2 }}>
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
      </RadioGroup> */}
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Sign Up
      </Button>
    </FormControl>
  );
}
