// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCechTn7OnLbHa3DRPJL6MfGHOHjbfNPJE",
  authDomain: "troop-2205-c213f.firebaseapp.com",
  projectId: "troop-2205-c213f",
  storageBucket: "troop-2205-c213f.appspot.com",
  messagingSenderId: "925806166294",
  appId: "1:925806166294:web:72c14695f2bcc744a3d037"
};

// Initialize Firebase
const app = initializeApp(config);


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}