import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./Firebase.config";
import { GithubAuthProvider } from "firebase/auth/cordova";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvier = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Google login
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvier);
  };
  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider).then(() => {});
  };

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signin user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   set current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      const userEmail = currentuser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setLoading(false);
      //   if user axists then issue a token
      if (currentuser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return unsubscribe;
  }, []);

  // sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // send data
  const authInfo = {
    auth,
    createUser,
    updateUser,
    signInUser,
    googleLogIn,
    githubLogin,
    user,
    loading,
    setLoading,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
