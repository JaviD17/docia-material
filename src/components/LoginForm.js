import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, login } = useLogin();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    await login(email, password);

    setEmail("");
    setPassword("");

    navigate("/profile");
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
        // variant="standard"
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

      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Log In
      </Button>
    </FormControl>
  );
}
