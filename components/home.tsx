import { FadeIn, letter, sentence } from '@/lib/constants';
import { textAnimate, earth, earthflexText, earthTv, earthWrapper, missile, missileWrapper, saturn, saturnWrapper, staggerContainer, imageAnimate, oldMan, speechText, hithereAnimate, scaleAbout, statusAnimate, swimming, artcraft } from '@/lib/motions';
import { motion, useScroll, useAnimation, useInView } from 'framer-motion'

export default function HomeIndex() {

    return (
        <>
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
                    variants={earthflexText}
                    initial="initial"
                    animate="animate"
                    className="earthflex "
                >
                    <span className="glitch">EARTH</span>
                    <span className='grain'>FLEX</span>
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
                    className="p-element "
                    variants={earthWrapper}
                    initial="initial"
                    animate="animate"
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
                    variants={earthTv}
                    initial="initial"
                    animate="animate"
                    className="p-element group-computer aura">
                    <motion.img
                        className="pe-none computer"
                        src="/element/computer-earth.gif"
                    />
                </motion.div>
{/* 
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
                </motion.div> */}

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
            <motion.div>
                <div className="about-content">
                    <div className="container">
                        <motion.div className="about-detail"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.5 }}
                        >
                            <motion.div
                                variants={statusAnimate}>
                                <motion.div
                                    className="wrap-chip"
                                    animate={{
                                        background: [
                                            "linear-gradient(0deg, #C16AAF 0%, #6A4E9D 40.89%, #213C85 80.6%, #000000 189%)",
                                            "linear-gradient(135deg, #60CAFC, #2F65FF, #A56CFF, #5D2EFF)",
                                        ],
                                    }
                                    }
                                    transition={{
                                        ease: "linear",
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <span className="chip-status">Finding a new job</span>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="wrap-about"
                                variants={scaleAbout}
                            >
                                <div className="about-shadow" />
                                <div className="about-me">
                                    <motion.h3
                                        variants={hithereAnimate}
                                    >Hi there
                                    </motion.h3>
                                    <motion.h2
                                        variants={textAnimate}
                                    >My name is Apiwat Anekboon.
                                        <br />
                                        I am a front-end developer from Thailand, with 4 years of experience in web development.
                                        <br />Over the past few years,
                                        <br /> I have focused on front-end development using HTML, CSS, and JavaScript.
                                        <br /> I am passionate about creating beautiful micro-interactions and minor details in interface design.
                                        <br />
                                        In my leisure time, I like to explore art, music, tattoos, and vintage shopping.
                                    </motion.h2>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="project-content">
                    {/* <motion.div
                        className="p-element project-bg"
                    >
                        <motion.img
                            src="/element/project-bg-min.png"
                        />
                    </motion.div> */}
                    <motion.div
                        className="p-top"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ staggerChildren: 0.5 }}>
                        <motion.div
                            className="p-element flamingo"
                        >
                            <motion.img
                                src="/element/flamingo-min.png"
                            />
                        </motion.div>
                        <motion.div
                            className="p-element fuji"
                        >
                            <motion.img
                                src="/element/mount-fuji-min.png"
                            />
                        </motion.div>
                        <motion.div
                            className="p-element cloud"
                        >
                            <motion.img
                                src="/element/cloud-min.png"
                            />
                        </motion.div>
                        <div className="group-building">
                            <motion.div
                                className="building-3"
                            >
                                <motion.img
                                    src="/element/statue-liberty-min.png"
                                />
                            </motion.div>
                            <motion.div
                                className="building-1"
                            >
                                <motion.img
                                    src="/element/building-1-min.png"
                                />
                            </motion.div>
                            <motion.div
                                className="building-2"
                            >
                                <motion.img
                                    src="/element/building-2-min.png"
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            className="p-element mount-road"
                        >
                            <motion.img
                                src="/element/mount-road-min.png"
                            />
                        </motion.div>

                        <motion.div
                            className="p-element river-valley"
                        >
                            <motion.img
                                src="/element/river-valley-min.png"
                            />
                        </motion.div>
                        <motion.div className="p-element old-main">
                            <motion.img
                                variants={oldMan}
                                src="/element/old-man.png"
                            />
                        </motion.div>
                        <motion.div
                            variants={speechText}
                            className="p-element speech-bubble"

                        >
                            <div className="speech-text">let’s make something special</div>
                        </motion.div>
                        <motion.div
                            className="p-element sunflowers-footer"
                        >
                            <motion.img
                                src="/element/sunflowers-footer-min.png"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}
