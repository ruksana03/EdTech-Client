
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIKZQd3naw_v6Vy-pIxzm-7_9MprM56F4",
  authDomain: "innavated.firebaseapp.com",
  projectId: "innavated",
  storageBucket: "innavated.appspot.com",
  messagingSenderId: "1047670901110",
  appId: "1:1047670901110:web:9b9f1746094ca3a25e1257"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;