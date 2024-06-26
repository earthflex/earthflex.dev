import React from "react";
import { motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CardArrowIcon, FacebookIcon, GhostIcon, InstargramIcon, LineIcon } from "./Icons";
import { ButtonScale } from "@/lib/constants";
import Link from "next/link";

export default function TallkMenu() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.1,
                    }}>
                    <motion.div
                        variants={ButtonScale("up")}
                        initial="initial"
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="relative">
                        <button className="talk overflow-hidden"
                        >
                            <span>
                                Let`s talk
                            </span>
                            <CardArrowIcon />
                        </button>
                        <motion.div
                            className="bg-talk"
                            animate={{
                                background: [
                                    "linear-gradient(20deg, #C16AAF 0%, #6A4E9D 40.89%, #213C85 80.6%, #000000 189%)",
                                    "linear-gradient(45deg, #C16AAF 0%, #6A4E9D 40.89%, #213C85 80.6%, #000000 189%)",
                                    "linear-gradient(90deg, #C16AAF 0%, #6A4E9D 40.89%, #213C85 80.6%, #000000 189%)",
                                    "linear-gradient(45deg, #C16AAF 0%, #6A4E9D 40.89%, #213C85 80.6%, #000000 189%)",
                                    "linear-gradient(20deg, #C16AAF 0%, #6A4E9D 40.89%, #213C85 80.6%, #000000 189%)",
                                ]
                            }}
                            transition={{
                                ease: "linear",
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>
                </motion.div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent " sideOffset={5}>
                    <div className="hover-card" style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <div>
                                <div className="avatar"><img src="/dogdev.png" className="pe-none" alt="instagram" /></div>
                                <p className="text-center">👋 Hello !, Sawasdee krub 🙏</p>
                            </div>
                        </div>
                    </div>
                    <DropdownMenu.Separator className="DropdownMenuSeparator" />
                    {/* <DropdownMenu.Item
                        className="DropdownMenuItem"
                    >
                        <FacebookIcon /><Link target="_blank" href="https://www.facebook.com/apiwat.anekboon" className="list-talk">FB: Apiwat Anekboon</Link >
                    </DropdownMenu.Item> */}
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
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}