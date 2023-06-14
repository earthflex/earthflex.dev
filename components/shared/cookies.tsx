import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { ButtonScale } from "@/lib/constants";
import useWindowSize from "../hook/use-window-size";

export default function Cookies() {

    const { isMobile } = useWindowSize();
    const [cookiesAccepted, setCookiesAccepted] = React.useState(
        localStorage.getItem("cookiesAccepted") === "true" || false
    );
    const [notNowAccepted, setNotNowAccepted] = React.useState(
        sessionStorage.getItem("notNowAccepted") === "true" || false
    );

    React.useEffect(() => {
        const storedAcceptance = localStorage.getItem("cookiesAccepted");
        const expirationDate = localStorage.getItem("cookiesAcceptedExpiration");

        if (storedAcceptance === "true" && expirationDate) {
            const expirationTime = new Date(expirationDate);

            if (expirationTime > new Date()) {
                setCookiesAccepted(true);
            } else {
                localStorage.removeItem("cookiesAccepted");
                localStorage.removeItem("cookiesAcceptedExpiration");
            }
        }
    }, []);


    const handleAcceptCookies = () => {
        setCookiesAccepted(true);

        const expirationDate = new Date();
        // expirationDate.setSeconds(expirationDate.getSeconds() + 30); // เพิ่มเวลา 30 วินาทีจากเวลาปัจจุบัน
        // expirationDate.setHours(expirationDate.getHours() + 1); // เพิ่มเวลา 1 ชั่วโมงจากเวลาปัจจุบัน
        expirationDate.setDate(expirationDate.getDate() + 7); // เพิ่มเวลา 7 วันจากเวลาปัจจุบัน

        localStorage.setItem("cookiesAccepted", "true");
        localStorage.setItem("cookiesAcceptedExpiration", expirationDate.toString());

        setTimeout(() => {
            localStorage.removeItem("cookiesAccepted");
            localStorage.removeItem("cookiesAcceptedExpiration");
        }, 7 * 24 * 60 * 60 * 1000);
        // หลังจาก 30 วินาที จะลบข้อมูลออกจาก sessionStorage
        // 7: แทนจำนวนวันที่ต้องการ
        // 24: แทนจำนวนชั่วโมงในหนึ่งวัน
        // 60: แทนจำนวนนาทีในหนึ่งชั่วโมง
        // 60: แทนจำนวนวินาทีในหนึ่งนาที
        // 1000: แทนจำนวนมิลลิวินาทีในหนึ่งวินาที
    };

    const handleNotNow = () => {
        setNotNowAccepted(true);
        sessionStorage.setItem("notNowAccepted", "true");
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {!cookiesAccepted && !notNowAccepted && (
                    <div className="fixed w-full sm:w-auto left-0 sm:left-[3%] bottom-0 sm:bottom-[5%] z-[101]">
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
                                y: "110%",
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
                            className="card-cookies gap-4 sm:gap-3 pt-8 pb-8 sm:py-3 px-8 sm:px-6 flex-col sm:flex-row rounded-t-3xl sm:rounded-b-3xl"
                        >
                            <div className="text-xl font-bold sm:font-normal">
                                The sloth would like cookies.
                            </div>
                            <motion.button
                                onClick={handleAcceptCookies}
                                variants={ButtonScale("down")}
                                initial="initial"
                                whileHover="whileHover"
                                whileTap="whileTap"
                                className="accept w-full sm:w-auto text-center"
                            >
                                Accept
                            </motion.button>
                            <button
                                onClick={handleNotNow}
                                className="underline w-full sm:w-auto text-center"
                            >
                                Not Now
                            </button>
                        </motion.div>
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
                        />
                    </div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};