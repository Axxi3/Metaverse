"use client";
import { motion } from "framer-motion";
import styles from "../styles";

import { TypingText, TitleText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| People on the world" textstyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textstyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="relative mt-[48px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-60 right-32 w-[30px] h-[30px] p-[6px] rounded-full bg-[#5D6680] md:w-[50px] md:h-[50px] md:right-40 md:top-48 lg:right-96">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full object-contain"
          />
        </div>   
        <div className="absolute bottom-52 left-20 w-[30px] h-[30px] p-[6px] rounded-full bg-[#5D6680] md:w-[50px] md:h-[50px] md:left-40 md:bottom-56 lg:left-72">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full object-contain"
          />
        </div> 
        <div className="absolute bottom-44 right-20 w-[30px] h-[30px] p-[6px] rounded-full bg-[#5D6680] md:w-[50px] md:h-[50px] md:right-40 md:bottom-36 lg:right-32">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
