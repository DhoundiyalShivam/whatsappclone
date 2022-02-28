//This is to connect the database with the our app
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
const firebaseConfig = {
     apiKey: "AIzaSyCAbQjPoJh3QuLcnubpN-WRMacedTyNVuU",
    authDomain: "whats-app-clone-91040.firebaseapp.com",
    projectId: "whats-app-clone-91040",
    storageBucket: "whats-app-clone-91040.appspot.com",
    messagingSenderId: "889928404886",
    appId: "1:889928404886:web:947ed10284cb15e4db17b7",
    measurementId: "G-HH0R15VVQE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;