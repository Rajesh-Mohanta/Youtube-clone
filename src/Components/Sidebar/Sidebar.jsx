import React from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

function Sidebar({ sidebar, category, setCategory }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sort-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={assets.home} alt="Home" />
          <p>Home</p>
        </div>

        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={assets.game_icon} alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={assets.automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={assets.sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={assets.entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={assets.tech} alt="Technology" />
          <p>Technology</p>
        </div>

        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={assets.music} alt="Music" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={assets.blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={assets.news} alt="News" />
          <p>News</p>
        </div>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={assets.jack} alt="Pewdipew" />
          <p>Pewdipew</p>
        </div>
        <div className="side-link">
          <img src={assets.simon} alt="Mr. Beast" />
          <p>Mr. Beast</p>
        </div>
        <div className="side-link">
          <img src={assets.tom} alt="Justin Bieber" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={assets.megan} alt="5 minutes craft" />
          <p>5 minutes craft</p>
        </div>
        <div className="side-link">
          <img src={assets.cameron} alt="NasDaily" />
          <p>NasDaily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
