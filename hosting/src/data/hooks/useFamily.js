import firebase from "firebase/compat/app";
import { v4 as uuidv4 } from "uuid";

export function useFamily() {
  const collection = firebase.firestore().collection("family");
  return {
    getFamily: async () => {
      if (!firebase.auth().currentUser) return null;
      const result = await collection
        .doc(firebase.auth().currentUser.email)
        .get();
      return result?.data() || null;
    },
    createFamily: async (data) => {
      const uuid = data?.name + uuidv4();

      await collection.doc(uuid && uuid).set({
        plants: [{ name: data.name }],
      });

      await firebase
        .firestore()
        .collection("parent")
        .doc(data.userId)
        .set({ familyCode: uuid && uuid }, { merge: true });

      const res = await collection.doc(uuid && uuid).get();
      return res.data();
    },
  };
}
