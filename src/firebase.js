import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6eXFOPDfsQXhlW244_VsfQN8PV7pBDQE",
  authDomain: "db-42362.firebaseapp.com",
  projectId: "db-42362",
  storageBucket: "db-42362.appspot.com",
  messagingSenderId: "351016634473",
  appId: "1:351016634473:web:42265eefd40c269b18faf8"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app;