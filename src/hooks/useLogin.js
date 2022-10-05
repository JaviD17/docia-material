import { useState } from "react";
import { db, auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    // setIsCancelled(false);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not login");
      }

      const userRef = doc(db, "users", res.user.uid);
      await updateDoc(userRef, {
        online: true,
      });

      dispatch({ type: "LOGIN", payload: res.user });

      // if (!isCancelled) {
      setError(null);
      setIsPending(false);
      // }
    } catch (err) {
      // if (!isCancelled) {
      setError(err.message);
      setIsPending(false);
      // }
    }

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((res) => {
    //     // console.log("user signed in: ", res.user);
    //     dispatch({ type: "LOGIN", payload: res.user });
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
  };

  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // });

  return { error, isPending, login };
};
