import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDooNgnhGdCdOQ_ebFVma4ONJVA0kkt-nA",
  authDomain: "crwn-db-d036f.firebaseapp.com",
  databaseURL: "https://crwn-db-d036f.firebaseio.com",
  projectId: "crwn-db-d036f",
  storageBucket: "",
  messagingSenderId: "561169146033",
  appId: "1:561169146033:web:9f3b5adb9313b591"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;