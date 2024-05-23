import React from "react";
import { FaLinkedin, FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import styles from "./Futter.module.css";

const cities = [
  "Осака",
  "Коясан",
  "Токио",
  "Хаконэ",
  "Наэба",
  "Томаму",
  "Йокогама",
  "Нагоя",
  "Саппоро",
  "Кобе",
];

const Futter = () => {
  return (
    <div className={styles.futterContainer}>
      <h2>Популярные города</h2>
      <div className={styles.futterList}>
        {cities.map((city, index) => (
          <span key={index} className={styles.city}>
            {city}
          </span>
        ))}
      </div>
      <hr
        style={{
          width: "93.5%",
          backgroundColor: "#465461",
          height: "2px",
          border: "none",
        }}
      />

      <div className={styles.footer}>
        <span
          onClick={() => (window.location.href = "/")}
          className={styles.logo}
        >
          Cooljob
        </span>
        <div className={styles.socialIcons}>
          <FaLinkedin />
          <FaGoogle />
          <FaTwitter />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Futter;
