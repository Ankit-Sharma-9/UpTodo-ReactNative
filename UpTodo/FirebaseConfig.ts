import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, setPersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCvFeuX0Gb921OrVDQW5ZTA2y81lM1Q4g8",
  authDomain: "uptodo-react-native.firebaseapp.com",
  projectId: "uptodo-react-native",
  storageBucket: "uptodo-react-native.appspot.com",
  messagingSenderId: "745597522156",
  appId: "1:745597522156:web:c43fd16a02a05f0446d5c9",
  measurementId: "G-PX6HMWYSSP"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)