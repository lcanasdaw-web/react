import { Link } from "react-router-dom";
import "../css/menu.css";

function Menu({ usuario, onLogout }) {
  return (
    <header id="menu">
      <Link to="/" className="brand">Contact Image Profile</Link>
      <nav aria-label="Navegación principal">
        <Link to="/albums">Albums</Link>
        <Link to="/posts">Posts</Link>
        {usuario && (
          <>
            <Link to="/profile">Perfil</Link>
            <Link to="/todos">Todos</Link>
          </>
        )}
      </nav>
      <div className="session">
        {usuario ? (
          <>
            <span>Hola, {usuario.name}</span>
            <button type="button" onClick={onLogout}>Salir</button>
          </>
        ) : (
          <>
            <span>Invitado</span>
            <Link to="/login" className="session-action">Login</Link>
            <button type="button" className="session-action" disabled>
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Menu;
