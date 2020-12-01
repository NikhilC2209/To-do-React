import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCevOTmjyk_2-Rje7yGRDVdXDSQON2Ry4I",
    authDomain: "to-do-react-2e2a0.firebaseapp.com",
    databaseURL: "https://to-do-react-2e2a0.firebaseio.com",
    projectId: "to-do-react-2e2a0",
    storageBucket: "to-do-react-2e2a0.appspot.com",
    messagingSenderId: "847446448893",
    appId: "1:847446448893:web:73fb74da097bf7b944bc94",
    measurementId: "G-3VBWWL487V"
});

const db = firebaseApp.firestore();

export default db;