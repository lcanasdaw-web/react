import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import UserPage from "./pages/UserPage.jsx";

function RequireAuth({ usuario, children }) {
  return usuario ? children : <Navigate to="/" replace />;
}

function App() {
  const [usuario, setUsuario] = useState(null);
  const [loginIncorrecto, setLoginIncorrecto] = useState(false);
  const navigate = useNavigate();

  // Credenciales temporales para practicar el flujo de login.
  function validarLogin(username, email) {
    const correcto = username === "usuario" && email === "usuario@email.com";

    if (correcto) {
      setUsuario({ username, name: "Usuario" });
      setLoginIncorrecto(false);
    } else {
      setUsuario(null);
      setLoginIncorrecto(true);
    }
  }

  function cerrarSesion() {
    setUsuario(null);
    setLoginIncorrecto(false);
    navigate("/");
  }

  return (
    <div className="app">
      <Menu usuario={usuario} onLogout={cerrarSesion} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onLogin={validarLogin}
                loginIncorrecto={loginIncorrecto}
              />
            }
          />
          <Route path="/albums" element={<AlbumPage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route
            path="/profile"
            element={
              <RequireAuth usuario={usuario}>
                <UserPage usuario={usuario} />
              </RequireAuth>
            }
          />
          <Route
            path="/todos"
            element={
              <RequireAuth usuario={usuario}>
                <TodoPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
