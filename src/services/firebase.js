// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyC1gLwfICW0CulQGyXVPPS9HziaApLH6jw",
  authDomain: "chat-351ef.firebaseapp.com",
  projectId: "chat-351ef",
  storageBucket: "chat-351ef.appspot.com",
  messagingSenderId: "451414133053",
  appId: "1:451414133053:web:adaf61d82dcc584ed21d54"
};

// Initialize Firebase

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();