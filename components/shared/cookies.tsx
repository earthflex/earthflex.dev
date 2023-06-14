import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { ButtonScale } from "@/lib/constants";
import useWindowSize from "../hook/use-window-size";

export default function Cookies() {

    const { isMobile } = useWindowSize();

    const [cookiesAccepted, setCookiesAccepted] = React.useState(
        sessionStorage.getItem("cookiesAccepted") === "true" || false
    );
    const [notNowAccepted, setNotNowAccepted] = React.useState(
        sessionStorage.getItem("notNowAccepted") === "true" || false
    );

    React.useEffect(() => {
        const storedAcceptance = sessionStorage.getItem("cookiesAccepted");
        const expirationDate = sessionStorage.getItem("cookiesAcceptedExpiration");

        if (storedAcceptance === "true" && expirationDate) {
            const expirationTime = new Date(expirationDate);

            if (expirationTime > new Date()) {
                setCookiesAccepted(true);
            } else {
                sessionStorage.removeItem("cookiesAccepted");
                sessionStorage.removeItem("cookiesAcceptedExpiration");
            }
        }
    }, []);


    const handleAcceptCookies = () => {
        setCookiesAccepted(true);

        const expirationDate = new Date();
        // expirationDate.setSeconds(expirationDate.getSeconds() + 30); // 30 วินาทีจากเวลาปัจจุบัน
        // expirationDate.setHours(expirationDate.getHours() + 1); //  1 ชั่วโมงจากเวลาปัจจุบัน
        expirationDate.setDate(expirationDate.getDate() + 7); // 7 วันจากเวลาปัจจุบัน

        sessionStorage.setItem("cookiesAccepted", "true");
        sessionStorage.setItem("cookiesAcceptedExpiration", expirationDate.toString());

        setTimeout(() => {
            sessionStorage.removeItem("cookiesAccepted");
            sessionStorage.removeItem("cookiesAcceptedExpiration");
        }, 7 * 24 * 60 * 60 * 1000);
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
                            <motion.img
                                className="sloth-cookies aura"
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
                                src="/sloth-cookie.png"
                            />
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
                                className="card-cookies w-full flex items-center justify-start gap-4 sm:gap-1 pt-8 pb-4 sm:py-3 px-8 sm:px-4 flex-col sm:flex-row rounded-t-3xl sm:rounded-b-3xl"
                            >
                                <div className="w-full">
                                    <div className="text-xl font-bold sm:font-normal sm:mr-4">
                                        The sloth would like cookies.
                                    </div>
                                    <div className="text-gray-500 text-sm font-light">
                                        This is a fake cookie 🍪
                                    </div>
                                </div>

                                <motion.button
                                    onClick={handleAcceptCookies}
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
                            exit={{ opacity: 0 }}
                            transition={{
                                delay: 1.2,
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