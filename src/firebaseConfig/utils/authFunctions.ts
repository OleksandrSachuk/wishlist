import {FirebaseAuth, googleProvider} from '../';
import {getToken, isToken, removeToken, setToken} from 'shared/utils/token';

const loginWithGoogle = () =>
  FirebaseAuth()
    .signInWithRedirect(googleProvider)
    .catch((err: unknown) => {
      console.error('loginWithGoogle error: ', err);
      return isToken() && removeToken();
    });

const logout = () => FirebaseAuth().signOut();

FirebaseAuth().onAuthStateChanged((user) => {
  if (user) {
    setToken(user.uid);
    console.log('getToken', getToken());
  }
});
export {loginWithGoogle, logout};
