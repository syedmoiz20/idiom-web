// src/pages/Home.js
import React from "react";
import "./Home.css"; // Optional: if you want to add custom styles

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Idiom app!</h1>
      <p>
        This is the home page where you can find the entrypoint for the whole
        app.
      </p>

      <div className="image-container">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Placeholder"
          className="home-image"
        />
      </div>

      <p>
        Explore more by visiting other pages like{" "}
        <a href="/reader">HP Reader</a>
      </p>

      <button className="explore-button" onClick={() => alert("Explore more!")}>
        Explore More
      </button>
    </div>
  );
};
