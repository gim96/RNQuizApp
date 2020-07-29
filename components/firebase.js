import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAr62NNmGQwswgSHssuAmIU42llb4uu_0",
  authDomain: "mypro-9a838.firebaseapp.com",
  databaseURL: "https://mypro-9a838.firebaseio.com",
  projectId: "mypro-9a838",
  storageBucket: "mypro-9a838.appspot.com",
  messagingSenderId: "1046736683722",
  appId: "1:1046736683722:web:b1a70496dd086898be2a33",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
