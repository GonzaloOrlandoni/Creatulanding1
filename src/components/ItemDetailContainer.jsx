import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams(); //itemId viene de la URL de App.jsx

  useEffect(() => {
    setLoading(true);

    // Referencia al documento específico
    const docRef = doc(db, "items", itemId);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Seteamos el producto con su ID y sus datos de Firebase
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.error("Error al obtener detalle:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <Loader />;

  return <div className="container mt-5">{product ? <ItemDetail {...product} /> : <h2>El producto no existe</h2>}</div>;
};

export default ItemDetailContainer;
