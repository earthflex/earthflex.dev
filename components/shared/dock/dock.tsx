import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import Dockitem from "./dock-item";

export default function Dock({
    onClick,
}: {
    onClick: () => void;
}) {

    return (
        <motion.div className="dock-fixed"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
                delay: 0.3,
                default: { ease: "linear" }
            }}
        >
            <div className="dock">
                <div className="app-icons"
                >
                    <div onClick={onClick}>
                        <Dockitem title="Resume" classicon="bg-resume" icon="/resume.svg" />
                    </div>
                    <Link href="/works">
                        <Dockitem title="Works" classicon="bg-project" icon="/project.svg" />
                    </Link>
                    <Link href="https://github.com/earthflex/" target="_blank">
                        <Dockitem title="Github" classicon="bg-github" icon="/github.svg" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/apiwat-anekboon/" target="_blank">
                        <Dockitem title="Linkedin" classicon="bg-linkedin" icon="/linkedin.svg" />
                    </Link>
                    {/* <Link href="https://twitter.com/earthflexible" target="_blank">
                        <Dockitem title="Twitter" classicon="bg-twitter" icon="/twitter.svg" />
                    </Link> */}
                    <Link href="/" className="trash-app">
                        <Dockitem title="Trash" classicon="bg-trash" icon="/trashfull.png" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
