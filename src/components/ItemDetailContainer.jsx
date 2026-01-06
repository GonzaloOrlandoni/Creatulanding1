import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams(); // Leemos el parámetro de la URL

  useEffect(() => {
    setLoading(true);

    // 1. Referencia a un documento específico
    const docRef = doc(db, "items", itemId);

    // 2. Ejecución con getDoc
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.error("Error al obtener detalle:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <Loader />;

  return product ? <ItemDetail item={product} /> : <p>Producto no encontrado</p>;
};

export default ItemDetailContainer;
