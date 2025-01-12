import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA6eI16Ah38PxDky9P8meqQeKnpPQwG50I",
  authDomain: "netflix-clone-b429f.firebaseapp.com",
  projectId: "netflix-clone-b429f",
  storageBucket: "netflix-clone-b429f.firebasestorage.app",
  messagingSenderId: "333151234758",
  appId: "1:333151234758:web:80b8a80590d5fbbe31c5c7",
  measurementId: "G-N8W3LJ066D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup Function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log("User signed up successfully");
    toast.error(error);
  } catch (error) {
    console.error("Error during signup:", error.message);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
};

// Login Function
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
    alert("Login Successfully")
  } catch (error) {
    console.error("Error signing in:", error.message);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
};

// Logout Function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
};

export { auth, db, login, signup, logout };
