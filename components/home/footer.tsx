import { oldMan, speechText } from "@/lib/motions";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {

    return (
        <React.Fragment>
            <motion.div>
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
                    <motion.div className="p-element old-main right-0 bottom-[20%] sm:bottom-[18%] md:bottom-[20%] lg:bottom-[22%] xl:bottom-[36%] min-[1800px]:bottom-[33%]  scale-[.5] md:scale-100">
                        <motion.img
                            variants={oldMan}
                            src="/element/old-man.png"
                        />
                    </motion.div>
                    <motion.div
                        variants={speechText}
                        className="p-element speech-bubble right-[9%] min-[1800px]:right-[6%] bottom-[50%] sm:bottom-[46%] lg:bottom-[46%] xl:bottom-[65%] min-[1800px]:bottom-[55%]"
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