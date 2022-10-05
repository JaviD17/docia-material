import { useState } from "react";
import { db, storage, auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  // const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  // const signup = (name, email, password) => {
  //   setError(null);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((res) => {
  //       updateProfile(auth.currentUser, {
  //         displayName: name,
  //       });
  //       // console.log("user signed up: ", res.user);
  //       dispatch({ type: "LOGIN", payload: res.user });
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });

  //   //   try { const res = await createUserWithEmailAndPassword(auth, email, password) }
  // };

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);
    // setIsCancelled(false);
    // console.log(isCancelled);

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // check for success
      if (!res) {
        throw new Error("Could not complete signup");
      }

      // upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const storageRef = ref(storage, uploadPath);
      await uploadBytes(storageRef, thumbnail);

      // get img URL
      const imgUrl = await getDownloadURL(storageRef);

      // update profile displayName and PhotoURL
      await updateProfile(res.user, {
        displayName: displayName,
        photoURL: imgUrl,
      });

      // create user document
      const userRef = doc(db, "users", res.user.uid);
      await setDoc(userRef, {
        displayName: displayName,
        online: true,
        photoURL: imgUrl,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      // if (!isCancelled) {
      setError(null);
      setIsPending(false);
      // console.log(isCancelled, "isCancelled should be false");
      // }
    } catch (err) {
      // if (!isCancelled) {
      setError(err.message);
      setIsPending(false);
      // }
    }
  };

  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // }, []);

  return { error, isPending, signup };
};
