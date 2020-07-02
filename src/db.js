import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyD1gFvUNBVIxKfXYIvbQWZ_EujATfDTEuA",
        authDomain: "nivantis-22928.firebaseapp.com",
        databaseURL: "https://nivantis-22928.firebaseio.com",
        projectId: "nivantis-22928",
        storageBucket: "nivantis-22928.appspot.com",
        messagingSenderId: "832019051108",
        appId: "1:832019051108:web:b3a8856ff1816314d8e571",
    })
    .database();