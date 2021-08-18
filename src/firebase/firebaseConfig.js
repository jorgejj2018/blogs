import firebase from "firebase/app";
import "firebase/firestore"


firebase.initializeApp({
    apiKey: "AIzaSyCnFDQADlrK54RtAjRJjMYRmcKmhjSVhDM",
    authDomain: "blogs-e820f.firebaseapp.com",
    projectId: "blogs-e820f",
    storageBucket: "blogs-e820f.appspot.com",
    messagingSenderId: "355067462023",
    appId: "1:355067462023:web:3a8541130bd6ea7b3d1322"
  });

  const db = firebase.firestore()
  export{
    firebase,
    db,
}