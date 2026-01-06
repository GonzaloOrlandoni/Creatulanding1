const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        flexDirection: "column",
      }}
    >
      <h2>Cargando...</h2>
      {/* Puedes agregar un spinner CSS aquí luego */}
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
