import { auth } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const register = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName: name });
};

export const logout = async () => {
  await signOut(auth);
};

// Firebase auth state listener
export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};