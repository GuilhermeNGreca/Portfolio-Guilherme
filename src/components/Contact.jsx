import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          <span className="text-base sm:text-lg lg:text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
            E-mail:
          </span>
          <a
            target="_blank"
            href="mailto:guilherme3fs@gmail.com"
            className="text-sm sm:text-base"
          >
            {" "}
            guilherme3fs@gmail.com
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <span className="text-base sm:text-lg lg:text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
            Linkedin:
          </span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/guilherme-greca-155027263/"
            className="text-sm sm:text-base"
          >
            {" "}
            linkedin.com/guilherme-greca
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          <span className="text-base sm:text-lg lg:text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
            Github:
          </span>
          <a
            target="_blank"
            href="https://github.com/GuilhermeNGreca"
            className="text-sm sm:text-base"
          >
            {" "}
            github.com/GuilhermeNGreca
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <span className="text-base sm:text-lg lg:text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
            Phone:
          </span>
          <a
            target="_blank"
            href="https://wa.me/5535999613983"
            className="text-sm sm:text-base"
          >
            {" "}
            +55 (35) 99961-3983
          </a>
        </motion.p>
      </div>
    </div>
  );
};
