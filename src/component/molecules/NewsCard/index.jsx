import "./style.css";

export default function NewsCard({ url, title, image, desc }) {
  const newsPage = (url) => {
    const newtab = window.open(url);
    return newtab;
  };
  return (
    <div className="col">
      <div className="card m-2">
        <img src={image} className="image" alt="image" />
        <div className="card-body">
          <h5 className="title">{title}</h5>
          <p className="text">{desc}</p>
          <button onClick={() => newsPage(url)} className="btn btn-primary">
            Read News
          </button>
        </div>
      </div>
    </div>
  );
}
