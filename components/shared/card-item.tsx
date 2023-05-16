import { cardTapProfilio } from "@/lib/constants";
import { scaleCard } from "@/lib/motions";
import { motion, useAnimation } from "framer-motion";
import React, { ReactNode } from "react";
import { CardArrowIcon } from "./Icons";
import Image from "next/image";

export default function CardItem({
    col,
    type,
    theme,
    color,
    src,
    alt,
    chip,
}: {
    col: any;
    type: string;
    theme: string;
    color: string;
    src: string;
    alt: any;
    chip: string[] | string;
}) {
    const [isHovered, setHovered] = React.useState(false);
    const controls = useAnimation();

    const handleHoverStart = () => {
        setHovered(true);
        controls.start({
            transition: { duration: 0.3 }
        });
    };
    const handleHoverEnd = () => {
        setHovered(false);
        controls.start({
            boxShadow: "",
            transition: { duration: 0.3 }
        });
    };
    return (
        <React.Fragment>
            <div className={col}>
                <motion.div
                    variants={scaleCard}
                >
                    <motion.div
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap"
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        variants={cardTapProfilio}
                        animate={controls}
                        className="card-me !border-none !p-0 relative group">
                        {type === 'img' && (
                            <Image src={src} alt={alt} width={376} height={424} className="w-full h-full object-cover" />
                        )}
                        <div className="absolute rounded-[20px] inset-0 bg-card overflow-hidden opacity-40 hover:opacity-70 ease-out duration-300"></div>
                        <motion.div
                            className="absolute bottom-3 w-full flex items-center justify-between px-4"
                        >
                            <div className="flex gap-1">
                                {Array.isArray(chip) && chip.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        style={{ backgroundColor: theme, }}
                                        animate={{
                                            boxShadow: isHovered
                                                ? ["0px 0px 0px 0px rgba(0,0,0,0)", `-5px 0px 20px 5px ${theme}`, `-20px 0 60px 15px ${theme}`]
                                                : "0px 0px 0px rgba(0,0,0,0)",

                                        }}
                                        transition={{
                                            duration: .6,
                                        }}
                                        className="p-1 px-3 rounded-full ease-out duration-300">
                                        <small style={{ color: color, }}>{item}</small>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="bg-white bg-opacity-20 p-1 rounded-full arrow-card ">
                                <CardArrowIcon />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </React.Fragment >
    );
};
