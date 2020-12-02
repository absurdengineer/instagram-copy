import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCmWQ0FWNJGhqhkt1yTEQLH5-oAR01NwSo",
    authDomain: "instagram-copy-91370.firebaseapp.com",
    databaseURL: "https://instagram-copy-91370.firebaseio.com",
    projectId: "instagram-copy-91370",
    storageBucket: "instagram-copy-91370.appspot.com",
    messagingSenderId: "719643098985",
    appId: "1:719643098985:web:3e3f9b6125806d91a987f8",
    measurementId: "G-Q0PMHVF3MG"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase 