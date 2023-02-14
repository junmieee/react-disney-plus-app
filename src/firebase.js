// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3e75qAU8HAq3FZHxMwskkmZWB1F2NGZI",
    authDomain: "react-disney-plus-app-58065.firebaseapp.com",
    projectId: "react-disney-plus-app-58065",
    storageBucket: "react-disney-plus-app-58065.appspot.com",
    messagingSenderId: "602848794957",
    appId: "1:602848794957:web:e17775062828a18bb2bf04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;