import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOT7nCYFFrkH9HgwIjTsM9hBy3o2UMtgc",
    authDomain: "backend-mern-6a889.firebaseapp.com",
    projectId: "backend-mern-6a889",
    storageBucket: "backend-mern-6a889.appspot.com",
    messagingSenderId: "1015228580334",
    appId: "1:1015228580334:web:534e3ed965989a30d40eff",
    measurementId: "G-0DSVLXD7GG"
  };

  const app = initializeApp(firebaseConfig);

  module.exports = app