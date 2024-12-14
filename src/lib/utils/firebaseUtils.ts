import { database } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";

export async function fetchCollection(collectionName: string) {
  try {
    const collectionRef = collection(database, collectionName); // Aquí espera un string
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error al obtener la colección:", error);
    throw new Error("No se pudo cargar la colección.");
  }
}