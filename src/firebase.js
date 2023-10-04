import { initializeApp  } from "firebase/app";
import 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import{getStorage} from "firebase/storage";
import {getAuth}from 'firebase/auth'
import 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJsUPR5HZqJK-PqlGtSQZ0cxgh5NHmml4",
  authDomain: "portifolio-e4589.firebaseapp.com",
  projectId: "portifolio-e4589",
  storageBucket: "portifolio-e4589.appspot.com",
  messagingSenderId: "1093227670293",
  appId: "1:1093227670293:web:8451ab3caad61c521b571c",
  measurementId: "G-B3T9VXB1LS"
};



// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app)
 const db = getFirestore(app);
const auth = getAuth(app)
 export { app,storage,db, auth}


