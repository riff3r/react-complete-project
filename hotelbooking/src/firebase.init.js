// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_Kmm2HjihS234Q1v4K8_zecm7jDwRthY',
  authDomain: 'hotelbooking-df17e.firebaseapp.com',
  projectId: 'hotelbooking-df17e',
  storageBucket: 'hotelbooking-df17e.appspot.com',
  messagingSenderId: '245728862720',
  appId: '1:245728862720:web:d155a25639b60044452ee5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
