import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/reader">HP Reader</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
