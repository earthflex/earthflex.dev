import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { ButtonScale } from "@/lib/constants";
import useWindowSize from "../hook/use-window-size";
import { useCookiesAccepted } from "../hook/use-cookie";

type Duration = "30seconds" | "30minutes" | "1hour" | "1day" | "7days";

export default function Cookies() {

    const { isMobile } = useWindowSize();

    const { cookiesAccepted, setCookiesAccepted, notNowAccepted, setNotNowAccepted } = useCookiesAccepted();

    const handleAcceptCookies = (duration: Duration = "30seconds") => {
        let durationInMilliseconds: number;

        switch (duration) {
            case "30seconds":
                durationInMilliseconds = 30 * 1000; // 30 seconds
                break;
            case "30minutes":
                durationInMilliseconds = 30 * 60 * 1000;  // 30 minutes
                break;
            case "1hour":
                durationInMilliseconds = 60 * 60 * 1000; // 1 hour
                break;
            case "1day":
                durationInMilliseconds = 24 * 60 * 60 * 1000; // 1 day
                break;
            case "7days":
                durationInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days
                break;
        }

        const expirationTime = new Date().getTime() + durationInMilliseconds;

        setCookiesAccepted(true);
        localStorage.setItem("cookiesAccepted", "true");
        localStorage.setItem("cookiesAcceptedExpiration", expirationTime.toString());
    };

    const handleNotNow = () => {
        setNotNowAccepted(true);
        sessionStorage.setItem("notNowAccepted", "true");
    };

    const [shakeAnimation, setShakeAnimation] = React.useState(false);
    const handleOverlayClick = () => {
        setShakeAnimation(true);
        setTimeout(() => {
            setShakeAnimation(false);
        }, 1000);
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {!cookiesAccepted && !notNowAccepted && (
                    <div className="fixed w-full sm:w-auto left-0 sm:left-[3%] bottom-0 sm:bottom-[5%] z-[101]">
                        <div className={shakeAnimation ? "shake" : ""} onClick={handleOverlayClick}>
                           <div className="max-w-[160px]">
                                <motion.img
                                    className="sloth-cookies aura w-full"
                                    initial={{ y: 30, opacity: 0, scale: 0, transformOrigin: 'bottom' }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    exit={{
                                        y: "200%",
                                        opacity: 0,
                                        scale: 0,
                                        transition: {
                                            delay: 0,
                                            duration: .6,
                                        }
                                    }}
                                    transition={{
                                        delay: 1.8,
                                        duration: 1,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        scale: {
                                            type: "scale",
                                            damping: 12,
                                            stiffness: 100,
                                            restDelta: 0.001,
                                        }
                                    }}
                                    alt="sloth-cookie"
                                    src="/sloth-cookie.webp"
                                />
                           </div>
                            <motion.div
                                initial={{
                                    y: 100,
                                    scale: 0
                                }}
                                animate={{
                                    y: 0,
                                    scale: 1
                                }}
                                exit={{
                                    y: "150%",
                                    scale: 1,
                                    transition: {
                                        delay: .1,
                                        duration: .6,
                                    }
                                }}
                                transition={{
                                    delay: 1.4,
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 12,
                                        stiffness: 100,
                                        restDelta: 0.001,
                                    }
                                }}
                                style={{
                                    transformOrigin: isMobile ? "center bottom" : "left bottom"
                                }}
                                className="card-cookies w-full flex items-center justify-start gap-2 sm:gap-1 pt-8 pb-4 sm:py-3 px-8 sm:px-4 flex-col sm:flex-row rounded-t-3xl sm:rounded-b-3xl"
                            >
                                <div className="w-full mb-3 sm:mb-0">
                                    <div className="text-xl font-bold sm:font-normal sm:mr-4">
                                        The sloth would like cookies.
                                    </div>
                                    <div className="text-gray-500 text-sm font-light">
                                        This is a fake cookie 🍪
                                    </div>
                                </div>

                                <motion.button
                                    onClick={() => handleAcceptCookies("7days")}
                                    variants={ButtonScale(isMobile ? "up" : "down")}
                                    initial="initial"
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    className="accept whitespace-nowrap rounded-2xl w-full sm:w-auto text-center"
                                >
                                    Accept
                                </motion.button>
                                <motion.button
                                    onClick={handleNotNow}
                                    variants={ButtonScale(isMobile ? "up" : "down")}
                                    initial="initial"
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    className="rounded-2xl whitespace-nowrap hover:bg-slate-200 underline p-4  w-full sm:w-auto text-center"
                                >
                                    Not Now
                                </motion.button>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    delay: .3,
                                    duration: .3,
                                    scale: {
                                        type: "scale",
                                        damping: 12,
                                        stiffness: 100,
                                        restDelta: 0.001,
                                    }
                                }
                            }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "scale",
                                    damping: 12,
                                    stiffness: 100,
                                    restDelta: 0.001,
                                }
                            }}
                            className="overlay-cookie"
                            onClick={handleOverlayClick}
                        />
                    </div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};