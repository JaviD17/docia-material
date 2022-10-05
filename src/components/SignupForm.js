import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Fab from "@mui/material/Fab";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { error, isPending, signup } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);

    await signup(email, password, name, thumbnail);

    setName("");
    setEmail("");
    setPassword("");

    navigate("/profile");
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }

    if (selected.size > 500000) {
      setThumbnailError("Image file size must be less than 500kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    // console.log("Thumbnail updated", thumbnail);
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
          // value={thumbnail}
          onChange={handleFileChange}
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

      {thumbnailError && (
        <Alert variant="outlined" severity="error" sx={{ mt: 1 }}>
          <AlertTitle>Error</AlertTitle>
          {thumbnailError} — <strong>check it out!</strong>
        </Alert>
      )}

      {error && (
        <Alert variant="outlined" severity="error" sx={{ mt: 1 }}>
          <AlertTitle>Error</AlertTitle>
          {error} — <strong>check it out!</strong>
        </Alert>
      )}

      {!isPending && (
        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
      )}

      {isPending && (
        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          disabled
          sx={{ mt: 2 }}
        >
          Loading
        </Button>
      )}
    </FormControl>
  );
}
