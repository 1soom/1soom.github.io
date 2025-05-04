"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BrandStory.module.css";

const Story1 = () => (
  <div className={styles.storyContent}>
    <h1>당신의 지친 한숨이 생기 넘치는 한 숨이 되도록.</h1>
  </div>
);

const Story2 = () => (
  <div className={styles.storyContent}>
    <h2>처음엔 그냥,</h2>
    <p>
      아무 생각 없이 한숨을 쉬었습니다. 이유도 없이 피곤한 날, 말보다 한숨이
      먼저 나오는 날. 대단한 문제는 아니지만, 괜히 답답하고 기운 빠지는 날들이
      자꾸 쌓이고, 그럴수록 한숨도 늘어났죠.
    </p>
  </div>
);

const Story3 = () => (
  <div className={styles.storyContent}>
    <h2>그 한숨이 너무 익숙해졌다는 걸 깨달았을 때,</h2>
    <p>
      문득 생각했어요. 혹시 이 한숨이, 멈춤이 아니라 다시 숨을 고르기 위한
      새로운 시작일 수도 있지 않을까? 조용히 포기하는 것처럼 들리지만, 사실은
      우리를 다시 움직이게 만드는 작은 동력이 아닐까?
    </p>
  </div>
);

const Story4 = () => (
  <div className={styles.storyContent}>
    <h2>그렇게 1soom은 시작됐습니다.</h2>
    <p>
      거창한 걸 만들고 싶진 않았어요. 그냥, 우리처럼 가끔은 멈추고 싶고 가끔은
      아무것도 하기 싫은 사람들에게 아주 잠깐이라도 숨 돌릴 수 있는 무언가를
      주고 싶었어요.
    </p>
  </div>
);

const Story5 = () => (
  <div className={styles.storyContent}>
    <h2>우리가 만드는 건 이런 것들입니다.</h2>
    <p>
      엉뚱하지만 이상하게 위로가 되는 것, 쓸모없어 보이지만 재밌는 것, 그리고
      우리가 만들고 싶은 것. 누군가는 그냥 넘길지 몰라도 누군가에겐 “지금 나한테
      딱 맞는” 그 무언가. 그래서 별건 아니지만, 의미가 되기도 하는 것들.
    </p>
  </div>
);

const Story6 = () => (
  <div className={styles.storyContent}>
    <h2>1soom은</h2>
    <p>
      당신이 잠깐 멈추고 싶을 때, 당신 옆에 조용히 앉아 말없이 함께 한숨 쉬어줄
      수 있는 팀이고 싶습니다. 우리가 만드는 모든 건, 당신의 그 지친 한숨에
      생기를 더해주는 것들입니다.
    </p>
  </div>
);

const storySlides = [Story1, Story2, Story3, Story4, Story5, Story6];

export default function BrandStory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + storySlides.length) % storySlides.length
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % storySlides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section
      ref={containerRef}
      className={`${styles.brandStory} ${isVisible ? styles.visible : ""}`}
      id="section2"
    >
      <div className={styles.storyContainer}>
        {storySlides.map((Slide, index) => (
          <div
            key={index}
            className={`${styles.storySlide} ${
              index === currentSlide ? styles.visible : ""
            }`}
          >
            <Slide />
          </div>
        ))}
      </div>
      <div
        className={`${styles.navigationArrows} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <div className={styles.arrow} onClick={handlePrevSlide}>
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </div>
        <div className={styles.arrow} onClick={handleNextSlide}>
          <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </div>
      </div>
      <div
        className={`${styles.navigationDots} ${
          isVisible ? styles.visible : ""
        }`}
      >
        {storySlides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
