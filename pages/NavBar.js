import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleCallbackSubmit = () => {
    const message = `Name: ${name}, Mobile: ${mobileNumber}`;
    const whatsappUrl = `https://wa.me/+919109966274?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowCallbackForm(false);
  };

  const handleClose = () => {
    setShowCallbackForm(false);
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem 1rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid gray",
          borderRadius: "1rem",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <motion.a
            href="/"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.90rem",
              color: "gray",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "0.5rem",
              border: "2px solid transparent",
              transition: "border-color 0.1s ease, color 0.1s ease",
            }}
            whileHover={{
              borderColor: "#FBD288",
              color: "#FBD288",
            }}
          >
            Home
          </motion.a>
          <motion.a
            href="/career"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.90rem",
              color: "gray",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "0.5rem",
              border: "2px solid transparent",
              transition: "border-color 0.1s ease, color 0.1s ease",
            }}
            whileHover={{
              borderColor: "#FBD288",
              color: "#FBD288",
            }}
          >
            Products
          </motion.a>
          <motion.a
            href="/blog"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.90rem",
              color: "gray",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "0.5rem",
              border: "2px solid transparent",
              transition: "border-color 0.1s ease, color 0.1s ease",
            }}
            whileHover={{
              borderColor: "#FBD288",
              color: "#FBD288",
            }}
          >
            Blog
          </motion.a>
          <div
            style={{
              width: "1px",
              height: "1.5rem",
              backgroundColor: "gray",
              margin: "0 1rem",
            }}
          ></div>
          <motion.button
          onClick={() => setShowCallbackForm(true)}
          style={{
            position: "relative",
            padding: "0",
            height: "3rem",
            width: "11rem", // Approx. same width as w-32
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#F8F9FA", // Matches text-gray-50
            background: "#333333", // Matches bg-neutral-800
            border: "2px solid transparent",
            borderRadius: "1.5rem", // Matches rounded-2xl
            overflow: "hidden",
            textAlign: "center",
            transition: "all 0.2s ease",
          }}
          whileHover={{
            scale: 1.05, // Slight scale effect
            borderColor: "#F87171", // Matches hover:border-rose-300
            color: "#F87171", // Matches hover:text-rose-300
            textDecoration: "underline",
            textDecorationThickness: "2px", // Matches hover:decoration-2
            textUnderlineOffset: "4px", // Matches hover:underline-offset-4
          }}
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
          <span style={{ position: "relative", zIndex: "1" }}>
            Request a Callback
          </span>
        </motion.button>

        </div>
      </nav>

      {showCallbackForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#1f2937",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              width: "90%",
              maxWidth: "400px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#FBD288", // Keep the text color as-is
                marginBottom: "1rem",
                fontSize: "1.8rem",
                fontWeight: "bold", // Corrected from `style: "bold"`
                position: "relative", // Required for pseudo-element positioning
              }}
            >
              Request a Callback
              <span
            style={{
              position: "absolute",
              bottom: "-0.1rem", // Adjust position to align with text
              left: "70px",
              width: "65%",
              height: "2px", // Thickness of the underline
              background: "linear-gradient(to right, #FF512F, #DD2476)", // Gradient underline
              content: '""',
              display: "block",
              }}
              ></span>
            </h2>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "90%",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  backgroundColor: "#2d3748",
                  color: "#fff",
                  outline: "none",
                }}
                placeholder="Enter your name"
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Mobile Number
              </label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                style={{
                  width: "90%",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  backgroundColor: "#2d3748",
                  color: "#fff",
                  outline: "none",
                }}
                placeholder="Enter your mobile number"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
            onClick={handleClose}
            style={{
              position: "relative",
              padding: "0",
              height: "3rem",
              width: "8rem", // Matches w-32
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white", // Matches text-gray-50
              background: "#333333", // Matches bg-neutral-800
              border: "2px solid transparent",
              borderRadius: "1.5rem", // Matches rounded-2xl
              overflow: "hidden",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.5s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = "#F87171"; // Matches hover:border-rose-300
              e.target.style.color = "#F87171"; // Matches hover:text-rose-300
              e.target.style.textDecoration = "underline";
              e.target.style.textDecorationThickness = "2px"; // Matches hover:decoration-2
              e.target.style.textUnderlineOffset = "4px"; // Matches hover:underline-offset-4
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = "transparent";
              e.target.style.color = "#F8F9FA";
              e.target.style.textDecoration = "none";
            }}
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
            <span style={{ position: "relative", zIndex: "1" }}>Cancel</span>
          </button>

              <button
            onClick={handleCallbackSubmit}
            style={{
              position: "relative",
              padding: "0",
              height: "3rem",
              width: "8rem", // Matches w-32
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#F8F9FA", // Matches text-gray-50
              background: "#333333", // Matches bg-neutral-800
              border: "2px solid transparent",
              borderRadius: "1.5rem", // Matches rounded-2xl
              overflow: "hidden",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.5s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = "#F87171"; // Matches hover:border-rose-300
              e.target.style.color = "#F87171"; // Matches hover:text-rose-300
              e.target.style.textDecoration = "underline";
              e.target.style.textDecorationThickness = "2px"; // Matches hover:decoration-2
              e.target.style.textUnderlineOffset = "4px"; // Matches hover:underline-offset-4
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = "transparent";
              e.target.style.color = "#F8F9FA";
              e.target.style.textDecoration = "none";
            }}
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
            <span style={{ position: "relative", zIndex: "1" }}>Submit</span>
          </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}