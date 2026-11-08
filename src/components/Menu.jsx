import { Link } from "react-router-dom";
import "./menu.css";

function Menu({ usuario, onLogout }) {
  return (
    <header id="menu">
      <Link to="/" className="brand">Contact Image Profile</Link>
      <nav aria-label="Navegación principal">
        <Link to="/albums">Albums</Link>
        <Link to="/posts">Posts</Link>
        {usuario && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/todos">Todos</Link>
          </>
        )}
      </nav>
      <div className="session">
        {usuario ? (
          <>
            <span>Hola, {usuario.name}</span>
            <button type="button" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <span>Guest</span>
        )}
      </div>
    </header>
  );
}

export default Menu;
