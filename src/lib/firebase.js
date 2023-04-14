import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxCv_xkfQod857L_UNXs_T_T1ZkuLMlYM",
  authDomain: "mediaapp-test-5a486.firebaseapp.com",
  projectId: "mediaapp-test-5a486",
  storageBucket: "mediaapp-test-5a486.appspot.com",
  messagingSenderId: "689681226264",
  appId: "1:689681226264:web:0d80bfc1fcf4ffe28e816d",
  measurementId: "G-QYTCMPK9M0"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
