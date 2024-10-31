import ProfileImg from "../assets/fotoperfil.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap mb-40">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-center pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Guilherme Greca
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a Full Stack Developer with experience in React, TypeScript,
              JavaScript, Python, PHP, Node.js, TailwindCSS, PostgreSQL and
              more. I am currently pursuing a degree in Systems Analysis and
              Development to deepen my theoretical knowledge. I actively
              participate in Full Stack projects at a remote Academy, where I am
              building a diverse portfolio. Additionally, I am interning as a
              systems developer at a company based in São Paulo, also remotely,
              where I work on XML mapping, PHP and JavaScript routines, and
              system integrations via API.
            </motion.p>
            <a
              href="/FULLSTACK%20curriculo.pdf"
              download="Guilherme_Greca_CV.pdf"
              className="mb-10 px-4 py-2 text-white rounded transition-all duration-300 ease-in-out bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:animate-gradient hover:scale-105 active:scale-90"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              width={300}
              height={300}
              className="rounded-2xl"
              src={ProfileImg}
              alt="Profile_Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
