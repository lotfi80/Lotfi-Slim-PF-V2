import React from "react";
import aboutImg from "../assets/assets/about.png";
import { ABOUT_TEXT } from "../constants/index";
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion'
function About() {
  const { t } = useTranslation();
  return (
    <div className="bprder-b border-neutral-900 pb-2">
      <h1 className="my-20 text-center text-4xl ">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className=" flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className=" flex items-center justify-center">
            <img className="rounded-2xl w-80 h-80" src={aboutImg} alt="about" />
          </div>
        
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 px-4">
            <div className="flex justify-center lg:justify-start">
                  <p className="my-2 max-w-xl py-6">
                        {t("about_text")}
                  </p>

            </div>

          </motion.div>
      </div>
    </div>
  );
}

export default About;
