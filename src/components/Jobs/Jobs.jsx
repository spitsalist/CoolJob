import React from "react";
import sonyLogo from "../../assets/sonyLogo.svg";
import facebookLogo from "../../assets/facebookLogo.svg";
import cocaLogo from "../../assets/cocaLogo.svg";
import locationLogo from "../../assets/locationLogo.svg";
import styles from "./Jobs.module.css";

const jobs = [
  {
    category: "Финансы",
    title: "Менеджер по управлению финансами в крупной компании",
    location: "Осака, Япония",
    time: "3 дня назад",
    color: "#5182FF",
    logo: sonyLogo,
  },
  {
    category: "Продажи",
    title: "Специалист по продажам",
    location: "Коясан, Япония",
    time: "7 дней назад",
    color: "#FF51EE",
    logo: facebookLogo,
  },
  {
    category: "Служба поддержки",
    title: "Оператор колл центра",
    location: "Токио, Япония",
    color: "#58D94D",
    logo: cocaLogo,
  },
  {
    category: "Мультимедиа",
    title: "Системный администратор",
    location: "Осака, Япония",
    time: "3 дня назад",
    color: "#FF9051",
    logo: sonyLogo,
  },
  {
    category: "Дизайн",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    location: "Нагоя, Япония",
    time: "7 дней назад",
    color: "#F84242",
    logo: facebookLogo,
  },
  {
    category: "Грузоперевозки",
    title: "Водитель на дальние дистанции",
    location: "Киото, Япония",
    color: "#383838",
    logo: cocaLogo,
  },
];

const Jobs = () => {
  return (
    <div className={styles.jobsContainer}>
      <div class={styles.jobsWrapper}>
        <h2>Новые вакансии</h2>
        <p style={{ marginLeft: "20px" }}>
          Найдите работу своей мечты прямо сейчас
        </p>
        <div className={styles.jobsList}>
          {jobs.map((job, index) => (
            <div key={index} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <span
                  className={styles.jobDot}
                  style={{ backgroundColor: job.color }}
                ></span>
                {job.category}
              </div>
              <h3>{job.title}</h3>
              <div className={styles.jobLocation}>
                <img src={locationLogo} alt="Location logo" /> {job.location}
              </div>
              <div className={styles.jobFooter}>
                <img
                  src={job.logo}
                  alt={`${job.category} logo`}
                  className="company-logo"
                />
                <p className={styles.jobTime}>{job.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.allJobsButton}>Все вакансии</button>
      </div>
    </div>
  );
};

export default Jobs;
