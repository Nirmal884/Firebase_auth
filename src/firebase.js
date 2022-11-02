import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDc_erkPwXYDD77BgDnCuvrpvjLEwb3auM",
    authDomain: "fir-auth-demo-34be8.firebaseapp.com",
    projectId: "fir-auth-demo-34be8",
    storageBucket: "fir-auth-demo-34be8.appspot.com",
    messagingSenderId: "338861996935",
    appId: "1:338861996935:web:9b01f0f0a95cb15a353122",
    measurementId: "G-YVE0HYF1LX"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  export {app,auth}