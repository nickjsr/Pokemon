import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import the storage module
import { getDatabase } from 'firebase/database';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './search-components/App'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAonyQS5lDx_fHkFifEX6_d5GUZewnZlHY",
    authDomain: "pokemon-1693b.firebaseapp.com",
    databaseURL: "https://pokemon-1693b-default-rtdb.firebaseio.com",
    projectId: "pokemon-1693b",
    storageBucket: "pokemon-1693b.appspot.com",
    messagingSenderId: "360574851621",
    appId: "1:360574851621:web:b7f392b471dd782e42bdcc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const firebaseStorage = getStorage(firebaseApp);

// Initialize Firebase Database
const db = getDatabase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export { firebaseStorage, db };