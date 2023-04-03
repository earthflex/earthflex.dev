import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonScale } from "@/lib/constants";
import * as HoverCard from '@radix-ui/react-hover-card';
import { DialogCardArrowIcon, FacebookIcon, GhostIcon, HoverCardArrowIcon, InstargramIcon, LineIcon } from "./Icons";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import React from "react";

export default function Header() {
    return (
        <>
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
                                </motion.div>
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
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger asChild>
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
                                </DropdownMenu.Trigger>

                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content className="DropdownMenuContent " sideOffset={5}>
                                        <div className="hover-card" style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                                                <div>
                                                    <div className="avatar"><img src="/dogdev.png" className="pe-none" alt="instagram" /></div>
                                                    <p className="text-center">👋 Hello !, Sawandee krub 🙏</p>
                                                    <p className="text-center">I'm Earth</p>
                                                </div>
                                            </div>
                                        </div>
                                        <DropdownMenu.Separator className="DropdownMenuSeparator" />
                                        <DropdownMenu.Item
                                            className="DropdownMenuItem"
                                        >
                                            <FacebookIcon /><Link target="_blank" href="https://www.facebook.com/apiwat.anekboon" className="list-talk">FB: Apiwat Anekboon</Link >
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item
                                            className="DropdownMenuItem"
                                        >
                                            <InstargramIcon /><Link target="_blank" href="https://www.instagram.com/earthflex.xd/" className="list-talk">IG: @earthflex.xd</Link >
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item
                                            className="DropdownMenuItem"
                                        >
                                            <LineIcon /><Link target="_blank" href="https://line.me/ti/p/ge0-5qPNP4" className="list-talk">Line : earthz1355</Link >
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Separator className="DropdownMenuSeparator" />
                                        <DropdownMenu.Item
                                            className="DropdownMenuItem"
                                        >
                                            <GhostIcon /> <span className="list-talk"> I will haunt your dreams.</span>
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>

                        </div>
                    </div >
                </div>
            </motion.header>
        </>
    );
}
