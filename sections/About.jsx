"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.flexCenter} flex-col`}
    >
      <TypingText title=" | About Metaverse" textstyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-8 font-normal sm:text-[32px] text-[16px] text-center text-secondary-white"
      >
        Metaverse is a new thing in the future, where you can enjoy the virtual
        world by feeling like it's really real, you can feel what you feel in
        this metaverse world, because this is really the madness of the
        metaverse of today, using only VR devices you can easily explore the
        metaverse world you want, turn your dreams into reality. Let's explore
        the madness of the metaverse by scrolling down
      </motion.p>
    </motion.div>
  </section>
);

export default About;
