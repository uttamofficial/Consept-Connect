'use client'
import Image from 'next/image'
import styles from './startup.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function StartUpDemo() {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slider.current) {
      const textWidth = slider.current.firstChild ? (slider.current.firstChild as HTMLElement).offsetWidth : 0; // Width of a single text block
      const viewportWidth = window.innerWidth; // Width of the screen
      const textCount = Math.ceil(viewportWidth / textWidth) + 2; // Add extra texts for seamless loop

      // Clone text dynamically to fill the screen and ensure looping
      for (let i = 0; i < textCount; i++) {
        if (slider.current.firstChild) {
          const clonedNode = slider.current.firstChild.cloneNode(true);
          slider.current.appendChild(clonedNode);
        }
      }

      // GSAP animation
      gsap.to(slider.current, {
        x: `-=${textWidth}`, // Move by the width of one text block
        duration: 5, // Adjust speed (lower is faster)
        repeat: -1, // Infinite loop
        ease: "linear", // Smooth continuous animation
      });
    }
  }, []);

  return (
    <main className={styles.main}>
      <Image 
        src={'/startup4.jpg'}
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p className="font-heading2 bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent">
            Build . Ship . Scale -
          </p>
        </div>
      </div>
    </main>
  );
}
