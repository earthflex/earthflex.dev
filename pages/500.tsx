import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Custom404() {
    return (
        <div className="error-page">
            <Image className="mbm-lighten" src="/error.png" width={200} height={100} alt={"error page"} />
            <div className="d-flex error-text">
                <motion.h1
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    500
                </motion.h1>
                <motion.h2
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}>
                    Server-side error occurred 😅
                </motion.h2>
            </div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                initial={{ opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}>
                <Link href="/" className="btn-errorpage">Go Home</Link>
            </motion.div>
        </div>
    );
}