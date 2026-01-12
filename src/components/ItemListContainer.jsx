import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; // Importamos funciones de Firestore
import { db } from "../firebase/config"; // Tu configuración de Firebase
import ItemList from "./ItemList";
import Loader from "./Loader"; // Componente para UX de carga

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams(); // Obtenemos el parámetro de la URL

  useEffect(() => {
    setLoading(true);

    // 1. Referencia a la colección 'items' que tenés en tu Firestore
    const productsCollection = collection(db, "items");

    // 2. Filtramos por categoría si idCategoria existe, si no traemos todo
    const q = idCategoria
      ? query(productsCollection, where("category", "==", idCategoria))
      : productsCollection;

    getDocs(q)
      .then((snapshot) => {
        // Transformamos los docs de Firebase en objetos legibles para React
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((error) => console.error("Error al cargar productos:", error))
      .finally(() => setLoading(false));
  }, [idCategoria]);

  // Renderizado condicional para el Loader (Requisito de UX)
  if (loading) return <Loader />;

  return (
    /* Agregamos el div container y mt-5 para centrar y dar espacio arriba */
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2>{greeting} {idCategoria ? `- ${idCategoria}` : ""}</h2>
        </div>

        {/* Pasamos los productos al componente de presentación ItemList  */}
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
