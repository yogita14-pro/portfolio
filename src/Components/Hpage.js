import React from "react";
import mysitpic from "./Images/sittingpic.jpg";
import {motion} from "framer-motion";

const container={
    hidden:{
        opacity:1, scale:0
    },
    visible:{
        opacity:1,
        scale:1,
        transition:{
            delayChildren:0.4,
            staggerChildren:0.3
        }
    }
};
const item={
    hidden:{
        x:30,opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        duration:1200
    }
};
const downitem={
    hidden:{
        y:30,opacity:0
    },
    visible:{
        y:0,
        opacity:1
    }
};
function Hpage(){
  return(
    <div id="portfoliohome">
        <motion.div className="rectimg" variants={container} initial="hidden" animate="visible" >
        <motion.img src={mysitpic} variants={downitem} alt="yogita" ></motion.img>
    </motion.div>
            <motion.ul className="port"  initial="hidden" animate="visible">
                <motion.li className="darkli" variants={item} transition={{ delay: 0.51 }}>PORTFOLIO</motion.li>
                <motion.li className="nocol" variants={item} transition={{ delay: 1 }}>PORTFOLIO</motion.li>
                <motion.li className="nocol" variants={item} transition={{ delay: 1 }}>PORTFOLIO</motion.li>
                <motion.li className="nocol" variants={item} transition={{ delay: 1 }}>PORTFOLIO</motion.li>
            </motion.ul>
            <div className="ids">
                <motion.ul variants={item} initial="hidden" animate="visible" transition={{ delay: 1.5 }} >
                    <motion.li variants={downitem}>LI: <a href="https://www.linkedin.com/in/yogita-choudhary-286942201/">/yogita-choudhary</a></motion.li>
                    <motion.li variants={downitem}>GH: <a href="https://github.com/yogita14-pro">/yogita-choudhary</a></motion.li>
                    <motion.li variants={downitem}>LC: <a href="https://leetcode.com/u/Yogita_codes/">/yogita-choudhary</a></motion.li>
                    <motion.li variants={downitem}>X: <a href="https://twitter.com/yogita14_cdy">/yogita-choudhary</a></motion.li>
                </motion.ul>
            </div>

            <div className="homepara"></div>
            <motion.p variants={item} initial="hidden" animate="visible" className="hp">
                I love to code using Python.<br></br>
                I approach probem in a rational and pragmatic way.<br></br>
                I provide the simplest and most functional solutions possible.
            </motion.p>
    </div>
 )
}

export default Hpage;