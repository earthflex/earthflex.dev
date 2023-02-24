import Link from "next/link";
import { motion } from "framer-motion";

export default function Project() {
    return (
        <div className="error-page">
            <img className="mbm-lighten pe-none" src="/error.png" width={200} alt={"error page"} />
            <div className="d-flex error-text">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    🔔
                </motion.h1>
                <motion.h2
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}>
                    Portfolio is currently being updated.
                </motion.h2>
            </div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                initial={{ opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}>
                <Link href="/" className="btn-errorpage">Go Home</Link>
            </motion.div>
        </div >
    );
}