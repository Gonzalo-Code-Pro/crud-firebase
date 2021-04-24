import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAUbyXq4a4dKCGxpjdE91tHdG2W7d8KFoA",
    authDomain: "crud-basic-firebase.firebaseapp.com",
    projectId: "crud-basic-firebase",
    storageBucket: "crud-basic-firebase.appspot.com",
    messagingSenderId: "1018486749438",
    appId: "1:1018486749438:web:bf57f52f78c7a6caf3cdaf"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {
      db
  }