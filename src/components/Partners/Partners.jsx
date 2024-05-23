import React from "react";
import disney from "../../assets/disney.svg";
import facebook from "../../assets/facebook.svg";
import microsoft from "../../assets/microsoft.svg";
import sony from "../../assets/sony.svg";
import cocacola from "../../assets/cocacola.svg";
import styles from "./Partners.module.css";

const Partners = () => {
  return (
    <div className={styles.partnersContainer}>
      <p>Помогаем найти работу:</p>
      <div className={styles.partnersLogos}>
        <img src={disney} alt="Disney" />
        <img src={facebook} alt="Facebook" />
        <img src={microsoft} alt="Microsoft" />
        <img src={sony} alt="Sony" />
        <img src={cocacola} alt="CocaCola" />
      </div>
    </div>
  );
};

export default Partners;
