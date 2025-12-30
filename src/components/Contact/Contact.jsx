import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h1>Contact</h1>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:mdrahatrion2@gmail.com">mdrahatrion2@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://linkedin.com/rahat605">LinkedIn.com/rahat605</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/rahat605">Github.com/rahat605</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact