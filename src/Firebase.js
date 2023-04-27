import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqLbkY0VzlkJQIIpJfqAgEYyYNWWB5kmo",
  authDomain: "final-project-de7d6.firebaseapp.com",
  projectId: "final-project-de7d6",
  storageBucket: "final-project-de7d6.appspot.com",
  messagingSenderId: "1055411947334",
  appId: "1:1055411947334:web:9334ab09a16021988d8747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
