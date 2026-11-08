import Login from "../components/Login.jsx";

function LoginPage({ onLogin, loginIncorrecto }) {
  return (
    <section className="page login-page">
      <h1>Iniciar sesión</h1>
      <Login onLogin={onLogin} />
      {loginIncorrecto && (
        <p className="form-error" role="alert">
          Login incorrecto. Comprueba username y email.
        </p>
      )}
    </section>
  );
}

export default LoginPage;
