import React from "react";
import search from "../../assets/search.svg";
import location from "../../assets/location.svg";
import styles from "./Search.module.css";
import splash from "../../assets/splash.svg";

const Search = () => {
  return (
    <div
      className={styles.searchContainer}
      style={{
        backgroundImage: `url(${splash})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "800px",
      }}
    >
      <h2>
        Один клик <br /> и работа в кармане
      </h2>

      <div className={styles.searchForm}>
        <div className={styles.inputGroup}>
          <img src={search} alt="Search Icon" className={styles.icon} />
          <input type="text" placeholder="Должность или компания" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.inputGroup + " " + styles.left}>
          <img src={location} className={styles.iconLocation} alt="location" />
          <input type="text" placeholder="Город, Страна" />
        </div>
        <button className={styles.searchButton}>Поиск</button>
      </div>
    </div>
  );
};

export default Search;
