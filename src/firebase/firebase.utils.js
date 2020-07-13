import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDiD0ltkOteSihOAabaHB6F2DuUhft2I2k",
    authDomain: "crown-db-a8b2b.firebaseapp.com",
    databaseURL: "https://crown-db-a8b2b.firebaseio.com",
    projectId: "crown-db-a8b2b",
    storageBucket: "crown-db-a8b2b.appspot.com",
    messagingSenderId: "893372034274",
    appId: "1:893372034274:web:91977270f68d83ed3342bb",
    measurementId: "G-6FVGE0T6RQ"
  }

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;