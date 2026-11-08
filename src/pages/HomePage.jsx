import Login from "../components/Login.jsx";

function HomePage({ onLogin, loginIncorrecto }) {
  return (
    <section className="page home-page">
      <h1>Welcome to Contact Image Profile</h1>
      <p>Contacta con profesionales de la imagen y la fotografía.</p>
      <Login onLogin={onLogin} />
      {loginIncorrecto && (
        <p className="form-error" role="alert">Login incorrecto. Comprueba username y email.</p>
      )}
    </section>
  );
}

export default HomePage;
