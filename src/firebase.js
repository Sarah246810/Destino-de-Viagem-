import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-ML8Gon4IsmzhNMeR2K4vosvujrLiJd8",
    authDomain: "banco-bc2e5.firebaseapp.com",
    projectId: "banco-bc2e5",
    storageBucket: "banco-bc2e5.appspot.com",
    messagingSenderId: "633051967861",
    appId: "1:633051967861:web:d6c9b9a45f5911f9d0a33c"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth }; 

   



