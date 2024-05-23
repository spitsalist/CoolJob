import React from "react";
import finance from "../../assets/finance.svg";
import transport from "../../assets/transport.svg";
import design from "../../assets/design.svg";
import restaurant from "../../assets/restaurant.svg";
import medicine from "../../assets/medicine.svg";
import multimedia from "../../assets/multimedia.svg";
import support from "../../assets/support.svg";
import managment from "../../assets/managment.svg";
import sales from "../../assets/sales.svg";
import more from "../../assets/more.svg";
import styles from "./Categories.module.css";

const categories = [
  { icon: finance, label: "Финансы" },
  { icon: transport, label: "Грузоперевозки" },
  { icon: design, label: "Дизайн" },
  { icon: restaurant, label: "Ресторанный бизнес" },
  { icon: medicine, label: "Медицина" },
  { icon: multimedia, label: "Мультимедиа" },
  { icon: support, label: "Служба поддержки" },
  { icon: managment, label: "Менеджмент" },
  { icon: sales, label: "Продажи" },
  { icon: more, label: "Больше категорий" },
];

const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      <div class={styles.categoriesWrapper}>
        <h2>
          Работа <br /> по категориям
        </h2>

        <div className={styles.categoriesList}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className="icon">
                <img src={category.icon} alt={category.label} />
              </div>
              <p>{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
