import React from 'react';
import logo from '../assets/assets/LotfiSlimLogo2.png';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-center py-4'>
      <motion.div 
       variants={container(0)}
       initial="hidden"
       animate="visible"
      className='flex flex-shrink-0 items-center'>
        <img className="w-28 h-28 rounded-2xl" src={logo} alt="Logo" />
      </motion.div>
      <div 
      
      className='m-8 flex items-center justify-center text-2xl gap-4 lg:gap-8 lg:text-4xl'>
        <motion.a 
        initial= {{x : 100 , opacity: 0}}
        animate = {{x: 0 , opacity: 1}}
        transition={{duration: 1, delay: 1}}
        className="text-blue-700 hover:underline cursor-pointer" 
        href="https://www.linkedin.com/in/lotfi-slim-de/" target='_blanc'>
         <FaLinkedin /> 
        </motion.a>
        <motion.a 
        initial= {{x : 100 , opacity: 0}}
        animate = {{x: 0 , opacity: 1}}
        transition={{duration: 1, delay: 1.5}}
        href="https://github.com/lotfi80" target='_blanc'>
          <FaGithub />
        </motion.a>
        <motion.a 
        initial= {{x : 100 , opacity: 0}}
        animate = {{x: 0 , opacity: 1}}
        transition={{duration: 1, delay: 2}}
        className="text-blue-500 hover:underline cursor-pointer"
        href="https://www.facebook.com/slim/">
          <FaFacebook />
        </motion.a>
        <motion.a
        initial= {{x : 100 , opacity: 0}}
        animate = {{x: 0 , opacity: 1}}
        transition={{duration: 1, delay: 2.5}}
        className="text-pink-300 hover:underline cursor-pointer"
        href="#">
          <FaInstagram />
        </motion.a>
        
      </div>
    </nav>
  );
}

export default Navbar;
