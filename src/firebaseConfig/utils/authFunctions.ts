import {FirebaseApp, googleProvider} from '..';

const loginWithGoogle = () =>
  FirebaseApp.auth()
    .signInWithPopup(googleProvider)
    .catch((err: any) => console.error('loginWithGoogle error: ', err));

const logout = () => FirebaseApp.auth().signOut();

FirebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    const {email, displayName, photoURL} = user;
    const user2 = {email, displayName, photoURL};
  }
});
export {loginWithGoogle, logout};
