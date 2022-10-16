import { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Fab from "@mui/material/Fab";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { db, storage, auth } from "../firebase/config";
import {
  collection,
  addDoc,
  Timestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useAuthContext } from "../hooks/useAuthContext";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { user } = useAuthContext();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(name, price, gender);

    const colRef = collection(db, "products");

    const res = await addDoc(colRef, {
      name: name,
      price: price,
      description: description,
      gender: gender,
      src: "",
      createdAt: Timestamp.now(),
      createdBy: user.uid,
    });

    console.log(res.id);

    const uploadPath = `products/${res.id}/${thumbnail.name}`;
    const storageRef = ref(storage, uploadPath);
    await uploadBytes(storageRef, thumbnail);

    const imgUrl = await getDownloadURL(storageRef);

    const docRef = doc(db, "products", res.id);

    await updateDoc(docRef, {
      src: imgUrl,
    });

    setName("");
    setPrice("");
    setDescription("");
    setGender("");
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
