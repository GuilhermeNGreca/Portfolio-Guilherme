import RickAndMorty from "../assets/RickAndMorty.jpeg";
import SocialMedia from "../assets/SocialMedia.jpeg";
import Marketplace from "../assets/Loja.jpg";
import EmployeeRegistration from "../assets/CadastroFuncionario.png";
import Links from "../assets/Links.jpg";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Projects
      </motion.h2>

      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a
              href="https://github.com/GuilhermeNGreca/React-RickAndMorty"
              target="_blank"
            >
              <img
                width={200}
                height={200}
                className="mb-6 rounded"
                src={RickAndMorty}
                alt="Rick_And_Morty_Img"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">Rick and Morty</h6>
            <p className="mb-4 text-neutral-400">
              Project carried out with mentoring from the academy where I am
              part. Fullstack project with front-end made in React, API made in
              Python, and database in PostgreSQL.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Python
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
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
            <a
              href="https://github.com/GuilhermeNGreca/Social-Media"
              target="_blank"
            >
              <img
                width={200}
                height={200}
                className="mb-6 rounded"
                src={SocialMedia}
                alt="Rick_And_Morty_Img"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">DevMedia - Social Media</h6>
            <p className="mb-4 text-neutral-400">
              The DevMedia Project is a social media where your friends can
              enjoy their best memories with you.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Node.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              MongoDB
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
            <a
              href="https://github.com/GuilhermeNGreca/projetoloja"
              target="_blank"
            >
              <img
                width={200}
                height={200}
                className="mb-6 rounded"
                src={Marketplace}
                alt="Rick_And_Morty_Img"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">E-Commerce</h6>
            <p className="mb-4 text-neutral-400">
              The E-Commerce Project is an online store consuming the Mercado
              API Free.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JavaScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              HTML5
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              CSS3
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
            <a
              href="https://github.com/GuilhermeNGreca/cadastrofuncionario"
              target="_blank"
            >
              <img
                width={200}
                height={200}
                className="mb-6 rounded"
                src={EmployeeRegistration}
                alt="Rick_And_Morty_Img"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">Employee Registration</h6>
            <p className="mb-4 text-neutral-400">
              The Employee Registration Project is a system to organize and
              facilitate the work of managing people in your company.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JavaScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              HTML5
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              CSS3
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
            <a
              href="https://github.com/GuilhermeNGreca/ProjetoLinks"
              target="_blank"
            >
              <img
                width={200}
                height={200}
                className="mb-6 rounded"
                src={Links}
                alt="Rick_And_Morty_Img"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">Link Aggregator</h6>
            <p className="mb-4 text-neutral-400">
              The Links Project is a link aggregator to use as an online
              business card.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JavaScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              HTML5
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              CSS3
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
