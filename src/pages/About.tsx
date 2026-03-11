import { IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { SectionMotion } from "../common/motion/Section";

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = "A short story of me";
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, Shashi Kant</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I am a Frontend Developer with 4 years of professional experience,
        specializing in React and UI development. Passionate about creating
        high-performance, scalable, and user-friendly web applications. Skilled
        in HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind, React, Next.js,
        Git, SQL, and MySQL. 
      </p>
      <p>
        I thrive on turning ideas into visually appealing
        and functional digital experiences, constantly learning and adopting
        modern best practices.
      </p>
    </motion.section>
  );
};
