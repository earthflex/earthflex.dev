import React from "react";
import { motion } from 'framer-motion'
import { ButtonScale } from "@/lib/constants";

export default function Cookies() {

    const [cookiesAccepted, setCookiesAccepted] = React.useState(false);

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
        // expirationDate.setSeconds(expirationDate.getSeconds() + 30); // เพิ่มเวลา 30 วินาทีจากเวลาปัจจุบัน
        // expirationDate.setHours(expirationDate.getHours() + 1); // เพิ่มเวลา 1 ชั่วโมงจากเวลาปัจจุบัน
        expirationDate.setDate(expirationDate.getDate() + 7); // เพิ่มเวลา 7 วันจากเวลาปัจจุบัน


        sessionStorage.setItem("cookiesAccepted", "true");
        sessionStorage.setItem("cookiesAcceptedExpiration", expirationDate.toString());

        setTimeout(() => {
            sessionStorage.removeItem("cookiesAccepted");
            sessionStorage.removeItem("cookiesAcceptedExpiration");
        }, 7 * 24 * 60 * 60 * 1000); 
        // หลังจาก 30 วินาที จะลบข้อมูลออกจาก sessionStorage
        // 7: แทนจำนวนวันที่ต้องการ
        // 24: แทนจำนวนชั่วโมงในหนึ่งวัน
        // 60: แทนจำนวนนาทีในหนึ่งชั่วโมง
        // 60: แทนจำนวนวินาทีในหนึ่งนาที
        // 1000: แทนจำนวนมิลลิวินาทีในหนึ่งวินาที
    };

    return (
        <React.Fragment>
            {!cookiesAccepted && (
                <div
                    className="wrapper-cookies">
                    <motion.img
                        className="sloth-cookies aura"
                        initial={{ y: 30, opacity: 0, scale: 0, transformOrigin: 'bottom' }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            delay: 2.5,
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
                        initial={{ y: 100, scale: 0 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{
                            delay: 2,
                            duration: 1,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100,
                                restDelta: 0.001,
                            }
                        }}
                        className="speech-cookies"

                    >
                        <p>
                            {/* The sloth would like to collect cookies from you. */}
                            The sloth would like cookies.
                        </p>
                        <motion.button
                            onClick={handleAcceptCookies}
                            variants={ButtonScale("down")}
                            initial="initial"
                            whileHover="whileHover"
                            whileTap="whileTap"
                        >Accept
                        </motion.button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                        className="overlay-cookie" />
                </div>
            )}
        </React.Fragment>
    );
};