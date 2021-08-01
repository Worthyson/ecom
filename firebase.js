import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDVVSVLbo7HHs9NFmg_ERuHRf_v2LqDYC8",
  authDomain: "newecom-4138e.firebaseapp.com",
  projectId: "newecom-4138e",
  storageBucket: "newecom-4138e.appspot.com",
  messagingSenderId: "445726245787",
  appId: "1:445726245787:web:f537d9fdd8cc82b984173e"
 
};


  const AppConfigg = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  const auth = firebase.auth();
  const db = AppConfigg.firestore();
  // const provider = new firebase.auth.GoogleAuthProvider();
  export {db,auth};
