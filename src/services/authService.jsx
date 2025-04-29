import {firebaseAuth} from '../../firebaseConfig'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const user = userCredentials.user;
    console.log(`user login with: ${user.email}`);
    return user;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const register = async (email, password ,userName) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const user = userCredentials.user;
    if (userName) {
      await updateProfile(user, { displayName: userName });
    }
    console.log(`user registered with: ${user.email}`);
    return user;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const logout = async (navigation) => {
  try {
    await signOut(firebaseAuth);
    navigation.replace('login');
  } catch (e) {
    throw e;
  }
};