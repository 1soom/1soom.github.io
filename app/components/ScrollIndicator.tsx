"use client";

import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  return (
    <div className={styles.scrollIndicator}>
      <div className={styles.arrow} />
    </div>
  );
}
