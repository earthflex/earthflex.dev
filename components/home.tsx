import { earth, earthflexText, earthTv, earthWrapper, missile, missileWrapper, saturn, saturnWrapper, staggerContainer } from '@/lib/motions';
import { motion, useScroll, useAnimation } from 'framer-motion'

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
            </motion.div>
            <div className="about-content">
                <div className="container">
                    <div className="about-detail">
                        <h3>Hi there</h3>
                        <h2>My name is Apiwat Anekboon.
                            <br />
                            I'm a front-end developer from Thailand with 4 years of expertise in web development.
                            During the past several years,
                            <br /> I've concentrated on front-end development using HTML, CSS, and JavaScript.
                            <br />
                            In my leisure time, I like to explore art.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <motion.div
                    className="p-element project-bg"
                >
                    <motion.img
                        src="/element/project-bg-min.png"
                    />
                </motion.div>
                <div className="p-top">

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

                    <motion.div
                        className="p-element sunflowers-footer"
                    >
                        <motion.img
                            src="/element/sunflowers-footer-min.png"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    )
}
