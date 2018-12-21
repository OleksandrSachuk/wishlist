import {FirebaseApp, googleProvider} from '..';

const firebaseLoginGoogle = () =>
  FirebaseApp.auth().signInWithPopup(googleProvider);

const logout = () => FirebaseApp.auth().signOut();

FirebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('onAuthStateChanged - user', user);
    // const {email, displayName, photoURL} = user;
    // const user2 = {email, displayName, photoURL};
  }
});
export {firebaseLoginGoogle, logout};
