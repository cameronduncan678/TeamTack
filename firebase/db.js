const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyBvbstGLomFspcKkc2qMuMDtRmnWM1rhs0",
    authDomain: "teamtackdb.firebaseapp.com",
    databaseURL: "https://teamtackdb.firebaseio.com",
    projectId: "teamtackdb",
    storageBucket: "teamtackdb.appspot.com",
    messagingSenderId: "1006144591643",
    appId: "1:1006144591643:web:35efaad181fd4351f865be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db;