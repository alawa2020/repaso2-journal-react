// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFAeWftD2t7qoR34Xh0w9PZyc2BgLEzeU',
  authDomain: 'repaso-journal-fernando.firebaseapp.com',
  projectId: 'repaso-journal-fernando',
  storageBucket: 'repaso-journal-fernando.appspot.com',
  messagingSenderId: '675840970708',
  appId: '1:675840970708:web:0b6eaf68e27bad6d729041',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
