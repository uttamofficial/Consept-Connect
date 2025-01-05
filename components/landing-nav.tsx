import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LandingNav = () => {
  const pathname = usePathname();
  const [currentSelection, setCurrentSelection] = useState("Home");
  const [currPath, setCurrPath] = useState("Home");
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSelection("Home");
    } else {
      if (pathname) {
        const currpath = pathname.slice(1).split("/")[0];
        setCurrentSelection(currpath.charAt(0).toUpperCase() + currpath.slice(1));
        setCurrPath(currpath.charAt(0).toUpperCase() + currpath.slice(1));
      }
    }
  }, [pathname]);

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
    <div className="py-4 flex justify-center items-center font-heading2 font-light ">
      <nav className="mx-auto bg-transparent relative backdrop-blur-lg rounded-2xl border border-black/10 p-0 py-[9px] dark:border-gray-600 shadow-sm">
        <ul className="relative flex items-center gap-2">
        <li className="">
              <Link href="/">
                <button
                  type="button"
                  onMouseOver={() => setCurrentSelection("Home")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  className={cn(
                    "relative px-5 py-3 text-sm font-light text-black/60 transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75",
                    pathname === "/" && "text-black/80 dark:text-white/75 "
                  )}
                >
                  Home
                  {currentSelection === "Home" && (
                    <motion.div
                      layoutId="scroll-nav"
                      initial={{ y: 0, opacity: 0 }}
                      animate={{ y: 1, opacity: 1 }}
                      exit={{ y: -2, opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      // viewport={{ once: false }}
                      className=" absolute inset-0 -z-10 rounded-2xl  bg-gradient-to-tr from-accent-2/50 to-accent-2/20 border-2 pt-5 "
                    />
                  )}
                </button>
              </Link>
            </li>

            <li className="">
              <Link href="/career">
                <button
                  onMouseOver={() => setCurrentSelection("Career")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  type="button"
                  className={cn(
                    "relative  px-5 py-3 text-black/6 0  text-sm font-light transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75 ",
                    pathname === "/career" &&
                      " text-black/80  dark:text-white/75 "
                  )}
                >
                  Products{" "}
                  <span className=" inline text-mute-foreground dark:text-white rounded-full pt-5 mb-4 font-heading2"></span>
                  {currentSelection === "Career" && (
                    <motion.div
                      layoutId="scroll-nav"
                      className=" absolute inset-0 -z-10 pt-4 rounded-2xl bg-gradient-to-tr from-accent-2/50  border-2 to-accent-2/20 "
                    />
                  )}
                </button>
              </Link>
            </li>
          <li className="hidden md:block">
              <Link href="/blog">
                <button
                  onMouseOver={() => setCurrentSelection("Blog")}
                  onMouseLeave={() => setCurrentSelection(currPath)}
                  type="button"
                  className={cn(
                    "relative  px-5 py-3 text-sm font-light text-black/60 transition-[text-shadow,color] duration-200 hover:text-black/80 focus:outline-none dark:text-white/60 dark:hover:text-white/75",
                    pathname?.includes("/blog") &&
                      "text-black/80 dark:text-white/75"
                  )}
                >
                  Blog
                  {currentSelection === "Blog" && (
                    <motion.div
                      layoutId="scroll-nav"
                      className="absolute inset-0 -z-10 rounded-2xl  bg-gradient-to-tr from-accent-2/50 to-accent-2/20  border-2  pt-5 "
                    />
                  )}
                </button>
              </Link>
            </li>
                  
          <li>
          <div className="bg-black inline p-[1px] dark:h-[30px] mb-10 dark:w-[1px] dark:bg-muted-foreground mx-8"> </div>
            <button
              className="font-heading2 mr-1 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline-offset-2 hover:after:-right-8 hover:before:right-3 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-[3rem] w-41 border text-left p-3 text-gray-50 text-base font-bold rounded-2xl  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
              onClick={() => setShowCallbackForm(true)}
            >
              Request a Callback
            </button>
          </li>
          
        </ul>
      </nav>

      {showCallbackForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-gradient-to-br from-neutral-800 via-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl w-96 border border-gray-700">
            <h2 className="text-3xl font-bold text-gray-50 text-center mb-8 underline underline-offset-4 decoration-rose-300">
              Request a Callback
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded-lg shadow-inner border border-gray-600 focus:outline-none focus:ring-rose-300 focus:border-rose-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300">Mobile Number</label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded-lg shadow-inner border border-gray-600 focus:outline-none focus:ring-rose-300 focus:border-rose-300"
                placeholder="Enter your mobile number"
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
    </div>
  );
};

export default LandingNav;
