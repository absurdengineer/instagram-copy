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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    console.log(userRef)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName,email} = userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log(`Error Creating User : ${error.message}`)
        }
    }
    return userRef
}

const provider1 = new firebase.auth.GoogleAuthProvider();
provider1.setCustomParameters({ prompt : 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider1);

const provider2 = new firebase.auth.FacebookAuthProvider();
provider2.setCustomParameters({ prompt : 'select_account' })
export const signInWithFacebook = () => auth.signInWithPopup(provider2);

export default firebase 