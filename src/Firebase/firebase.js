import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpWwJCsPQ0l0mlbDzK08IQ4CQ0ZGGmmb0",
  authDomain: "northwing-solutions.firebaseapp.com",
  projectId: "northwing-solutions",
  storageBucket: "northwing-solutions.firebasestorage.app",
  messagingSenderId: "664541434814",
  appId: "1:664541434814:web:b3e9d2a72aa8449036dfef"
};

const app = initializeApp(firebaseConfig);

export default app;