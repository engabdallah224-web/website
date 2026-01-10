import { Link } from "react-router-dom";

const categories = [
  {
    id: "pubg-global",
    title: "PUBG Mobile GLOBAL",
    img: "/pubg-global.jpg", // public/pubg-global.jpg
    stars: 5,
  },
  {
    id: "pubg-korean",
    title: "PUBG Mobile UC KOREAN",
    img: "/pubg-korean.jpg",
    stars: 5,
  },
  {
    id: "efootball",
    title: "E-Football Coins",
    img: "/efootball.jpg",
    stars: 5,
  },
];

export default function Categories() {
  return (
    <div className="categories-page">
      <div className="categories-overlay">
        <div className="categories-container">
          <h1 className="cat-title">Categories</h1>
          <p className="cat-subtitle">Choose a category to view products</p>

          {/* 3 cards in one row */}
          <div className="cat-row">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className="cat-card"
              >
                <div className="cat-img-box">
                  <img src={cat.img} alt={cat.title} className="cat-img" />
                </div>

                <div className="cat-bottom">
                  <div className="cat-name">{cat.title}</div>

                  <div className="cat-bottom-row">
                    <div className="cat-stars">
                      {Array.from({ length: cat.stars }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="cat-open">Open</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/" className="back-link">
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}
