import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBph1vR8OkhC0fFcO7p9os3-G_UkrtHxJQ',
  authDomain: 'vue-firebase-7b68f.firebaseapp.com',
  projectId: 'vue-firebase-7b68f',
  storageBucket: 'vue-firebase-7b68f.appspot.com',
  messagingSenderId: '150891485760',
  appId: '1:150891485760:web:857595d8d65e774e839da5',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectDojo = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectDojo, timestamp };
