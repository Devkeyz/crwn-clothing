import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNYMM_KSuROYLVABeUoWAiFNZ4Frc3Ta0",
  authDomain: "clth-str-react.firebaseapp.com",
  databaseURL: "https://clth-str-react.firebaseio.com",
  projectId: "clth-str-react",
  storageBucket: "clth-str-react.appspot.com",
  messagingSenderId: "291330354009",
  appId: "1:291330354009:web:ab5513e00e055d987dba48"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
