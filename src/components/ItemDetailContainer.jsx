import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Función getDoc para un ítem
import { db } from "../firebase/config"; // Tu archivo de conexión
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    setLoading(true);

    // Creamos la referencia al documento específico
    const docRef = doc(db, "items", idProducto);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.error("Error al obtener producto:", error))
      .finally(() => setLoading(false));
  }, [idProducto]);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      {product ? <ItemDetail {...product} /> : <h2>Producto no encontrado</h2>}
    </div>
  );
};

export default ItemDetailContainer;
