// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKRtw78Vuth1sMF3RkD6ScVzeHB07TZqU',
  authDomain: 'coffee-project-bd466.firebaseapp.com',
  projectId: 'coffee-project-bd466',
  storageBucket: 'coffee-project-bd466.appspot.com',
  messagingSenderId: '372687194208',
  appId: '1:372687194208:web:a092ef2ce5c839add29b05',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
