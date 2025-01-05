'use client'

import { motion, useAnimation, useScroll } from "framer-motion";
import { useRef } from "react";
import FuzzyOverlay from "./fuzzy";

const Example = () => {
  return (
    <div className="bg-transparent overflow-hidden">
      <HorizontalScrollCarousel />
    </div>
  );
};

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each card's animation
      },
    },
  };

  const cardVariants = {
    hidden: {
      x: 50, // Initial position in view
      opacity: 1,
    },
    exit: {
      x: -100, // Slide out to the left
      opacity: 0,
      transition: {
        duration: 0.5, // Animation duration
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={targetRef} className="relative h-auto bg-transparent w-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4 items-left w-full"
      >
        {cards.map((card, index) => (
          <ScrollAnimationCard
            card={card}
            key={card.id}
            scrollYProgress={scrollYProgress}
            index={index}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </section>
  );
};

interface CardProps {
  card: {
    url: string;
    title: string;
    id: number;
  };
  scrollYProgress: any;
  index: number;
  variants?: any;
}

const ScrollAnimationCard = ({ card, scrollYProgress, index, variants }: CardProps) => {
  const controls = useAnimation();

  scrollYProgress.onChange((value: number) => {
    if (value > (index + 1) * 0.2) {
      // Trigger exit animation when the user scrolls down past a certain point
      controls.start("exit");
    } else {
      // Reset animation if scrolled back up
      controls.start("hidden");
    }
  });

  return (
    <motion.div
      key={card.id}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="group relative w-[360px] justify-center items-center sm:w-[400px] h-[280px] sm:h-[350px] overflow-hidden rounded-3xl bg-transparent border border-white flex-shrink-0"
    >
      <FuzzyOverlay />
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br font-heading2 from-white/20 to-white/0 p-4 sm:p-8 text-4xl sm:text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
];
