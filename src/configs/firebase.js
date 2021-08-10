import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzZaj2B6YUoRoAV9YExOgYfP3uK-UfOR4",
    authDomain: "quan-ly-chi-tieu-d0a28.firebaseapp.com",
    projectId: "quan-ly-chi-tieu-d0a28",
    storageBucket: "quan-ly-chi-tieu-d0a28.appspot.com",
    messagingSenderId: "771929421818",
    appId: "1:771929421818:web:5783c03c615dfd48215643",
    measurementId: "G-CRZW1M8RFK"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };