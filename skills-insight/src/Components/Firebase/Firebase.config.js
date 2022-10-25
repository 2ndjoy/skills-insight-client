// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABb3KTFwBYaqbhW1pYszIHPNsGK7kcaMc",
    authDomain: "skills-insight.firebaseapp.com",
    projectId: "skills-insight",
    storageBucket: "skills-insight.appspot.com",
    messagingSenderId: "928223435273",
    appId: "1:928223435273:web:a6ea2beac70d8bbaea76d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;