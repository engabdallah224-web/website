import { Link } from "react-router-dom";
import { FaWhatsapp, FaGamepad } from "react-icons/fa";
import TokiyoChat from "../components/TokiyoChat";

export default function Home() {
  const waText = encodeURIComponent(
    `Salaan TOKIYO GAMING STORE 👋

Waxaan rabaa inaan helo macluumaad ku saabsan:
- PUBG UC / E-Football Coins
- Qiimaha & payment (EVC/Zaad/Jeeb/Sahal)

Fadlan i caawi.`
  );

  const waLink = `https://wa.me/252613631292?text=${waText}`;

  return (
    <div className="page">
      <div className="overlay">
        <div className="profile-container">
          {/* Avatar / Logo */}
          <img
            src="/logo.png" // public/logo.png
            alt="TOKIYO GAMING STORE"
            className="avatar"
          />

          {/* Name pill */}
          <div className="name-pill">TOKIYO GAMING STORE</div>

          {/* Welcome pill */}
          <div className="welcome-pill">
            WELCOME TO TOKIYO GAMING STORE
          </div>

          {/* Hero big image with stroke */}
          <div className="hero-card">
            <img
              src="/hero.png" // public/hero.png
              alt="Tokiyo Gaming Hero"
              className="hero-img"
            />
          </div>

          {/* Buttons list */}
          <div className="link-buttons">
            {/* WhatsApp Support */}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="link-btn whatsapp-btn"
            >
              <div className="link-left">
                <FaWhatsapp className="link-icon" />
                <div className="link-text">
                  <span className="link-title">WhatsApp Support</span>
                  <span className="link-sub">
                    +252 61 363 1292 • Wixii ciwaanad & caawin ah nagala soo xiriir
                  </span>
                </div>
              </div>
            </a>

            {/* HADA IIBSO → /categories */}
            <Link to="/categories" className="link-btn buy-btn">
              <div className="link-left">
                <FaGamepad className="link-icon" />
                <div className="link-text">
                  <span className="link-title">HADA IIBSO (BUY NOW)</span>
                  <span className="link-sub">
                    PUBG UC • PUBG KR • E-Football Coins – Tap to open categories
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* TOKIYO AI Chat – floating button + chatbox */}
      <TokiyoChat />
    </div>
  );
}
