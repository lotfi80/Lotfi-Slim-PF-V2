import { LOTFI_CONTENT } from "../constants";
import profilePic from "../assets/assets/LotfiSlimProfile.png";
import CV from "../assets/CV/Lebenslauf-English-LUX.pdf";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = (delay) => ({
  
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Lotfi = () => {
  const { t } = useTranslation();

  return (
      <>
      <div className="flex flex-col lg:flex-row w-full lg:px-10 m-4">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-16 text-6xl font-thin tracking-tight lg:mt-16"
        >
          Lotfi Slim
        </motion.h1>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500  to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
        >
          full stack developer
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-4 max-w-xl py-6 font-light tracking-tighter"
        >
           {t('lotfi_content')}
        </motion.p>
        <motion.div
    
    variants={container(1.5)}
    initial="hidden"
    animate="visible"
    className="w-2/3 lg:w-full flex justify-center lg:justify-start " >
            <a href={CV} download className="text-blue-500 hover:underline tracking-tight p-4" >
                  {t('download_cv')}
            </a>

      </motion.div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-10">
        <motion.img 
        initial= {{x : 100 , opacity: 0}}
        animate = {{x: 0 , opacity: 1}}
        transition={{duration: 1, delay: 1.2}}
         className="rounded-2xl" src={profilePic} alt="Lotfi Slim" />
      </div>
      
    </div>
   
      </>
    
  );
};

export default Lotfi;
