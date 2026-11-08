import albumImages from "../data/albumImages.js";
import "../css/AlbumPage.css";

const imageCards = albumImages.map((image, index) => (
  <article className={`album-image style${(index % 6) + 1}`} key={image.id}>
    <span className="image">
      <img src={image.url} alt={image.title} />
    </span>
    <div className="album-caption">
      <h2>Álbum {image.albumId}</h2>
      <p>{image.title}</p>
    </div>
  </article>
));

function AlbumPage() {
  return (
    <section className="page">
      <h1>Albums</h1>
      <div className="album-grid">{imageCards}</div>
    </section>
  );
}

export default AlbumPage;
