// import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import localFont from '@next/font/local'
import Meta from "./meta";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";


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
                className="ef-header"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
            >
                <div className="container">
                    <Link href="/" >
                        <motion.div className="ef-logo"
                            initial={{ scale: 1.3 }}
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 1.3 }}>
                            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1.1 }}
                                className="ef-memoji">
                                <video autoPlay muted loop>
                                    <source src="/memoji.webm" type="video/webm" />
                                </video>
                            </motion.div >
                            <motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, fontSize: '40px' }} data-hover="I'M">I'M
                                <br />
                                <span>EARTH</span>
                            </motion.h1>
                        </motion.div >
                    </Link>
                </div>
            </motion.header>

            <main>
                {children}
            </main>

        </>
    );
}
