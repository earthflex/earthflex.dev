import { motion } from "framer-motion";

export default function SplashScreen() {

    const loadingtext = "Loading..."

    const sentence = {
        hidden: { opacity: 1, scale: .5 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                deley: .5,
                staggerChildren: 0.08,
            },
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50, scale: .5 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0
        }
    }

    return (
        <div className="loader-page">
            <div className="ef-memoji">
                <video autoPlay muted loop playsInline>
                    <source src="/memoji.mp4" type="video/mp4" />
                    <source src="/memoji.webm" type="video/webm" />
                </video>
            </div>
            <div className="d-flex loader-text">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: -10, opacity: 1 }}
                >
                    <motion.h1
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                    >
                        {loadingtext.split("").map((char, index) => {
                            return (
                                <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </motion.h1>
                </motion.div>
            </div>
        </div >
    );
}