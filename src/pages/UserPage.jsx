function UserPage({ usuario }) {
  return (
    <section className="page">
      <h1>Mi Perfil</h1>
      <p>Sesión iniciada como {usuario?.name} ({usuario?.username}).</p>
      <p>Aquí se mostrarán los datos completos del perfil.</p>
    </section>
  );
}

export default UserPage;
