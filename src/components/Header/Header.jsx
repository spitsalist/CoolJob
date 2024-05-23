import React from "react";
import CoolJob from "../../assets/Cooljob.svg";
import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <img
        src={CoolJob}
        alt="CoolJob"
        onClick={() => (window.location.href = "/")}
      />
      <nav>
        <ul className="left-nav">
          <li>Поиск работы</li>
          <li>Поиск стартапов</li>
        </ul>
        <ul className="right-nav">
          <li>Регистрация</li>
          <li style={{ width: "65px", padding: "10px" }}>Вход</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
