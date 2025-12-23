import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/about.png")} alt="Me sitting with a laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Engineer</h3>
                        <p>I am frontend engineer with experience in building responsive website and also a expert in HTML,CSS,Javascript and React.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Engineer</h3>
                        <p>I have knowledge about backend engineer and currently practicing to improve my skills about it.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have created design system as well.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
