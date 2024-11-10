import { PROJECTS } from "../constants";
import { useTranslation } from "react-i18next"; 
import { motion } from "framer-motion";

const Projects = () => {
  const { t } = useTranslation(); 
  const projects = t("project", { returnObjects: true }); 

  return (
    <div className="border-b border-neutral-900 pb-4 m-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        delay={0.5}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              delay={1 }
              className="w-full lg:w-1/4 flex flex-wrap lg:justify-center "
            >
              <a className="flex flex-wrap justify-center w-full"
              href={project.gitLink} target="_blank" rel="noopener noreferrer">
                <img
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              delay={2}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">
                {projects[index]?.description}
              </p>

              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
