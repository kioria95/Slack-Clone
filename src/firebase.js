import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_AhAc0oSQ5cBJ6JSFNIkjAu2oCfL2pmg",
  authDomain: "slack-clone-e3f7c.firebaseapp.com",
  databaseURL: "https://slack-clone-e3f7c.firebaseio.com",
  projectId: "slack-clone-e3f7c",
  storageBucket: "slack-clone-e3f7c.appspot.com",
  messagingSenderId: "636893355900",
  appId: "1:636893355900:web:6741b58baef99720a64ef9",
  measurementId: "G-911MWS6DZP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
