import React, { useEffect, useState } from "react";
import {motion,useMotionValue,useScroll,useTransform } from 'framer-motion'

export default function Cursor(){
    const tx=useMotionValue(0)
    const ty= useMotionValue(0)
    const scrollX =useMotionValue(0)
    const scrollY =useMotionValue(0)
    const {scrollYProgress: scrollYProgress} = useScroll();
    
    const borderColor = useTransform(scrollYProgress,[0,0.7,0.7,0.7,1],['rgb(255, 255, 255)', 'rgb(192, 192, 192)', 'rgb(105, 105, 105)', 'rgb(0, 255, 255)', 'rgb(144, 238, 144)'])
    // const borderRadius = useTransform(scrollYProgress,[0,0.5,1],['50%','0%','40%'])
    const backgroundColor=useTransform(scrollYProgress,[0,0.5,1],['rgb(0, 255, 255)','rgb(127, 0, 255)','rgb(255, 165, 0)'])
    const x = useTransform([tx, scrollX], ([latestTx, latestScrollX]) => latestTx + latestScrollX);
    const y = useTransform([ty, scrollY], ([latestTy, latestScrollY]) => latestTy + latestScrollY);
    useEffect(()=>{
        const mouseMove = (e) => {
            tx.set(e.clientX -15)
            ty.set(e.clientY -15)
            
    }
    const scrollmove =()=>{
        scrollX.set(window.scrollX)
        scrollY.set(window.scrollY)
    }
    window.addEventListener('scroll',scrollmove)
    window.addEventListener('mousemove',mouseMove)
    return ()=>{
        window.removeEventListener('mousemove',mouseMove)
        window.removeEventListener('scroll',scrollmove)
    }
    },[tx,ty])
    return(
       <div className="containerss">
        {/* <NavBar/> */}
        {/* <Main/> */}
        <motion.div id='progressbar' style={{scaleX:scrollYProgress,backgroundColor}}></motion.div>
            <motion.div style={{x, y,borderColor}}   transition={{ type: "spring", stiffness: 100, damping: 20 }} className="cursor shadow-lg"></motion.div>
            
                
        </div>
    )
}
