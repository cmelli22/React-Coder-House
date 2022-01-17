import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDMQZ0Rs_G4y0RUe_hTpefrV56C9Kughq4",
    authDomain: "ecommercereact-6d9f5.firebaseapp.com",
    projectId: "ecommercereact-6d9f5",
    storageBucket: "ecommercereact-6d9f5.appspot.com",
    messagingSenderId: "696333227776",
    appId: "1:696333227776:web:e6ea99de529ff25f2605e5"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)   