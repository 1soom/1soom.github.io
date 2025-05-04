"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import BrandStory from "./components/BrandStory";
import ScrollIndicator from "./components/ScrollIndicator";
import ProjectGallery from "./components/ProjectGallery";

export default function Home() {
  const sections = useRef<(HTMLDivElement | undefined)[]>([]);
  const [showHeader, setShowHeader] = useState(false);
  const [breathCount, setBreathCount] = useState("0.0");
  const [sighCount, setSighCount] = useState("0.0");
  const startTime = useRef(Date.now());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            const index = sections.current.indexOf(
              entry.target as HTMLDivElement
            );
            setShowHeader(index >= 1);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedSeconds = (Date.now() - startTime.current) / 1000;

      const breaths = elapsedSeconds / 5; // 5초마다 한 번
      const sighs = elapsedSeconds / 300; // 5분(300초)마다 한 번
      setBreathCount(breaths.toFixed(1));
      setSighCount(sighs.toFixed(1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      {showHeader && <Header />}
      <main className={styles.main}>
        <section
          ref={(el) => (sections.current[0] = el)}
          className={styles.section}
          id="section1"
        >
          <div className={styles.sectionContent}>
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="1soom logo"
              width={115}
              height={107}
              priority
            />
            <ScrollIndicator />
          </div>
        </section>

        <section
          ref={(el) => (sections.current[1] = el)}
          className={styles.section}
          id="story"
        >
          <BrandStory />
        </section>

        <section
          ref={(el) => (sections.current[2] = el)}
          className={styles.section}
          id="project"
        >
          <ProjectGallery />
        </section>

        <section
          ref={(el) => (sections.current[3] = el)}
          className={styles.section}
          id="contact"
        >
          <div className={styles.sectionContent}>
            <div className={styles.breathStats}>
              <p className={styles.breathText}>
                지금까지 <span className={styles.highlight}>{breathCount}</span>{" "}
                번의 숨과 <span className={styles.highlight}>{sighCount}</span>{" "}
                번의 한숨을 쉬었습니다.
              </p>
              <p className={styles.contactText}>
                아이디어든, 피드백이든, 함께하고 싶다는 마음이든, 한숨 한 번
                쉬고 아래 연락처로 조용히 건네주세요. 우리는 아직 작고
                부족하지만, 그래서 더 엉뚱한 걸 시도할 수 있는 팀이에요. “이런
                거 만들어보면 어때요?” “이런 앱, 아무도 안 만들길래요.” “함께
                하고 싶어요.” 그 어떤 이야기든 괜찮습니다. 우리에게 닿는 한숨은
                모두 소중하니까요.
              </p>
            </div>
            <div className={styles.contactSection}>
              <div className={styles.contactLinks}>
                <a
                  href="mailto:team@1soom.xyz"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/1soom.xyz"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/1soom"
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
