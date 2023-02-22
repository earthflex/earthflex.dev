import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen() {

    // const loadingtext = "LOADING..."

    // const sentence = {
    //     hidden: { opacity: 1, scale: .5 },
    //     visible: {
    //         scale: 1,
    //         opacity: 1,
    //         transition: {
    //             deley: .5,
    //             staggerChildren: 0.08,
    //         },
    //     }
    // }

    // const letter = {
    //     hidden: { opacity: 0, y: 50, scale: .5 },
    //     visible: {
    //         opacity: 1,
    //         scale: 1,
    //         y: 0
    //     }
    // }

    const missileLoader = {
        initial: {
            y: 800,
            scale: .8,
            rotate: 180,
        },
        animate: {
            y: -800,
            scale: .5,
            transition: {
                delay: 1.4,
                duration: 2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }
        }
    }

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 1 });

        return animation.stop;
    }, []);

    return (
        <div className="loader-page">
            <motion.div
                variants={missileLoader}
                initial="initial"
                animate="animate"
                className="p-element missile-loader"
            >
                <motion.img
                    src="/element/missile-min.png" />
            </motion.div>
            <div className="ef-memoji">
                <video autoPlay muted loop playsInline>
                    <source src="/memoji.mp4" type="video/mp4" />
                    <source src="/memoji.webm" type="video/webm" />
                </video>
            </div>
            <div className="d-flex loader-text">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: -10, opacity: 1 }}
                >
                    {/* <motion.h1
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                        >
                            {loadingtext.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                        </motion.h1> */}
                    <motion.h1 className="loader-percecnt">{rounded}</motion.h1>
                </motion.div>
            </div>
        </div>
    );
}