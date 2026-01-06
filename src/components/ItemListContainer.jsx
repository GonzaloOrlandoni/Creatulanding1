import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "items"); // Asegúrate de que en Firebase se llame 'items'

    const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(docs);
      })
      .catch((error) => console.error("Error Firestore:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <Loader />;

  return <ItemList products={products} />;
};

export default ItemListContainer;
