import React from "react";
import { motion } from 'framer-motion'

const Cookies: React.FC = () => {

    const [overlayVisible, setOverlayVisible] = React.useState(false);
    const handleMouseEnter = () => {
        setOverlayVisible(true);
    };
    const handleMouseLeave = () => {
        setOverlayVisible(false);
    };


    const [cookiesAccepted, setCookiesAccepted] = React.useState(false);
    // React.useEffect(() => {
    //     const storedAcceptance = localStorage.getItem("cookiesAccepted");
    //     if (storedAcceptance === "true") {
    //         setCookiesAccepted(true);
    //     }
    // }, []);

    const handleAcceptCookies = () => {
        setCookiesAccepted(true);
        // localStorage.setItem("cookiesAccepted", "true");
    };

    return (
        <React.Fragment>
            {!cookiesAccepted && (
                <div
                    className="wrapper-cookies"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <motion.img
                        className="sloth-cookies aura"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
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
                        <p>The sloth desires cookies.</p>
                        <button onClick={handleAcceptCookies}>Accept</button>
                    </motion.div>
                    <motion.div
                        onMouseEnter={handleMouseLeave}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 2.6,
                            duration: 1,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "scale",
                                damping: 12,
                                stiffness: 100,
                                restDelta: 0.001,
                            }
                        }}
                        className={`overlay-cookie ${overlayVisible ? "show" : ""}`} />
                </div>
            )}
        </React.Fragment>
    );
};

export default Cookies;