import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Rahat</h1>
        <p className={styles.description}>
          I am a frontend developer with expertise in HTML, CSS, JavaScript and
          React. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:marufuzzaman.rahat@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="hero-image" className={styles.heroImg} />
      <div className={styles.topBlue} />
      <div className={styles.bottomBlue} />
    </section>
  );
};

export default Hero;
