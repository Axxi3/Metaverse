"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText, ExploreCard, TitleText } from "../components";
import { staggerContainer } from "../utils/motion";
import { useState } from "react";
import { exploreWorlds } from "../constants";
const Explore = () => {    
  const [active, setActive] = useState('');
  return( 
  <section className={`${styles.paddings}`} >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}  
      
    >
      <TypingText title=" | The Worlds" textstyles="text-center"  />
      <TitleText
        title={
          <>
            Choose the world you want <br className="md:block hidden" />
            to explore
          </>
        }
        textstyles="text-center"
      />  
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5" id="explore">  
      {exploreWorlds.map((world,index)=>{   
        console.log(world.imgUrl)
        return( 
          <ExploreCard 
          key={world.id} 
          {...world} 
          index={index}    
          active={active}
          handleClick={setActive}/> 
        )
      })}
      
      </div>
    </motion.div>
  </section>
)};

export default Explore;
