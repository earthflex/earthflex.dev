import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import * as Dialog from '@radix-ui/react-dialog';
import Dockitem from "./dock-item";
import ResumeDialog from '@/components/resume';

export default function Dock() {

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
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Dockitem title="Resume" classicon="bg-resume" icon="/resume.svg" />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="dialog-overlay" />
                            <ResumeDialog />
                        </Dialog.Portal>
                    </Dialog.Root>

                    <Link href="/project">
                        <Dockitem title="Project" classicon="bg-project" icon="/project.svg" />
                    </Link>

                    <Link href="https://github.com/earthflex/" target="_blank">
                        <Dockitem title="Github" classicon="bg-github" icon="/github.svg" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/apiwat-anekboon/" target="_blank">
                        <Dockitem title="Linkedin" classicon="bg-linkedin" icon="/linkedin.svg" />
                    </Link>
                    <Link href="https://twitter.com/earthflexible" target="_blank">
                        <Dockitem title="Twitter" classicon="bg-twitter" icon="/twitter.svg" />
                    </Link>
                    <Link href="/" className="trash-app">
                        <Dockitem title="Trash" classicon="bg-trash" icon="/trashfull.png" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
