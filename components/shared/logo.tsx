import React from "react";
import { motion, AnimationControls } from "framer-motion";
import { ButtonScale } from "@/lib/constants";

export default function Logo() {
    return (
        <motion.div
            className="ef-logo"
            variants={ButtonScale("down")}
            initial="initial"
            whileHover="whileHover"
            whileTap="whileTap"

        >
            <motion.div className="ef-logo"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.1,
                    }}
                    className="ef-memoji pe-none">
                    <img src="/memoji.gif" className="gif" alt="memoji" />
                    {/* <video autoPlay muted loop playsInline>
                            <source src="/memoji.mp4" type="video/mp4" />
                            <source src="/memoji.webm" type="video/webm" />
                        </video> */}
                    <img className="memoji-hover" src="/memoji-hover.png" />
                </motion.div>
                <motion.h1
                    data-hover="I'M"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            default: {
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            },
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        I'M
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            default: {
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            },
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}>
                        EARTH
                    </motion.span>
                </motion.h1>
            </motion.div >
        </motion.div>
    );
}
