import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { headerFixed } from "@/lib/motions";
import Logo from "./logo";
import TallkMenu from "./talk-menu";

export default function Header() {

    const [isScrolled, setIsScrolled] = React.useState(false);
    const controls = useAnimation();

    // React.useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 50);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    let lastScrollTop = 0;

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsScrolled(true);
                controls.start({ y: "0%" });
            } else {
                // Scrolling up
                setIsScrolled(false);
                if (!isScrolled && lastScrollTop > 100) {
                    controls.start({ y: "-100%" }); // Slide up to hide
                } else {
                    controls.start({ y: "0%" }); // Slide down to show
                }
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <motion.div viewport={{ once: true }}>
                <motion.header
                    className={`ef-header ${isScrolled ? "header--fixed" : ""} `}
                    variants={headerFixed}
                    animate={controls}
                    transition={{ duration: 0.25 }}
                >
                    <div
                        className={`header-flex ${isScrolled ? 'header--bg' : ''}`}
                    >
                        <Logo />
                        <div className="menu-right">
                            <TallkMenu />
                        </div>
                    </div>
                </motion.header>
            </motion.div>
        </React.Fragment>
    );
}
