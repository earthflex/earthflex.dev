import { aircraft, flamingo, oldMan, speechText } from "@/lib/motions";
import { MotionValue, motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from "react";
import useWindowSize from "../hook/use-window-size";

export default function Footer() {


    const { isMobile, isTablet } = useWindowSize();

    const { scrollYProgress } = useScroll();
    const ref = React.useRef<MotionValue<number> | null>(null);

    const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    ref.current = spring;

    const aircraftPosition = useTransform(spring, [0, 1], [0, 300]);

    return (
        <React.Fragment>
            <motion.div>
                <motion.div
                    className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[140vh] 2xl:h-[150vh] z-0"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ staggerChildren: 0.5 }}>

                    <motion.div
                        className="p-element fuji  bottom-[55%] md:bottom-[52%] xl:bottom-[60%] 2xl:bottom-[68%] left-0"
                    >
                        <motion.img
                            className=""
                            src="/element/mount-fuji-min.png"
                        />
                    </motion.div>

                    <motion.div
                        className="p-element cloud bottom-[55%] md:bottom-[52%] xl:bottom-[65%] 2xl:bottom-[65%] right-[20%] w-[40%] "
                    >
                        <motion.img
                            src="/element/cloud-min.png"
                        />
                    </motion.div>
                    <div className="p-element group-building bottom-[56%] md:bottom-[50%] lg:bottom-[52%] xl:bottom-[60%] 2xl:bottom-[77%] right-0">
                        <motion.div
                            className="building-3 w-[60px] lg:w-[auto]"
                        >
                            <motion.img
                                src="/element/statue-liberty-min.png"
                            />
                        </motion.div>
                        <motion.div
                            className="building-1 w-[60px] lg:w-[auto]"
                        >
                            <motion.img
                                src="/element/building-1-min.png"
                            />
                        </motion.div>
                        <motion.div
                            className="building-2 w-[60px] lg:w-[auto]"
                        >
                            <motion.img
                                src="/element/building-2-min.png"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="p-element mount-road w-full bottom-[28%] xl:bottom-[30%] 2xl:bottom-[30%]"
                    >
                        <motion.img
                            src="/element/mount-road-min.png"
                        />
                    </motion.div>

                    <motion.div
                        className="p-element flamingo bottom-[45%] xl:bottom-[60%] 2xl:bottom-[66%] left-0 w-[35%] lg:w-[25%] 2xl:w-[22%]"
                    >
                        <motion.img
                            variants={flamingo({ isMobile, isTablet })}
                            src="/element/flamingo-min.png"
                        />
                    </motion.div>
                    <motion.div
                        className="p-element river-valley"
                    >
                        <motion.img
                            src="/element/river-valley-min.png"
                        />
                    </motion.div>
                    <motion.div className="p-element old-main right-0 bottom-[16%] sm:bottom-[18%] md:bottom-[20%] lg:bottom-[14%] xl:bottom-[20%] min-[1800px]:bottom-[22%]  scale-[.5] md:scale-100">
                        <motion.img
                            variants={oldMan}
                            src="/element/old-man.png"
                        />
                    </motion.div>
                    <motion.div
                        variants={speechText}
                        className="p-element speech-bubble right-[9%] min-[1800px]:right-[6%] bottom-[40%] sm:bottom-[46%] md:bottom-[66%] md:right-[14%] lg:right-[10%] lg:bottom-[34%] xl:bottom-[38%] min-[1800px]:bottom-[36%]"
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