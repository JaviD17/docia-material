import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Fab from "@mui/material/Fab";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { useSignup } from "../hooks/useSignup";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        id="outlined-password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <TextField
        id="outlined-image"
        // label="Image"
        type="file"
        accept="image/*"
      /> */}

      {/* this works with button only */}
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
          accept="image/*"
        />
        <Fab
          color="secondary"
          variant="extended"
          component="span"
          aria-label="upload"
          sx={{ mt: 1 }}
        >
          <UploadFileIcon sx={{ mr: 1 }} />
          Upload
        </Fab>
      </label>

      {error && (
        <Alert variant="outlined" severity="error" sx={{ mt: 1 }}>
          <AlertTitle>Error</AlertTitle>
          {error} — <strong>check it out!</strong>
        </Alert>
      )}

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
