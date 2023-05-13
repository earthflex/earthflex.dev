import { cardTap, cardTapProfilio } from "@/lib/constants";
import { scaleCard } from "@/lib/motions";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { DialogCardArrowIcon } from "./Icons";

export default function CardItem() {
    return (
        <React.Fragment>
            <Link href="#">
                <motion.div
                    variants={scaleCard}>
                    <motion.div
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap"
                        variants={cardTapProfilio}
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
                                >Project
                                </motion.span>
                            </div>
                            <div className="bg-white bg-opacity-20 p-1 rounded-full arrow-card">
                                <DialogCardArrowIcon />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Link>
        </React.Fragment>
    );
};
