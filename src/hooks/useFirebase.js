import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../components/Firebase/firebase.auth";

//initialize Firebase Authentication
firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  //installing authenication
  const auth = getAuth();

  //Setup Google Driver
  const googleProvider = new GoogleAuthProvider();

  //handle Google sign in
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      setIsLogin(true);
    });
  };

  //observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe();
  }, [auth]);

  //SignOut Function
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
      // console.log("Sign Out Successfully");
    });
  };

  return { googleSignin, logOut, isLogin, user, setIsLogin };
};

export default useFirebase;
