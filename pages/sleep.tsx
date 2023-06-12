import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useWindowSize from "@/components/hook/use-window-size";

export default function SleepWindow() {

    const { windowSize, isMobile, isTablet, isDesktop } = useWindowSize();

    let initialScale = 1.8;
    let targetScale = 1.4;
    let transformOrigin = "";

    if (windowSize && windowSize.width) {
        if (isMobile) {
            initialScale = 4.4;
            targetScale = 4;
        }
        if (isTablet) {
            initialScale = 2.4;
            targetScale = 2;

        } else if (isDesktop && windowSize.width <= 1200) {
            initialScale = 1.8;
            targetScale = 1.4;
        }
    }
    return (
        <React.Fragment>
            <div className="sleep-window overflow-hidden m-h-screen relative z-10 ">
                <motion.video
                    className="relative z-0 w-screen h-screen"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/sleep.mp4"
                    initial={{ scale: initialScale, transformOrigin: '50% 50%' }}
                    animate={{
                        scale: targetScale,
                        transition: {
                            duration: 10,
                            ease: [0, 0.71, 0.2, 1.01],
                        }
                    }}
                >
                </motion.video>
            </div>
            <motion.div
                transition={{ staggerChildren: .5, delayChildren: 0.7, }}
                className="absolute top-0 left-0 flex flex-col gap-4 items-center justify-center overflow-hidden h-screen w-screen z-10"
            >
                <motion.div
                    className="w-[120px] h-[120px] rounded-full bg-profile overflow-hidden flex justify-center items-center pointer-events-none select-none"
                    initial={{ scale: 0, y: 60, transformOrigin: 'bottom' }}
                    animate={{
                        y: 0,
                        scale: 1,
                        transition: {
                            duration: 1.5,
                            delay: .2,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                    }}
                >
                    <motion.img
                        initial={{ scale: 0, y: 60, transformOrigin: 'bottom' }}
                        animate={{
                            y: 0,
                            scale: 1,
                            transition: {
                                duration: 1.5,
                                delay: .4,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 12,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }
                        }}
                        src="/profile-min.png"
                        className="relative mt-2"
                        alt="earthflex"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -60, }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: .2,
                            duration: .5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }

                    }}
                    className="text-shadow"
                >
                    Earthflex
                </motion.div>
                <Link href="/" >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        initial={{ opacity: 0, y: -100, }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: .6,
                                duration: .8,
                                ease: [0, 0.71, 0.2, 1.01],
                            }
                        }}
                        className="btn-sleep mt-1"
                    >
                        <svg className="rotate-45" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 7H17V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </motion.div>
                </Link>
            </motion.div>
        </React.Fragment>
    );
}