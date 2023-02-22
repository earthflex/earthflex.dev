import Layout from '@/component/layout'
import { earth, earthWrapper, saturn, saturnWrapper, staggerContainer } from '@/lib/constants';
import { motion, useScroll } from 'framer-motion'

export default function HomeIndex() {

    const { scrollYProgress } = useScroll();

    return (
        <motion.div className="intro"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
        >
            <motion.img
                initial={{ y: -800, scale: .8 }}
                animate={{ y: 0, scale: .5 }}
                transition={{
                    default: {
                        duration: 1,
                    },
                    scale: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                src="/element/missile-min.png"
                className="pe-none missile"
            >
            </motion.img>
            <motion.div
                initial={{ y: 400, }}
                animate={{ y: 200, }}
                transition={{
                    default: {
                        duration: .8,
                        ease: [0, 0.71, 0.2, 1.01]
                    },
                    scale: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                className="earthflex"
            >
                EARTH<span>FLEX</span>
            </motion.div>
            <motion.div
                variants={earthWrapper}
                initial="initial"
                animate="animate"
                className="pe-none earth"
            >
                <motion.img
                    variants={earth}
                    initial="initial"
                    animate="animate"
                    src="/element/earth-desktop-min.png"
                />
            </motion.div>
            <motion.div
                variants={saturnWrapper}
                initial="initial"
                animate="animate"
                // transition={{
                //     default: {
                //         duration: 1,
                //         ease: [0, 0.71, 0.2, 1.01]
                //     },
                //     scale: {
                //         type: "spring",
                //         damping: 2,
                //         stiffness: 100,
                //         restDelta: 0.001
                //     }
                // }}
                className="pe-none saturn"
            >
                <motion.img
                    variants={saturn}
                    initial="initial"
                    animate="animate"
                    src="/element/saturn-min.png" />
            </motion.div>

            {/* <div className="computer">
          <motion.img
            src="/element/computer-min.png"
          >
          </motion.img>
          <motion.img
            src="/element/earth-main.gif"
          >
          </motion.img>
        </div > */}
        </motion.div>

    )
}
