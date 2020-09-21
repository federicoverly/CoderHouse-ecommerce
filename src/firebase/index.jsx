import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBC4Q5sKXaZBMo2jH9gMJabHxHryghSaHE",
    authDomain: "janine-ecommerce.firebaseapp.com",
    databaseURL: "https://janine-ecommerce.firebaseio.com",
    projectId: "janine-ecommerce",
    storageBucket: "janine-ecommerce.appspot.com",
    messagingSenderId: "924743450631",
    appId: "1:924743450631:web:3296e5ee6d9841e50daaa2"
  });

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

export function getAuth() {
    return firebase.auth(app);
}

