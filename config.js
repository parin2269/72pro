import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {

    apiKey: "AIzaSyCuAhaBdhSfQgQO6_ehZi5gxF0w-4w1hVI",
  
    authDomain: "e-rider-3ad01.firebaseapp.com",
  
    projectId: "e-rider-3ad01",
  
    storageBucket: "e-rider-3ad01.appspot.com",
  
    messagingSenderId: "675332117126",
  
    appId: "1:675332117126:web:35998fd941240ebb437707"
  
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
