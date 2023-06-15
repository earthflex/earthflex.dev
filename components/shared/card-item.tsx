import { cardTapProfilio } from "@/lib/constants";
import { arrowCardItem, imgCardItem, scaleCardItem } from "@/lib/motions";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { CardArrowIcon } from "./Icons";
import CursorFollower from "@/components/shared/cursor";
import imageUrlBuilder from '@sanity/image-url'
import client from "@/client";
import useWindowSize from "../hook/use-window-size";

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}

export default function CardItem({
    col,
    name,
    type,
    theme,
    color,
    src,
    alt,
    chip,
}: {
    col: string;
    name: string;
    type: string;
    theme: string;
    color: string;
    src?: string;
    alt: string;
    chip: string;
}) {

    const { isMobile, isTablet, isDesktop } = useWindowSize();

    const [isHovered, setHovered] = React.useState(false);

    const handleHoverStart = () => {
        setHovered(true);
    };
    const handleHoverEnd = () => {
        setHovered(false);
    };

    const [showCursor, setShowCursor] = React.useState(false);

    if (!src) {
        return null;
    }

    return (
        <React.Fragment>
            <div className={col}>
                <CursorFollower detail={name} imgSrc="/ballon-hand.webp" show={showCursor} />
                <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <div
                        onMouseEnter={() => setShowCursor(true)}
                        onMouseLeave={() => setShowCursor(false)}>
                        <motion.div
                            variants={scaleCardItem}
                        >
                            <motion.div
                                initial="initial"
                                whileHover="whileHover"
                                whileTap="whileTap"
                                onHoverStart={handleHoverStart}
                                onHoverEnd={handleHoverEnd}
                                variants={cardTapProfilio}
                                className="card-me min-h-full soon !border-none !p-0 relative group">
                                {type === 'img' && (
                                    <motion.div
                                        className="overflow-hidden"
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{
                                            staggerChildren: 0.4,
                                        }}
                                    >
                                        <motion.img
                                            src={urlFor(src).url()}
                                            alt={alt}
                                            width={376}
                                            height={424}
                                            className="w-full h-full object-cover"
                                            variants={isDesktop ? imgCardItem : undefined}
                                        />
                                    </motion.div>
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
                                    <motion.div
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ staggerChildren: 0.5 }}
                                    >
                                        <motion.div
                                            variants={arrowCardItem}
                                        >
                                            <motion.div
                                                className="bg-black p-1 rounded-full arrow-card"
                                            >
                                                <CardArrowIcon />
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </React.Fragment >
    );
};
