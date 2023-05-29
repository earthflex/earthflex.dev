import { cardTapProfilio } from "@/lib/constants";
import { scaleCard } from "@/lib/motions";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { CardArrowIcon } from "./Icons";
import imageUrlBuilder from '@sanity/image-url'
import client from "@/client";

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}

export default function CardItem({
    col,
    type,
    theme,
    color,
    src,
    alt,
    chip,
}: {
    col: string;
    type: string;
    theme: string;
    color: string;
    src?: string;
    alt: string;
    chip: string;
}) {
    const [isHovered, setHovered] = React.useState(false);

    const handleHoverStart = () => {
        setHovered(true);
    };
    const handleHoverEnd = () => {
        setHovered(false);
    };

    if (!src) {
        return null; 
    }

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
                        className="card-me soon !border-none !p-0 relative group">
                        {type === 'img' && (
                            <img
                                src={urlFor(src).url()}
                                alt={alt}
                                width={376}
                                height={424}
                                className="w-full h-full object-cover" />
                        )}
                        <div className="absolute rounded-[20px] inset-0 bg-card overflow-hidden opacity-40 hover:opacity-70 ease-out duration-300"></div>
                        <motion.div
                            className="absolute bottom-3 w-full flex items-center justify-between px-4"
                        >
                            <div className="flex gap-1">
                                <motion.div
                                    style={{ backgroundColor: theme, }}
                                    animate={{
                                        boxShadow: isHovered
                                            ? ["0px 0px 0px 0px rgba(0,0,0,0)", `-5px 0px 20px 5px ${theme}`, `-20px 0 100px 16px ${theme}`]
                                            : "0px 0px 0px rgba(0,0,0,0)",
                                    }}
                                    transition={{
                                        duration: .3,
                                    }}
                                    className="p-1 px-3 rounded-full ease-out duration-300">
                                    <small style={{ color: color }}>{chip}</small>
                                </motion.div>
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
