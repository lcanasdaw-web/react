import { useState } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [loginIncorrecto, setLoginIncorrecto] = useState(false);
  const usuarioValido = "usuario";
  const emailValido = "usuario@email.com";

  function validarLogin(username, email) {
    const correcto = username === usuarioValido && email === emailValido;
    setAutenticado(correcto);
    setLoginIncorrecto(!correcto);
  }

  return (
    <div>
      {autenticado && <Menu />}
      <h1>Welcome to Contact Image Profile</h1>
      <Login onLogin={validarLogin} />
      {loginIncorrecto && <h2>Login incorrecto</h2>}
    </div>
  );
}

export default App;
