"use client";
import { motion } from "framer-motion";
import styles from "../styles";

import { TypingText, NewFeatures, TitleText, InsightCard } from "../components";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";
const Insights = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| Insight" textstyles="text-center"/>
      <TitleText title="Insight about metaverse" textstyles="text-center"/>  
      <div className="mt-[50px] flex flex-col gap-[30px]">  
      {  
        insights.map((insights,index)=>{ 
          return( 
            <InsightCard key={index}  
            {...insights}  
            index={index+1}/>
          )
        })
      }</div>
    </motion.div>
  </section>
);

export default Insights;
