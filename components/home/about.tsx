import { cardTap } from "@/lib/constants";
import { statusAnimate, scaleCard, oldMan, speechText } from "@/lib/motions";
import { motion } from "framer-motion";
import React from "react";
import { DialogCardArrowIcon } from "../shared/Icons";
import Link from "next/link";

export default function About() {

    return (
        <React.Fragment>
            <motion.div>
                <div className="about-content">
                    <div className="container">
                        <motion.div className="about-detail"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: .3 }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            <motion.div
                                variants={statusAnimate}>
                                <motion.div
                                    className="wrap-chip"
                                    animate={{
                                        background: [
                                            "linear-gradient(0deg, #C16AAF 0%, #6A4E9D 40.89%, #60CAFC 100%, #213C85 189%)",
                                            "linear-gradient(135deg, #60CAFC, #2F65FF, #A56CFF, #5D2EFF)",
                                        ],
                                    }
                                    }
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <span className="chip-status">Finding a new job</span>
                                </motion.div>
                            </motion.div>
                            <div className="grid-about">
                                <motion.div
                                    variants={scaleCard}>
                                    <div className="wrap-about">
                                        <motion.div animate={{
                                            boxShadow: [
                                                '0px 10px 20px 0px #2F65FF, 4px 3px 24px 6px #A56CFF, -11px 8px 20px 0px #213C85',
                                                '0px 10px 20px 0px #5D2EFF, 4px 3px 24px 6px #2F65FF, -11px 8px 20px 0px #C16AAF',
                                                '0px 10px 20px 0px #60CAFC, 4px 3px 24px 6px #A56CFF, -11px 8px 20px 0px #C16AAF',

                                            ],
                                        }}
                                            transition={{
                                                ease: "linear",
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                            className="about-shadow" />
                                        <motion.div
                                            initial="initial"
                                            whileHover="whileHover"
                                            whileTap="whileTap"
                                            variants={cardTap}
                                            className="card-me">
                                            <motion.div
                                                className='flex items-center justify-between'
                                            >
                                                <div
                                                    className="flex items-center gap-2"
                                                >
                                                    <img src="/hi.png" className="user-none pe-none" width={50} height={50} alt="Hi !" />
                                                    <motion.span
                                                    >Hi there !
                                                    </motion.span>
                                                </div>
                                                <div className="bg-white bg-opacity-20 p-1 rounded-full arrow-card">
                                                    <DialogCardArrowIcon />
                                                </div>
                                            </motion.div>
                                            <div className='pt-3 pb-1'>
                                                <motion.h2
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
                                    </div>
                                </motion.div>
                                <Link href="/works">
                                    <motion.div
                                        variants={scaleCard}>
                                        <motion.div
                                            initial="initial"
                                            whileHover="whileHover"
                                            whileTap="whileTap"
                                            variants={cardTap}
                                            className="card-me">
                                            <motion.div
                                                className='flex items-center justify-between'
                                            >
                                                <div
                                                    className="flex items-center gap-2"
                                                >
                                                    <span className="text-xl">💼</span>
                                                    <motion.span
                                                        className="font-medium text-lg "
                                                    >Works
                                                    </motion.span>
                                                </div>
                                                <div className="bg-white bg-opacity-20 p-1 rounded-full arrow-card">
                                                    <DialogCardArrowIcon />
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                initial={{
                                                    y: 50,
                                                    scale: 1,
                                                    opacity: 0,
                                                    transformOrigin: 'bottom',
                                                }}
                                                whileInView={{
                                                    y: 0,
                                                    opacity: 1,
                                                }}
                                                whileHover={{ scale: .95, transition: { duration: .4, type: "ease", } }}
                                                transition={{
                                                    duration: .4,
                                                    delay: .3,
                                                    type: "easeIn",
                                                }}
                                                className="relative h-[120px] md:h-[215px]">
                                                <img className="absolute bottom-[-18px] right-[-20px] scale-[1.2] drop-shadow-[2px_20px_5px_rgba(0,0,0,0.50)]" src="cover-project-min.png" alt="cover-project" />
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="relative h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] 2xl:h-screen z-0"
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
                    <div className="p-element group-building">
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
                    <motion.div className="p-element old-main right-0 bottom-[20%] sm:bottom-[18%] md:bottom-[20%] lg:bottom-[22%] xl:bottom-[28%] min-[1800px]:bottom-[33%]  scale-[.5] md:scale-100">
                        <motion.img
                            variants={oldMan}
                            src="/element/old-man.png"
                        />
                    </motion.div>
                    <motion.div
                        variants={speechText}
                        className="p-element speech-bubble right-[9%] min-[1800px]:right-[6%] bottom-[50%] sm:bottom-[46%] lg:bottom-[46%] xl:bottom-[52%]"
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
            </motion.div>
        </React.Fragment>
    );
};