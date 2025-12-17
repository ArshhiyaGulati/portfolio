import React from "react";

import styles from "./Hero.module.css"; // Import the CSS module
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arshhiya.</h1>
        <p className={styles.description}>
        I am a Full Stack Developer skilled in building efficient, scalable, and user-focused applications.
Passionate about creating impactful digital experiences.
Reach out if you'd like to connect or learn more!
        </p>
        <a href="mailto:arshhiyagulati@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/arshhiyapic.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
