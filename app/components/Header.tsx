"use client";

import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#section2" onClick={handleClick}>
              브랜드 스토리
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#section3" onClick={handleClick}>
              프로젝트
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#section4" onClick={handleClick}>
              한 숨 쉬어가기
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
