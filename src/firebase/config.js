import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAyhUlvlIeSNF8RVJBw3MGlvKZlpMQKK-U",
    authDomain: "react-olx-1782a.firebaseapp.com",
    projectId: "react-olx-1782a",
    storageBucket: "react-olx-1782a.appspot.com",
    messagingSenderId: "529720220305",
    appId: "1:529720220305:web:6d6bd25f2d061a4dc9bd30",
    measurementId: "G-JRDM3CVFG4"
  };

 export default firebase.initializeApp(firebaseConfig)