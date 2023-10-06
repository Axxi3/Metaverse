'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motion';
export const TypingText = ({ title, textstyles }) => (
  <motion.h2
    variants={textContainer}
    className={`font-normal text-[24px] text-secondary-white ${textstyles}`}
  >
    {Array.from(title).map((letter, index) => {
      return (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      );
    })}
  </motion.h2>
);

export const TitleText = ({ title, textstyles }) => (
  <motion.h2
    variants={textContainer}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] font-bold md:text-[64px] 
  text-[40px] text-white ${textstyles}`}
  >
    {title}
  </motion.h2>
);
