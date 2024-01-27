import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    });
};

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
};

export const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
};

export const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
};

export const logOut = () => {
    return signOut(auth);
};