import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX3H5xUWnqOrSRQgyjlGoXxFFN8s_QVo8",
  authDomain: "portfoliowebpage-6b56d.firebaseapp.com",
  projectId: "portfoliowebpage-6b56d",
  storageBucket: "portfoliowebpage-6b56d.firebasestorage.app",
  messagingSenderId: "860771385752",
  appId: "1:860771385752:web:5cc6fd6613d81faa10abed",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
