import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";


export const createOrder = async (orderData) => {
  try {
    const db = getFirestore();
    const ordersCollection = collection(db, "ordenes");

    const docRef = await addDoc(ordersCollection, orderData);

    return docRef.id;
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
};




