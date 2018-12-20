import * as firebase from 'firebase';

import FirebaseApp from 'firebaseConfig';
import 'firebase/auth';

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

export const FirebaseAuth = FirebaseApp.auth;
