import { useState } from "react";

import { Auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(Auth, email, password)
      .then((res) => {
        console.log('user signup up: ', res.user)
      })
      .catch((err) => {
        setError(err.message)
      })
  };

  return { error, signup };
};
