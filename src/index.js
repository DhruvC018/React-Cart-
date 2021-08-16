import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore'; 

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZgLTpBkHga8KC5Hla9kwQMbRuOOOR96E",
  authDomain: "cart-2d939.firebaseapp.com",
  projectId: "cart-2d939",
  storageBucket: "cart-2d939.appspot.com",
  messagingSenderId: "339989241245",
  appId: "1:339989241245:web:863e96a682a0cffe33e374"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//Add firebase config here.