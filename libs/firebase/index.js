// Build the App instance of Firebase
import { initializeApp } from 'firebase/app';

import firebaseConfig from "./firebase";

const firebase = initializeApp(firebaseConfig);


export default firebase