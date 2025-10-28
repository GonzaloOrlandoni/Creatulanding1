// src/components/ItemListContainer.jsx

// Recibimos la prop "greeting"
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col text-center">
          <div className="alert alert-light" role="alert">
            {/* Mostramos la prop */}
            <h2>{greeting}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
