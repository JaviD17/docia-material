import { useState } from "react";
import { db, auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  // const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user, dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    // setIsCancelled(false);

    try {
      // update user online status
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        online: false,
      });

      // sign user out
      await signOut(auth);

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      // if (!isCancelled) {
      setError(null);
      setIsPending(false);
      // }
    } catch (err) {
      // if (!isCancelled) {
      setError(err.message);
      // }
    }

    // signOut(auth)
    //   .then(() => {
    //     // console.log("user signed out");
    //     dispatch({ type: "LOGOUT" });
    //   })
    //   .catch((err) => {
    //     if (!isCancelled) {
    //       setError(err.message);
    //     }
    //   });
  };

  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // }, []);

  return { error, isPending, logout };
};
