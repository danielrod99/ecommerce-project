import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import sdk from './firebase-sdk';

const config = sdk;

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    } else {
        const userRef = firestore.doc('users/' + userAuth.uid);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            const { displayName, email, photoURL } = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    photoURL,
                    ...additionalData
                });
            } catch (error) {
                console.log('Error creating user', error);
            }

        }
        return userAuth;
    }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;


