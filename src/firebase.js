import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoXbHILJsRPehSeoX5QmPERp0Z0pOOn44",
  authDomain: "chatapp-439cf.firebaseapp.com",
  projectId: "chatapp-439cf",
  storageBucket: "chatapp-439cf.appspot.com",
  messagingSenderId: "751171906961",
  appId: "1:751171906961:web:7056108dd677c789023e30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
