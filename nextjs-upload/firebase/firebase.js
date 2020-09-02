import * as firebase from 'firebase'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBnG-Wx2X86Yv3Rpp5XA2j-RPQW1jFAms",
    authDomain: "upload-tutorial-yudha.firebaseapp.com",
    databaseURL: "https://upload-tutorial-yudha.firebaseio.com",
    projectId: "upload-tutorial-yudha",
    storageBucket: "upload-tutorial-yudha.appspot.com",
    messagingSenderId: "788873304014",
    appId: "1:788873304014:web:c2624cf1204574d44cfd9f",
    measurementId: "G-XX435266YL"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // firebase.analytics();
  const storage = firebase.storage()

export  {
   storage, firebase
 }