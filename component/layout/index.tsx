// import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Meta from "./meta";
import { ButtonScale, FadeIn } from "@/lib/constants";
import Dock from "../dock/dock";
import * as HoverCard from '@radix-ui/react-hover-card';
import { DialogCardArrowIcon, HoverCardArrowIcon } from "../Icons";
import Image from "next/image";


export default function Layout({
    meta,
    children,
}: {
    meta?: {
        title?: string;
        description?: string;
        image?: string;
    };
    children: ReactNode;
}) {
    // const scrolled = useScroll(50);
    return (
        <>
            <Meta {...meta} />

            <motion.header
                className="ef-header">
                <div className="container-fluid">
                    <div className="header-flex">
                        <Link href="/" >
                            <motion.div className="ef-logo"
                                variants={ButtonScale}
                                initial="initial"
                                whileHover="whileHover"
                                whileTap="whileTap"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.1,
                                    }}
                                    className="ef-memoji">
                                    <video autoPlay muted loop playsInline>
                                        <source src="/memoji.mp4" type="video/mp4" />
                                        <source src="/memoji.webm" type="video/webm" />
                                    </video>
                                    <img className="memoji-hover" src="/memoji-hover.png" />
                                </motion.div >
                                <h1
                                    data-hover="I'M">
                                    <motion.span
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            default: {
                                                duration: 1,
                                                ease: [0, 0.71, 0.2, 1.01]
                                            },
                                            scale: {
                                                type: "spring",
                                                damping: 5,
                                                stiffness: 100,
                                                restDelta: 0.001
                                            }
                                        }}
                                    >
                                        I'M
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            default: {
                                                duration: 1,
                                                ease: [0, 0.71, 0.2, 1.01]
                                            },
                                            scale: {
                                                type: "spring",
                                                damping: 5,
                                                stiffness: 100,
                                                restDelta: 0.001
                                            }
                                        }}>
                                        EARTH
                                    </motion.span>
                                </h1>
                            </motion.div >
                        </Link>
                        <div className="menu-right">
                            <HoverCard.Root openDelay={0} closeDelay={0}>
                                <HoverCard.Trigger asChild>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                            <Link href="https://line.me/ti/p/ge0-5qPNP4" target="_blank">
                                                <motion.button className="talk"
                                                    variants={ButtonScale}
                                                    initial="initial"
                                                    whileHover="whileHover"
                                                    whileTap="whileTap"
                                                >
                                                    <span>
                                                        Let`s talk
                                                    </span>
                                                    <DialogCardArrowIcon />
                                                </motion.button>
                                            </Link >
                                    </motion.div>
                                </HoverCard.Trigger>
                                <HoverCard.Portal>
                                    <HoverCard.Content className="hover-card" sideOffset={5}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                                                <div>
                                                    <div className="avatar"><img src="/dogdev.png" className="pe-none" alt="instagram" /></div>
                                                    <p>👋 Hello !, Sawandee krub 🙏</p>
                                                    <p>I'm Earth</p>
                                                    <p>FB: <Link target="_blank" href="https://www.facebook.com/apiwat.anekboon" className="text-grey text-italic" >Apiwat Anekboon</Link ></p>
                                                    <p>IG: <Link target="_blank" href="https://www.instagram.com/earthflex.xd/" className="text-grey text-italic" >@dogdev.xd</Link ></p>
                                                </div>
                                                <p>
                                                    I will haunt your dreams.
                                                </p>
                                            </div>
                                        </div>
                                        <HoverCard.Arrow asChild={true} className="hovercard-arrow" width={30} height={15} >
                                            <HoverCardArrowIcon />
                                        </HoverCard.Arrow>
                                    </HoverCard.Content>
                                </HoverCard.Portal>
                            </HoverCard.Root>
                        </div>
                    </div >
                </div>
            </motion.header>
            <Dock />

            <main>
                {children}
            </main>

        </>
    );
}
