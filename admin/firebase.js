  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  //import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js"
  import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js'
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBfq85tih8d6ObJXsQFBg42CMaR_PPxzV8",
    authDomain: "the-drop-4d055.firebaseapp.com",
    projectId: "the-drop-4d055",
    storageBucket: "the-drop-4d055.appspot.com",
    messagingSenderId: "1070282053070",
    appId: "1:1070282053070:web:30cba286255b0d4f7f079f",
    measurementId: "G-DLHJ1561FD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore();

  export const saveArticle = (name, price, description) => {
    addDoc(collection(db, 'articles'), {name, price, description});
  }