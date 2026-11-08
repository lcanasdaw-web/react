import albumImages from "../data/albumImages.js";
import "../css/AlbumPage.css";

const imageCards = albumImages.map((image) => (
  <article className="album-image" key={image.id}>
    <img src={image.url} alt={image.title} />
    <h2>{image.title}</h2>
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
