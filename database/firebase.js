import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBMcqJ-528HVY1cfJuA-uyKXPnk-Vn0ZLM",
  authDomain: "abrahampech-e9b08.firebaseapp.com",
  databaseURL: "https://abrahampech-e9b08.firebaseio.com",
  projectId: "abrahampech-e9b08",
  storageBucket: "abrahampech-e9b08.appspot.com",
  messagingSenderId: "446375026975",
  appId: "1:446375026975:web:c0058ec114af84d6ced02a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
