import { auth } from "../firebase";
import firebase from "firebase/compat/app";

export function useAuth() {
  return {
    createAccount: (data) => {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(function (result) {
          return result.user.updateProfile({
            displayName: data.name,
          });
        });
    },
    login: (data) => {
      return auth.signInWithEmailAndPassword(data.email, data.password);
    },
    logout: () => {
      return auth.signOut();
    },
    resetPassword: (data) => {
      return firebase.auth().sendPasswordResetEmail(data);
    },
    ...auth,
  };
}
