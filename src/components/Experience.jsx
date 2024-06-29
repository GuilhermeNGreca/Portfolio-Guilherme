import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Experience
      </motion.h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p>01/2024 - Currently</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl ls:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              Apprentice Full Stack Developer - <span>Eitree</span>
            </h6>
            <p className="mb-4 text-neutral-400">
              Engaged in the development of a web system for a Brazilian
              nongovernmental organization focused on animal adoption. In this
              project, involved in back-end development using Python and
              relational databases, as well as front-end creation with React.js.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              React.js
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Typescript
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              PostgreSQL
            </span>
          </motion.div>
        </div>

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p>01/2019 - 04/2019</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl ls:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              Intern in Electronics Technician - <span>InfoP4</span>
            </h6>
            <p className="mb-4 text-neutral-400">
              I worked in network cable installation, computer and electronics
              maintenance, and the commercialization and use of electronic
              equipment and systems.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Cabling
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Diagnostics
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Maintenances
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
