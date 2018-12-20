import * as firebase from 'firebase';

export const db = firebase.firestore().settings({timestampsInSnapshots: true});
