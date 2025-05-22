import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";


export const getProducts = async (nivel) => {
  try {
    const db = getFirestore();
    const productsCollection = collection(db, "productos");

    let q;

    if (nivel) {
      q = query(productsCollection, where("nivel", "==", nivel));
    } else {
      q = productsCollection;
    }

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
    try {
      const db = getFirestore();
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
  
      if (!docSnap.exists()) {
        throw new Error("Producto no encontrado");
      }
  
      return { id: docSnap.id, ...docSnap.data() };
    } catch (error) {
      console.error("Error al obtener el producto por ID:", error);
      throw error;
    }
  };

export default getProducts;
