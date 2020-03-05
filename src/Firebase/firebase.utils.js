import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCQE_phqh3b92ZPuMaI69QBQ2H9cT2rHsY",
    authDomain: "crwn-db-fc3da.firebaseapp.com",
    databaseURL: "https://crwn-db-fc3da.firebaseio.com",
    projectId: "crwn-db-fc3da",
    storageBucket: "crwn-db-fc3da.appspot.com",
    messagingSenderId: "598947298532",
    appId: "1:598947298532:web:0d3fb3bda08356952740f1",
    measurementId: "G-BPPK4EJN20"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;