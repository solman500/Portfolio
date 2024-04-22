

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

  const firebaseConfig = {
      apiKey: "AIzaSyBMtoJoeJbJ9Azhadur4oxSb3v73nJDbNk",
      authDomain: "project-48436.firebaseapp.com",
      databaseURL: "https://project-48436-default-rtdb.firebaseio.com",
      projectId: "project-48436",
      storageBucket: "project-48436.appspot.com",
      messagingSenderId: "78886562672",
      appId: "1:78886562672:web:9a74df1046ff532d1fbdb5"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    export default db;