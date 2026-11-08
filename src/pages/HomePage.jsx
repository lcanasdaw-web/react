import { Link } from "react-router-dom";
import "../css/HomePage.css";

function HomePage() {
  return (
    <section className="page home-page">
      <header className="home-intro">
        <p className="home-kicker">Contact Image Profile</p>
        <h1>Encuentra profesionales de la imagen</h1>
        <p>
          Un portal para descubrir profesionales, explorar sus álbumes y
          consultar publicaciones.
        </p>
      </header>

      <section className="home-section" aria-labelledby="public-title">
        <h2 id="public-title">Explora el contenido público</h2>
        <p className="section-description">
          Estas secciones están disponibles para cualquier visitante.
        </p>

        <div className="home-cards">
          <article className="home-card">
            <h3>Profesionales</h3>
            <p>
              Consulta la información pública de los profesionales, como su
              teléfono, web y empresa.
            </p>
          </article>

          <article className="home-card">
            <h3>Álbumes y fotos</h3>
            <p>
              Descubre los álbumes publicados y abre cada uno para explorar sus
              fotografías.
            </p>
            <Link to="/albums">Ir a Albums</Link>
          </article>

          <article className="home-card">
            <h3>Publicaciones</h3>
            <p>
              Lee los posts publicados. Los comentarios se muestran en el área
              personal del usuario autenticado.
            </p>
            <Link to="/posts">Ir a Posts</Link>
          </article>
        </div>
      </section>

      <section className="home-account" aria-labelledby="account-title">
        <h2 id="account-title">Tu espacio personal</h2>
        <p>
          Inicia sesión desde el menú superior para consultar tu perfil completo
          y tu lista de tareas. Desde tu perfil también podrás acceder a tus
          álbumes, publicaciones y comentarios recibidos.
        </p>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
}

export default HomePage;
