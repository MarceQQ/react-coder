import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnvZiFQze8B5LgRPvTOk0_in-pmKuJP8w",
  authDomain: "coder-house-7a27d.firebaseapp.com",
  projectId: "coder-house-7a27d",
  storageBucket: "coder-house-7a27d.firebasestorage.app",
  messagingSenderId: "934466296435",
  appId: "1:934466296435:web:ba8304c7be318697132806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)