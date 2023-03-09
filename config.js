import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_P36tPFKT-AFZkEm6awCpZVcb6ElFILw",
    authDomain: "restock-f107d.firebaseapp.com",
    projectId: "restock-f107d",
    storageBucket: "restock-f107d.appspot.com",
    messagingSenderId: "634787361558",
    appId: "1:634787361558:web:1e0e32f07d225ac20cd637",
    measurementId: "G-Z5K8RYWWZV"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };