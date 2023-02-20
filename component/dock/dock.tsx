import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import * as Dialog from '@radix-ui/react-dialog';
import Tooltip from "./dock-item";
import ResumeDialog from "../resume/resume";

export default function Dock() {

    const [container, setContainer] = React.useState(null);
    return (
        <motion.div className="dock-absolute"
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
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Tooltip title="Resume" classicon="bg-resume" icon="/resume.svg" />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="DialogOverlay" />
                            <ResumeDialog />
                        </Dialog.Portal>
                    </Dialog.Root>

                    <Link href="https://github.com/earthflex/" target="_blank">
                        <Tooltip title="Github" classicon="bg-github" icon="/github.svg" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/apiwat-anekboon/" target="_blank">
                        <Tooltip title="Linkedin" classicon="bg-linkedin" icon="/linkedin.svg" />
                    </Link>
                    {/* <Link href="/">
                        <Tooltip title="Twitter" classicon="bg-twitter" icon="/twitter.svg" />
                    </Link> */}
                    <Link href="/" className="trash-app">
                        <Tooltip title="Trash" classicon="bg-trash" icon="/trashfull.png" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
