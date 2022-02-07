import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useEffect, useState } from "react";
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const Store = () => {
  const [user, setUser] = useState(null);

  const googlesign = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);
  return { db, googlesign, user, firebase };
};

export default Store;
