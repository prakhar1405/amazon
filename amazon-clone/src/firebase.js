// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADf-84qQE06YrRyjfOxMmwu5WzD6zj5ZM",
    authDomain: "clone-df617.firebaseapp.com",
    projectId: "clone-df617",
    storageBucket: "clone-df617.appspot.com",
    messagingSenderId: "739768693136",
    appId: "1:739768693136:web:61a6e4c1958bacce864315",
    measurementId: "G-KNRSK4QSSH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //initilize firebase
  const db = firebaseApp.firestore(); //initialize database
  const auth = firebase.auth(); //authorization

  export {db, auth};