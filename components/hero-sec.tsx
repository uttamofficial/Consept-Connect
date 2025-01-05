"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { renderCanvas } from "@/lib/canvas-render";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constant-motion";
import { cn } from "@/lib/utils";

import styles from "../components/text-styles/text-wrapper.module.css";
import { ScrollContext } from "./providers/scroll-view";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Products", href: "/career" },
  { name: "Blogs", href: "/blog" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false); // Toggle for callback form
  const [name, setName] = useState<string>(""); // Name input state
  const [mobileNumber, setMobileNumber] = useState<string>(""); // Mobile number input state

  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setShowCallbackForm(false);
  };

  const handleCallbackSubmit = () => {
    const message = `Name: ${name}, Mobile: ${mobileNumber}`;
    const whatsappUrl = `https://wa.me/+919109966274?text=${encodeURIComponent(message)}`;
    (window as any).open(whatsappUrl, "_blank");
    setShowCallbackForm(false); // Close the form after submitting
  };

  const handleFormToggle = () => {
    setShowCallbackForm(!showCallbackForm);
  };

  useEffect(() => {
    renderCanvas();
  }, []);

  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="bg-transparent relative w-full">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="flex items-center justify-between p-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-black"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 }, exit: { opacity: 0 } }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                />
                <motion.div
                  className="fixed inset-y-0 left-0 z-50 w-full sm:max-w-sm bg-black px-6 py-6 sm:ring-1 sm:ring-gray-900/10"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{ hidden: { x: "-100%", opacity: 0 }, visible: { x: 0, opacity: 1 }, exit: { x: "-100%", opacity: 0 } }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <img
                        className="h-20 w-auto border border-gray-200 rounded-lg"
                        src="/logo.jpg"
                        alt="Logo"
                      />
                    </a>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-white-700"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Close Mobile Menu"
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-white-500/10">
                      <div className="space-y-3 py-6 my-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-mx--3 block     leading-7 w-28  rounded-2xl  text-l  underline-offset-2 
                            font-heading2 mr-1 group relative bg-neutral-800 h-[3rem] border text-center p-3 text-gray-50 text-lg font-bold  overflow-hidden hover:border-rose-300 duration-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-rose-300 before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="py-6">
                      <button
                        className="font-heading2 mr-1 group relative bg-neutral-800 h-[3rem] w-42 border text-center p-3 text-gray-50 text-lg font-bold rounded-xl overflow-hidden hover:border-rose-300 duration-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-rose-300 before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
                        onClick={handleFormToggle}
                      >
                        Request a Callback
                      </button>
                    </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>

        <div className="relative isolate px-6 pt-8 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-36">
            <div className="text-center">
              <motion.h1
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#e8eaed] sm:text-[9rem] text-center"
              >
                <span className={cn(styles.magicText)}>CONSEPT</span>{" "}
                <span className={cn(styles.magicText)}>CONNECT</span>{" "}
                <br />
                <span className="font-heading2 bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent">
                  IDEA <span className="mx-1"></span>TO{" "}
                  <span className="mx-1"></span> PRODUCT.
                </span>
              </motion.h1>
              <p className="mt-6 text-lg leading-8 text-gray-500 text-left max-w-3xl font-sans">
                Empowering Your Ideas with AI and Technology to Build Innovative Solutions <br />
                That Inspire, Connect, and Deliver Excellence.
              </p>
              <div className="mt-10 flex items-center justify-left gap-x-6">
                <button
                  className="before:content[''] after:content[''] group relative h-16 w-64 origin-left overflow-hidden rounded-lg border bg-neutral-800 p-3 text-left font-heading2 text-lg font-bold text-gray-50  underline-offset-2 duration-500 before:absolute before:right-1 before:top-1 before:z-10 before:h-12 before:w-12 before:rounded-full before:bg-violet-500 before:blur-lg before:duration-500 after:absolute after:right-8  after:top-3  after:z-10 after:h-20 after:w-20 after:rounded-full after:bg-rose-300 after:blur-lg after:duration-500 hover:border-rose-300 hover:text-rose-300 hover:underline  hover:decoration-2 hover:underline-offset-4 hover:duration-500 hover:before:-bottom-8 hover:before:right-12  hover:before:blur hover:before:[box-shadow:20px_20px_20px_30px#a21caf] hover:after:-right-8 group-hover:before:duration-500 group-hover:after:duration-500"
                  onClick={handleFormToggle}
                >
                  Request a Callback
                </button>
              </div>
            </div>
          </div>

          {showCallbackForm && (
  <div
    className={`fixed inset-0 flex items-center justify-center z-50 ${
      closing ? "bg-transparent" : "bg-gray-900 bg-opacity-50"
    }`}
  >
    <div
      className={`bg-gradient-to-br from-neutral-800 via-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl w-96 border border-gray-700 ${
        closing ? "animate-fade-out" : "animate-zoom-out"
      } relative`}
    >
      <h2 className="text-3xl font-bold text-gray-50 text-center mb-8 underline underline-offset-4 decoration-rose-300">
        Request a Callback
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded-lg shadow-inner border border-gray-600 focus:outline-none focus:ring-rose-300 focus:border-rose-300 duration-500"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300">
          Mobile Number
        </label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded-lg shadow-inner border border-gray-600 focus:outline-none focus:ring-rose-300 focus:border-rose-300 duration-500"
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="font-heading2 mr-1 group relative bg-neutral-800 h-[3rem] w-32 border text-center p-3 text-gray-50 text-base font-bold rounded-2xl overflow-hidden hover:border-rose-300 duration-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-rose-300 before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="font-heading2 mr-1 group relative bg-neutral-800 h-[3rem] w-32 border text-center p-3 text-gray-50 text-base font-bold rounded-2xl overflow-hidden hover:border-rose-300 duration-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-rose-300 before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          onClick={handleCallbackSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}

<style>
  {`
    @keyframes zoomOut {
      0% {
        transform: scale(0.8);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(0.8);
        opacity: 0;
      }
    }
    .animate-zoom-out {
      animation: zoomOut 0.3s ease-out;
    }
    .animate-fade-out {
      animation: fadeOut 0.3s ease-out;
    }
  `}
</style>



          <canvas
            className="bg-skin-base pointer-events-none absolute inset-0"
            id="canvas"
          ></canvas>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}