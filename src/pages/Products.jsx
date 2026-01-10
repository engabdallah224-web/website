import { useParams, Link } from "react-router-dom";

const productsByCategory = {
  "pubg-global": {
    title: "PUBG Mobile GLOBAL",
    description: "Instant delivery UC for PUBG Mobile Global.",
    image: "/pubg-global-pack.png",
    items: [
      { name: "60 UC GLOBAL", price: 1.5 },
      { name: "120 UC GLOBAL", price: 2.7 },
      { name: "180 UC GLOBAL", price: 3.5 },
      { name: "325 UC GLOBAL", price: 5.5 },
      { name: "385 UC GLOBAL", price: 6.25 },
      { name: "660 UC GLOBAL", price: 10.25 },
      { name: "720 UC GLOBAL", price: 10.5 },
      { name: "985 UC GLOBAL", price: 15.6 },
      { name: "1045 UC GLOBAL", price: 16.5 },
      { name: "1320 UC GLOBAL", price: 20.0 },
      { name: "1800 UC GLOBAL", price: 25.0 },
      { name: "3850 UC GLOBAL", price: 47.0 },
      { name: "8100 UC GLOBAL", price: 94.0 },
      { name: "16200 UC GLOBAL", price: 188.0 },
      { name: "24300 UC GLOBAL", price: 282.0 },
      { name: "32400 UC GLOBAL", price: 376.0 },
      { name: "40500 UC GLOBAL", price: 470.0 },
      { name: "48600 UC GLOBAL", price: 564.0 },
      { name: "81000 UC GLOBAL", price: 658.0 },
    ],
  },

  "pubg-korean": {
    title: "PUBG Mobile UC KOREAN",
    description: "Instant delivery UC for PUBG Mobile Korean.",
    image: "/pubg-korean-pack.png",
    items: [
      { name: "60 UC KOREAN", price: 2.0 },
      { name: "190 UC KOREAN", price: 4.0 },
      { name: "380 UC KOREAN", price: 7.5 },
      { name: "660 UC KOREAN", price: 12.5 },
      { name: "1800 UC KOREAN", price: 28.0 },
      { name: "3850 UC KOREAN", price: 50.0 },
      { name: "8100 UC KOREAN", price: 105.0 },
      { name: "16200 UC KOREAN", price: 210.0 },
    ],
  },

  efootball: {
    title: "E-Football Coins",
    description: "Instant delivery coins for E-Football.",
    image: "/efootball-pack.png",
    items: [
      { name: "130 iOS coins", price: 2.0 },
      { name: "300 iOS coins", price: 4.0 },
      { name: "550 iOS coins", price: 6.0 },
      { name: "750 iOS coins", price: 8.0 },
      { name: "1k iOS coins", price: 10.0 },
      { name: "2.1k iOS coins", price: 22.0 },
      { name: "3.2k iOS coins", price: 29.0 },
      { name: "5.7k iOS coins", price: 45.0 },
      { name: "12.8k iOS coins", price: 93.0 },
    ],
  },
};

export default function Products() {
  const { id } = useParams();
  const category = productsByCategory[id];

  if (!category) {
    return (
      <div className="products-page">
        <div className="products-overlay">
          <div className="products-container">
            <h1 className="products-title">Category not found</h1>
            <Link to="/categories" className="back-link">
              ← Back to Categories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-overlay">
        <div className="products-container">
          <div className="products-header">
            <div className="products-title-row">
              <h1 className="products-title">{category.title}</h1>
              <Link to="/categories" className="back-link back-small">
                ← Back
              </Link>
            </div>
            <p className="products-subtitle">Instant Delivery</p>
          </div>

          <div className="products-grid">
            {category.items.map((item, index) => {
              // format price as $XX.XX
              const formattedPrice = `$${item.price.toFixed(2)}`;

              const message = encodeURIComponent(
                `macmiil fadlan xogtaan buuxi 
TOKIYO GAMING STORE - ${category.title}
Contact: 
Player ID: 
Game Name: 
Product: ${item.name}
Amount: ${formattedPrice}
Fadlan ii xaqiiji dalabkan. Mahadsanid ✅`
              );

              const waLink = `https://wa.me/252613631292?text=${message}`;

              return (
                <div key={index} className="product-card">
                  <div className="product-img-box">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="product-img"
                    />
                  </div>

                  <div className="product-bottom">
                    <div className="product-name">{item.name}</div>
                    <div className="product-price">{formattedPrice}</div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="product-btn"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <Link to="/categories" className="back-link back-bottom">
            ← Back to Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
