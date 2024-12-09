import { database } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";

export default async function Page() {
  console.log("Página cargada");

  const collectionRef = collection(database, "carreras");
  const carrerasCollectionSnapshot = await getDocs(collectionRef);

  const data = carrerasCollectionSnapshot.docs.map((d) => ({
    ...d.data(),
    id: d.id
  }))

  console.log(data)

  return (
    <div className="text-7xl font-extrabold bg-stone-400">Dashboard Home</div>
  );
}
