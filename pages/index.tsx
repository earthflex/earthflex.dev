import Layout from '@/component/layout'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'


export default function Home() {

  const { scrollYProgress } = useScroll();

  return (
    <Layout>
      <section className="intro">
        <motion.img
          initial={{ y: -400 }}
          animate={{ y: 0}}
          whileInView={{ scale: 1 }}
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
        <motion.img
          initial={{ y: 400, scale: 0 }}
          animate={{ y: 100, scale: .6 }}
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
          src="/element/earth-desktop-min.png"
          className="pe-none earth"
        >
        </motion.img>
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          whileInView={{ scale: 1 }}
          // transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          transition={{
            default: {
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01]
            },
            scale: {
              type: "spring",
              damping: 2,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          src="/element/saturn-min.png"
          className="pe-none saturn"
        >
        </motion.img>
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

      </section>
    </Layout >
  )
}
