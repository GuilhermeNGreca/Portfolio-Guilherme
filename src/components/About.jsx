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
              I am a passionate Software Developer who transforms ideas into
              impactful digital experiences. With strong skills in both Front
              End and Back End technologies, I am currently expanding my
              theoretical knowledge by pursuing a degree in Systems Analysis and
              Development. I am participating in a training program at an
              Academy, where I am actively involved in Full Stack projects
              remotely, building a diverse portfolio. As part of this program, I
              am contributing to an ongoing project for a non-governmental
              organization (NGO) based in Brazil, which provides me with
              comprehensive insights and valuable Full Stack development skills.
              Additionally, I am interning as a systems developer at a company
              in São Paulo, also remotely, where I work on XML mapping, PHP and
              JavaScript routines, and system integrations via API. I am
              committed to combining my passion for technology with a creative
              and collaborative approach, always striving to learn and grow.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
