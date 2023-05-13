import { staggerContainer, earthflexText, earthWrapper, earth, artcraft, earthTv, missile, missileWrapper, saturn, saturnWrapper, swimming } from "@/lib/motions";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import React from "react";

const Intro: React.FC = () => {

    const { scrollYProgress } = useScroll();
    const ref = React.useRef<MotionValue<number> | null>(null);

    const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    ref.current = spring;

    // const earthY = useTransform(spring, [0, 1], [0, -200]);
    // const scaleEarth = useTransform(spring, [0, 1], [1.8, 0]);

    return (
        <React.Fragment>
            <motion.div className="intro"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <motion.div
                    variants={missileWrapper}
                    initial="initial"
                    animate="animate"
                    className="p-element missile aura"
                >
                    <motion.img
                        variants={missile}
                        initial="initial"
                        animate="animate"
                        src="/element/missile-min.png" />
                </motion.div>
                <motion.div
                    variants={saturnWrapper}
                    initial="initial"
                    animate="animate"
                    className="p-element saturn aura"
                >

                    <motion.img
                        variants={saturn}
                        initial="initial"
                        animate="animate"
                        src="/element/saturn-min.png" />
                </motion.div>
                <motion.div
                    variants={earthflexText}
                    initial="initial"
                    animate="animate"
                    className="earthflex "
                >
                    <span className="glitch">EARTH</span>
                    <span className='grain'>FLEX</span>
                </motion.div>

                <motion.div
                    variants={earthWrapper}
                    initial="initial"
                    animate="animate"
                    // style={{
                    //     top: '10%',
                    //     position: 'fixed',
                    //     transformOrigin: 'top',
                    //     y: earthY,
                    //     scale: scaleEarth,
                    // }}
                    className="p-element earth-wrapper"
                >
                    <motion.img
                        variants={earth}
                        className="earth"
                        initial="initial"
                        animate="animate"
                        src="/element/earth-desktop-min.png"
                    />
                </motion.div>

                <motion.div
                    viewport={{ once: true }}
                    variants={earthTv}
                    initial="initial"
                    animate="animate"
                    className="p-element group-computer aura">
                    <motion.img
                        className="pe-none computer"
                        src="/element/computer-earth.gif"
                    />
                </motion.div>

                <motion.div
                    variants={artcraft}
                    initial="initial"
                    animate="animate"
                    className="p-element aura"
                >
                    <motion.img
                        className="pe-none aircraft"
                        src="/element/aircraft-min.png"
                    />
                </motion.div>
                <motion.div
                    variants={swimming}
                    initial="initial"
                    animate="animate"
                    className="p-element aura"
                >
                    <motion.img
                        className="pe-none swim"
                        src="/element/sport-swimming-min.png"
                    />
                </motion.div>
            </motion.div>
        </React.Fragment>
    );
};

export default Intro;