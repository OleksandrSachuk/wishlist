import {getToken, isToken, removeToken, setToken} from 'shared/utils/token';
import {FirebaseAuth, googleProvider} from '..';

console.log('googleProvider', googleProvider);
const loginWithGoogle = () =>
  FirebaseAuth.signInWithPopup(googleProvider).catch((err: any) => {
    console.error('loginWithGoogle error: ', err);
    return isToken() && removeToken();
  });

const logout = () => FirebaseAuth.signOut();

// FirebaseAuth().onAuthStateChanged((user) => {
//   if (user) {
//     setToken(user.uid);
//     console.log('getToken', getToken());
//   }
// });
export {loginWithGoogle, logout};
