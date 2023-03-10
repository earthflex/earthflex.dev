import { motion } from 'framer-motion';

export default function RotateLandscape() {

    return (
        <div className="error-page">
            <motion.img
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="aura pe-none" src="/rotate-mobile.png" width={80} alt={"rotate your phone"} />
            <div className="d-flex error-text">
                <motion.h1
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    😅
                </motion.h1>
                <motion.h2
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}>
                    Rotate Your Phone
                </motion.h2>
            </div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                initial={{ opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}>
            </motion.div>
        </div >
    );
}


