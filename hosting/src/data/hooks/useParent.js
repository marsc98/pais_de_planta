import firebase from "firebase/compat/app";
export function useParent() {
  const collection = firebase.firestore().collection("parent");
  return {
    getParent: async () => {
      if (!firebase.auth().currentUser) return null;
      const result = await collection
        .doc(firebase.auth().currentUser.email)
        .get();
      return result?.data() || null;
    },
    createParent: async (data) => {
      await collection.doc(data.email).set({
        ...data,
      });
    },
    addToFamily: async (data) => {
      const family = await firebase
        .firestore()
        .collection("family")
        .doc(data.familyCode)
        .get();
      family?.data() &&
        (await collection
          .doc(data.userId)
          .set({ familyCode: data.familyCode }, { merge: true }));
      return family?.data();
    },
  };
}
