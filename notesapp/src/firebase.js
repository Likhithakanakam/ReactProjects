import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore" ;

const firebaseConfig = {
  apiKey: "AIzaSyBc3i0TstdtvA8MPKPnLX_WaMwdwjh2YRg",
  authDomain: "reactnotesapp-94c82.firebaseapp.com",
  projectId: "reactnotesapp-94c82",
  storageBucket: "reactnotesapp-94c82.appspot.com",
  messagingSenderId: "309786403881",
  appId: "1:309786403881:web:408327a564e6650957a838"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");