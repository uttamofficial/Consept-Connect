"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const headerAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Exploring the Cosmos",
      description: "Dive deep into the mysteries of the universe and beyond.",
      image: "https://framerusercontent.com/images/TFy3gCA0pQ8Z5SJM6pEVWMYjZQc.png",
    },
    {
      id: 2,
      title: "Innovations in AI",
      description: "Discover how AI is shaping the future of technology.",
      image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/08/some-3d-social-media-icons.jpg",
    },
    {
      id: 3,
      title: "The Art of Coding",
      description: "Explore the creative side of software development.",
      image: "https://p.turbosquid.com/ts-thumb/q4/NJh2dK/JNhuynQR/qr2/jpg/1354662699/1920x1080/fit_q87/0d9ea76cbb7f1e76daf349e5300832f35aa8ba33/qr2.jpg",
    },
    {
      id: 4,
      title: "Future of Mobility",
      description: "A glimpse into the next generation of transportation.",
      image: "https://img.pikbest.com/wp/202408/program-code-3d-rendering-of-abstract-purple-coding-background-with-mock-up-and-big-data-illuminating-the-concept-programming_9762612.jpg!w700wp",
    },
    {
      id: 5,
      title: "Mastering Productivity",
      description: "Unlock tips and tricks to enhance your daily efficiency and focus.",
      image: "https://img.freepik.com/free-photo/office-desk-with-laptop-supplies-coffee_1232-1162.jpg",
    },
    {
      id: 6,
      title: "Unlocking the Power of LLMs",
      description: "Learn how Large Language Models (LLMs) are revolutionizing the world of AI and transforming industries.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240130175914/Top-10-Open-Source-LLM-Models-(1).webp",
    },
  ];

  useEffect(() => {
    // Check screen width only on the client side
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initialize on component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ECEFF1",
        padding: "1rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {!isMobile && <NavBar />}

      {/* Header */}
      <motion.div
        style={{ marginBottom: "2rem", textAlign: "center" }}
        initial="hidden"
        animate="visible"
        variants={headerAnimation}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "700",
            background: "linear-gradient(to right, #FBD288, #FF9C73)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover Our Blog
        </h1>
        <p
          style={{
            marginTop: "0.25rem",
            fontSize: isMobile ? "1rem" : "1.25rem",
            color: "#B0BEC5",
          }}
        >
          Fresh insights, stories, and trends — just for you.
        </p>
      </motion.div>

      {/* Blog List */}
      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(auto-fit, minmax(250px, 1fr))" : "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "80rem",
          margin: "0 auto",
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={cardAnimation}
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(255, 255, 255, 0.1)",
              background: "#1A1A1A",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s ease",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: isMobile ? "150px" : "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: isMobile ? "1rem" : "1.5rem" }}>
              <h3
                style={{
                  fontSize: isMobile ? "1.25rem" : "1.5rem",
                  fontWeight: "600",
                  color: "#FBD288",
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  color: "#CFD8DC",
                }}
              >
                {post.description}
              </p>
              <button
            style={{
              position: "relative",
              marginTop: "1.5rem",
              padding: isMobile ? "0.5rem 1rem" : "0", // Matches conditional padding
              height: isMobile ? "auto" : "3rem",
              width: isMobile ? "auto" : "8rem", // Matches consistent width
              fontSize: isMobile ? "0.8rem" : "1rem",
              fontWeight: "600",
              color: "#F8F9FA", // Matches text-gray-50
              background: "#333333", // Matches bg-neutral-800
              border: "2px solid transparent",
              borderRadius: "1.5rem", // Matches rounded-2xl
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.5s ease",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLElement;
              target.style.borderColor = "#F87171"; // Matches hover:border-rose-300
              target.style.color = "#F87171"; // Matches hover:text-rose-300
              target.style.textDecoration = "underline";
              target.style.textDecorationThickness = "2px"; // Matches hover:decoration-2
              target.style.textUnderlineOffset = "4px"; // Matches hover:underline-offset-4
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLElement;
              target.style.borderColor = "transparent";
              target.style.color = "#F8F9FA";
              target.style.textDecoration = "none";
            }}
            onClick={() => setSelectedPost(post)}
          >
            <span
              style={{
                position: "absolute",
                width: "3rem",
                height: "3rem",
                top: "0.25rem", // Matches top-1
                right: "0.25rem", // Matches right-1
                background: "#8B5CF6", // Matches bg-violet-500
                borderRadius: "50%",
                filter: "blur(10px)",
                zIndex: "0",
              }}
            ></span>
            <span
              style={{
                position: "absolute",
                width: "5rem",
                height: "5rem",
                top: "0.75rem", // Matches top-3
                right: "2rem", // Matches right-8
                background: "#F87171", // Matches bg-rose-300
                borderRadius: "50%",
                filter: "blur(10px)",
                zIndex: "0",
              }}
            ></span>
            <span style={{ position: "relative", zIndex: "0" }}>Read More</span>
          </button>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedPost && (
        <motion.div
          style={{
            position: "fixed",
            top: isMobile ? "28%" : "50%",
            left: "50%",
            transform: isMobile ? "translate(-50%, 0)" : "translate(-50%, -50%)",
            width: "100%",
            maxWidth: isMobile ? "90%" : "600px",
            backgroundColor: "#1A1A1A",
            padding: isMobile ? "1rem" : "2rem",
            borderRadius: "1rem",
            color: "#ECEFF1",
            textAlign: "center",
            zIndex: 1000,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              style={{
                width: "100%",
                maxHeight: isMobile ? "200px" : "300px",
                objectFit: "contain",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
              }}
            />
            <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: "700" }}>
              {selectedPost.title}
            </h2>
            <p style={{ marginTop: "1rem", fontSize: isMobile ? "0.9rem" : "1rem", color: "#B0BEC5" }}>
              {selectedPost.description}
            </p>
            <button
            style={{
              position: "relative",
              marginTop: "1.5rem",
              padding: isMobile ? "0.5rem 1rem" : "0", // Matches conditional padding
              height: isMobile ? "auto" : "3rem",
              width: isMobile ? "auto" : "8rem", // Consistent width
              fontSize: isMobile ? "0.8rem" : "1rem",
              fontWeight: "600",
              color: "#F8F9FA", // Matches text-gray-50
              background: "#333333", // Matches bg-neutral-800
              border: "2px solid transparent",
              borderRadius: "1.5rem", // Matches rounded-2xl
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.5s ease",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.borderColor = "#F87171"; // Matches hover:border-rose-300
              (e.target as HTMLElement).style.color = "#F87171"; // Matches hover:text-rose-300
              (e.target as HTMLElement).style.textDecoration = "underline";
              (e.target as HTMLElement).style.textDecorationThickness = "2px"; // Matches hover:decoration-2
              (e.target as HTMLElement).style.textUnderlineOffset = "4px"; // Matches hover:underline-offset-4
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.borderColor = "transparent";
              (e.target as HTMLElement).style.color = "#F8F9FA";
              (e.target as HTMLElement).style.textDecoration = "none";
            }}
            onClick={() => setSelectedPost(null)}
          >
            <span
              style={{
                position: "absolute",
                width: "3rem",
                height: "3rem",
                top: "0.25rem", // Matches top-1
                right: "0.25rem", // Matches right-1
                background: "#8B5CF6", // Matches bg-violet-500
                borderRadius: "50%",
                filter: "blur(10px)",
                zIndex: "0",
              }}
            ></span>
            <span
              style={{
                position: "absolute",
                width: "5rem",
                height: "5rem",
                top: "0.75rem", // Matches top-3
                right: "2rem", // Matches right-8
                background: "#F87171", // Matches bg-rose-300
                borderRadius: "50%",
                filter: "blur(10px)",
                zIndex: "0",
              }}
            ></span>
            <span style={{ position: "relative", zIndex: "1" }}>Close</span>
          </button>

          </div>
        </motion.div>
      )}

      {/* Back Button */}
      {isMobile && (
        <button
        style={{
          position: "fixed",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          height: "3rem",
          width: "auto", // Dynamic width for the text
          padding: "0 2rem", // Padding for consistent height while maintaining a clickable area
          fontSize: "1rem",
          fontWeight: "600",
          color: "#F8F9FA", // Matches text-gray-50
          background: "#333333", // Matches bg-neutral-800
          border: "2px solid transparent",
          borderRadius: "2rem", // Maintains rounded style
          cursor: "pointer",
          textAlign: "center",
          zIndex: 1001,
          overflow: "hidden",
          transition: "all 0.5s ease",
        }}
        onMouseOver={(e) => {
          (e.target as HTMLElement).style.borderColor = "#F87171"; // Matches hover:border-rose-300
          (e.target as HTMLElement).style.color = "#F87171"; // Matches hover:text-rose-300
          (e.target as HTMLElement).style.textDecoration = "underline";
          (e.target as HTMLElement).style.textDecorationThickness = "2px"; // Matches hover:decoration-2
          (e.target as HTMLElement).style.textUnderlineOffset = "4px"; // Matches hover:underline-offset-4
        }}
        onMouseOut={(e) => {
          (e.target as HTMLElement).style.borderColor = "transparent";
          (e.target as HTMLElement).style.color = "#F8F9FA";
          (e.target as HTMLElement).style.textDecoration = "none";
        }}
        onClick={() => window.history.back()}
      >
        <span
          style={{
            position: "absolute",
            width: "3rem",
            height: "3rem",
            bottom: "0.25rem", // Consistent with fixed position
            left: "0.5rem", // Positioned left for effect
            background: "#8B5CF6", // Matches bg-violet-500
            borderRadius: "50%",
            filter: "blur(10px)",
            zIndex: "0",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            width: "5rem",
            height: "5rem",
            bottom: "1rem", // Larger blur positioned towards center
            left: "1.5rem",
            background: "#F87171", // Matches bg-rose-300
            borderRadius: "50%",
            filter: "blur(10px)",
            zIndex: "0",
          }}
        ></span>
        <span style={{ position: "relative", zIndex: "1" }}>Back</span>
      </button>
      
      )}
    </div>
  );
}
