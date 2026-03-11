import { motion } from "framer-motion";
// import { LeaveCard } from "../components/LeaveCard";
import { HomeMotion } from "../common/motion/Home";
import { Link } from "react-router-dom";

export const Home = () => {
  const { resume} = HomeMotion;

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden relative"
      style={{ height: "calc(100vh - 62px)" }}
    >
      <motion.div className="flex flex-1 flex-col space-y-6 md:space-y-8 items-center md:items-start text-center md:text-left max-w-full">
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora justify-center md:justify-start">
          <span>Hi there!</span>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight">
          Shashi Kant Mishra
        </h1>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
          Frontend / UI Developer
        </h2>
        <p className="text-xs md:text-base max-w-md">
         Building responsive and interactive web interfaces with clean and efficient code. Experienced in React, Next.js, and modern frontend technologies.
        </p>
        <Link to="./Shashi-Kant-Mishra-latest.pdf" target="_blank">
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
            className="rounded-3xl w-max border px-5 py-3 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
          >
            Download Resume
          </motion.div>
        </Link>
      </motion.div>
      <motion.div className="flex flex-1 items-start justify-center mt-4 lg:mt-0 max-w-full">
        <motion.img
          src={`${import.meta.env.BASE_URL}shashi-1.png`}
          alt="profile"
          className="w-auto max-w-full max-h-[100vh] object-contain rounded-xl shadow-lg"
        />
      </motion.div>
      {/* <div className="absolute bottom-8 right-8">
        <LeaveCard label="Frontend Dev" />
      </div> */}
    </section>
  );
};
