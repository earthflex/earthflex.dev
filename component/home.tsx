import { earth, earthflexText, earthTv, earthWrapper, missile, missileWrapper, saturn, saturnWrapper, staggerContainer } from '@/lib/motions';
import { motion, useScroll } from 'framer-motion'

export default function HomeIndex() {

    // const { scrollYprogress } = useScroll();

    return (
        <motion.div className="intro"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
        >
            <motion.div
                variants={missileWrapper}
                initial="initial"
                animate="animate"
                className="p-element missile"
            >
                <motion.img
                    variants={missile}
                    initial="initial"
                    animate="animate"
                    src="/element/missile-min.png" />
            </motion.div>
            <motion.div
                variants={earthflexText}
                initial="initial"
                animate="animate"
                className="earthflex"
            >
                EARTH<span>FLEX</span>
            </motion.div>
            <motion.div
                variants={saturnWrapper}
                initial="initial"
                animate="animate"
                className="p-element saturn"
            >
                <motion.img
                    variants={saturn}
                    initial="initial"
                    animate="animate"
                    src="/element/saturn-min.png" />
            </motion.div>

            <motion.div
                className="p-element earth"
                variants={earthWrapper}
                initial="initial"
                animate="animate"
            >
                <motion.img
                    variants={earth}
                    initial="initial"
                    animate="animate"
                    src="/element/earth-desktop-min.png"
                />
            </motion.div>
            {/* <motion.div
                variants={earthTv}
                initial="initial"
                animate="animate"
                className="p-element group-computer">
                <motion.img
                    className="pe-none computer"
                    src="/element/computer-min.png"
                />
                <motion.div
                    className="pe-none earth-main "
                />
            </motion.div > */}
        </motion.div>

    )
}
