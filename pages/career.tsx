import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const headerAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const gridAnimation = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "PDF Data Extraction Automation",
      description:
        "A cutting-edge solution to enhance your tech experience with advanced automation features.",
      image: "https://netsolutions.com/insights/wp-content/uploads/2020/12/automation-testing-tools-katalon-studio.jpg",
    },
    {
      id: 2,
      name: "Assignment Management System",
      description:
        "Manage and organize your assignments with ease and efficiency.",
      image: "https://portfolio-uk1619.vercel.app/_next/image?url=%2Fassignments.png&w=1920&q=75",
    },
    {
      id: 3,
      name: "Ecommerce",
      description:
        "Your ultimate ecommerce platform for seamless shopping experiences.",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/e-commerce-website-designing-service-2220657332-jxrj6y0i.jpg",
    },
    {
      id: 4,
      name: "Social Media Platform",
      description:
        "Connect and share with an innovative social media platform.",
      image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/social_20media_20strategy.png?v=1729609958",
    },
    {
      id: 5,
      name: "Intelligent AI Solutions",
      description:
        "Leverage the power of AI with intelligent solutions for your needs.",
      image: "https://e5qjgyxhp85.exactdn.com/wp-content/uploads/2024/06/Product-Image-Gen-AI-powered-Solutions-jpg.jpg?strip=all&lossy=1&ssl=1",
    },
    {
      id: 6,
      name: "Live Chat Support",
      description:
        "Enhance customer experience with responsive live chat support.",
      image: "https://storage.googleapis.com/cdn-website-bolddesk/2024/02/c6d3e23a-750x400-1.jpg",
    },
  ];

  return (
    <motion.div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #0F0F0F)",
        color: "#FCF596",
        padding: "1rem",
      }}
      initial="hidden"
      animate="visible"
    >
      {!isMobile && <NavBar />}

      <motion.header
        style={{ marginBottom: "3rem", textAlign: "center" }}
        variants={headerAnimation}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#FCF596",
          }}
        >
          Our Products
        </h1>
        <p style={{ fontSize: "1.5rem", color: "gray", marginTop: ".5rem" }}>
          Discover the ultimate tech solutions that redefine innovation.
        </p>
      </motion.header>

      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
        variants={gridAnimation}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardAnimation}
            style={{
              position: "relative",
              borderRadius: "1rem",
              border: "2px solid",
              backgroundColor: "#1C1C1C",
              padding: "1.5rem",
              cursor: "pointer",
              overflow: "hidden",
            }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                color: "#FCF596",
              }}
            >
              {product.name}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                marginTop: "0.5rem",
              }}
            >
              {product.description.slice(0, 50)}...
            </p>
            <motion.button
            style={{
              marginTop: "1rem",
              width: "100%",
              height: "3rem",
              fontSize: "0.875rem",
              fontWeight: "bold",
              color: "#F8F9FA", // Matches text-gray-50
              background: "linear-gradient(to right, #333333, #f67070, #69247C)", // Default pink-purple gradient
              border: "1px solid transparent",
              borderRadius: "1.5rem", // Matches rounded-2xl for consistency
              cursor: "pointer",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.2s ease-in-out", // Smooth transition on hover
            }}
            whileHover={{
              scale: 1.05, // Hover scale effect
            }}
            className="gradient-hover"
            onClick={() => setSelectedProduct(product)}
          >
            <span
              style={{
                position: "absolute",
                width: "4rem",
                height: "3rem",
                top: "0rem",
                right: "0.5rem",
                // background: "#8B5CF6", // Matches bg-violet-500
                borderRadius: "50%",
                filter: "blur(15px)",
                zIndex: "0",
              }}
            ></span>
            <span
              style={{
                position: "absolute",
                width: "5rem",
                height: "3rem",
                top: "0rem",
                left: "0.5rem",
                // background: "gray", // Matches bg-rose-300
                borderRadius: "50%",
                filter: "blur(15px)",
                zIndex: "0",
              }}
            ></span>
            <span style={{ position: "relative", zIndex: "1" }}>View Details</span>
          </motion.button>

          <style jsx>{`
            .gradient-hover:hover {
              background: linear-gradient(to right, #DD2476, #8B5CF6); /* Pink to Purple Gradient */
            }
          `}</style>



          </motion.div>
        ))}
      </motion.div>

      {selectedProduct && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            style={{
              backgroundColor: "#1E1E1E",
              padding: "2rem",
              borderRadius: "1rem",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.9)",
            }}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
              }}
            />
            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {selectedProduct.name}
            </h2>
            <p style={{ marginTop: "1rem", color: "white" }}>
              {selectedProduct.description}
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
              const target = e.target as HTMLButtonElement;
              target.style.borderColor = "#F87171"; // Matches hover:border-rose-300
              target.style.color = "#F87171"; // Matches hover:text-rose-300
              target.style.textDecoration = "underline";
              target.style.textDecorationThickness = "2px"; // Matches hover:decoration-2
              target.style.textUnderlineOffset = "4px"; // Matches hover:underline-offset-4
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.borderColor = "transparent";
              target.style.color = "#F8F9FA";
              target.style.textDecoration = "none";
            }}
            onClick={() => setSelectedProduct(null)}
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
          (e.target as HTMLButtonElement).style.borderColor = "#F87171"; // Matches hover:border-rose-300
          (e.target as HTMLButtonElement).style.color = "#F87171"; // Matches hover:text-rose-300
          (e.target as HTMLButtonElement).style.textDecoration = "underline";
          (e.target as HTMLButtonElement).style.textDecorationThickness = "2px"; // Matches hover:decoration-2
          (e.target as HTMLButtonElement).style.textUnderlineOffset = "4px"; // Matches hover:underline-offset-4
        }}
        onMouseOut={(e) => {
          (e.target as HTMLButtonElement).style.borderColor = "transparent";
          (e.target as HTMLButtonElement).style.color = "#F8F9FA";
          (e.target as HTMLButtonElement).style.textDecoration = "none";
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
    </motion.div>
  );
}
