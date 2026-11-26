import Animation from "../assets/Animation.gif";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        About Me
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              width={400}
              height={400}
              className="rounded-2xl"
              src={Animation}
              alt="About_Me_Img"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-xl py-6">
              I am a Software Developer with a degree in Systems Analysis and Development and 3 years of experience in the technology industry. Throughout my career, I participated in an Academy training program and also gained professional experience as a Full Stack Developer, Systems Developer, Front-end Developer, and Paid Media Analyst.

Currently, I focus specifically on Front-end development, creating and improving marketing emails using HTML and CSS, as well as developing animated banners with Google Web Designer and JavaScript. I also have experience in Back-end development, API integrations, developing PHP and JavaScript routines, and building projects using Python, React, and TypeScript.

I am a fast learner who enjoys exploring new technologies and turning ideas into functional digital solutions. I am constantly looking to improve my skills and expand my knowledge, while valuing creativity, collaboration, and continuous professional growth.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
