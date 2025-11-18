// src/components/ItemList.jsx

import Item from "./Item"; // 1. ASEGURATE DE IMPORTAR ITEM

const ItemList = ({ products }) => {
  return (
    <div className="row g-4">
      {/* Recorremos el array de productos y por cada uno:
        1. Creamos un div contenedor con la 'key'
        2. Renderizamos el componente <Item />
        3. Le pasamos todas las props del producto (id, name, img, etc.)
      */}
      {products.map((prod) => (
        <div key={prod.id} className="col-md-4">
          {/* 2. ASEGURATE DE USAR <Item {...prod} /> AQUÍ */}
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
