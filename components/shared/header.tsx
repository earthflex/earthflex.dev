import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import Logo from "./logo";
import TallkMenu from "./talk-menu";
import { headerHover } from "@/lib/constants";

export default function Header() {

    const [isScrolled, setIsScrolled] = React.useState(false);
    const controls = useAnimation();
    const headerBgControls = useAnimation();

    React.useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 60) {
                setIsScrolled(true);
                controls.start({ y: '16%' });
                headerBgControls.start({
                    scale: 0.96,
                    borderRadius: "50px 50px",
                    backgroundColor: "#040404",
                    border: "1px solid #404043",
                    boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.05), 0 10px 16px -3px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(11px)",
                    padding: "0 0.6rem",
                    width: 'min(500px, 100%)',
                    height: "80px",
                    transition: {
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 12,
                            stiffness: 100,
                            restDelta: 0.001,
                        }
                    }
                });
            } else {
                setIsScrolled(false);
                controls.start({ y: '4%' });
                headerBgControls.start({
                    scale: 1,
                    borderRadius: "50px 50px",
                    backgroundColor: "initial",
                    border: "initial",
                    boxShadow: "initial",
                    backdropFilter: "initial",
                    padding: "0 1rem 0 .8rem",
                    width: 'initial',
                    height: "100px",
                    transition: {
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 12,
                            stiffness: 100,
                            restDelta: 0.001,
                        }
                    }

                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <motion.header
                className={`ef-header ${isScrolled ? "header--fixed" : ""} `}
            >
                <motion.div
                    variants={headerHover}
                    initial="initial"
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <div className="line-grow"></div>
                    <motion.div
                        className={`header-flex ${isScrolled ? 'header--bg' : ''}`}
                        animate={headerBgControls}
                        transition={{
                            type: "spring",
                            bounce: 0.4,
                            duration: 0.8
                        }}
                    >
                        <Logo />
                        <div className="menu-right">
                            <TallkMenu />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.header>
        </React.Fragment>
    );
}
