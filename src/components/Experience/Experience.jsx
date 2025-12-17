import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // Certifications data
  const certifications = [
    {
      title: "Full Stack Web Development",
      platform: "Udemy"
    },
    {
      title: "Google UI/UX Design",
      platform: "Coursera"
    },
    {
      title: "Web and Mobile Development",
      platform: "Xpediolive"
    }
  ];
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {["React", "Express", "Node.js", "SQL", "HTML", "CSS", "JavaScript", "Figma", "MongoDB"].map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <span className={styles.skillText}>{skill}</span>
              </div>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          <h3 className={styles.certificationsTitle}>Certifications</h3>
          {certifications.map((cert, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{cert.title}</h3>
                <p>{cert.platform}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
