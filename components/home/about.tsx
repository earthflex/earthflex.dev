import { cardTap } from "@/lib/constants";
import { statusAnimate, scaleCard } from "@/lib/motions";
import { motion } from "framer-motion";
import React from "react";
import { CardArrowIcon } from "../shared/Icons";
import Link from "next/link";
import CursorFollower from "../shared/cursor";
import { DataContext } from "@/context";

export default function About() {
  const { profile } = React.useContext(DataContext);
  const [showCursor, setShowCursor] = React.useState(false);

  return (
    <React.Fragment>
      <CursorFollower detail="" imgSrc="/about-hand.webp" show={showCursor} />
      <motion.div>
        <div className="about-content">
          <div className="container">
            <motion.div
              className="flex flex-col gap-4 py-4"
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div variants={statusAnimate}>
                <motion.div
                  className="wrap-chip"
                  animate={{
                    background: [
                      "linear-gradient(0deg, #C16AAF 0%, #6A4E9D 40.89%, #60CAFC 100%, #213C85 189%)",
                      "linear-gradient(135deg, #60CAFC, #2F65FF, #A56CFF, #5D2EFF)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <span className="chip-status">{profile[0].status}</span>
                </motion.div>
              </motion.div>
              <div className="grid-about">
                <motion.div variants={scaleCard}>
                  <div
                    className="wrap-about"
                    onMouseEnter={() => setShowCursor(true)}
                    onMouseLeave={() => setShowCursor(false)}
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0px 10px 20px 0px #2F65FF, 4px 3px 24px 6px #A56CFF, -11px 8px 20px 0px #213C85",
                          "0px 10px 20px 0px #5D2EFF, 4px 3px 24px 6px #2F65FF, -11px 8px 20px 0px #C16AAF",
                          "0px 10px 20px 0px #60CAFC, 4px 3px 24px 6px #A56CFF, -11px 8px 20px 0px #C16AAF",
                        ],
                      }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="about-shadow"
                    />
                    <motion.div
                      initial="initial"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      variants={cardTap}
                      className="card-me guest"
                    >
                      <div className="card-line w-full absolute top-[-1px] left-0 z-20">
                        <div className="w-1/3 h-[2px] bg-line mx-auto" />
                      </div>
                      <div className="card-line w-full absolute bottom-[-1px] left-0 z-20">
                        <div className="w-1/3 h-[2px] bg-line mx-auto" />
                      </div>
                      <motion.div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="/hi.webp"
                            className="user-none pe-none"
                            width={50}
                            height={50}
                            alt="Hi !"
                          />
                          <motion.span className="flex items-center gap-2">
                            Hi there !
                            <img
                              className="animate-hand pointer-events-none"
                              src="/hand-hi.png"
                              width={20}
                              height={20}
                              alt="hand emoji"
                            />
                          </motion.span>
                        </div>
                        {/* <div className="bg-white bg-opacity-20 p-1 rounded-full arrow-card">
                          <CardArrowIcon />
                        </div> */}
                      </motion.div>
                      <div className="pt-3 pb-1">
                        <motion.h2>
                          Call me Apiwat Anekboon, Earth
                          <br />
                          I'm Web Developer from Thailand, with 4 years of
                          experience in web development.
                          <br />
                          Over the past few years,
                          <br /> I have focused on front-end development using
                          HTML, CSS, and JavaScript.
                          <br /> I'm passionate about doing creative
                          micro-interactions and minor details in interface
                          design.
                          <br />
                          In my leisure time, I like to explore art, music,
                          tattoos, and vintage shopping.
                        </motion.h2>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                <Link href="/works">
                  <motion.div variants={scaleCard}>
                    <motion.div
                      initial="initial"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      variants={cardTap}
                      className="card-me  guest"
                    >
                      <div className="card-line w-full absolute top-[-1px] left-0 z-20">
                        <div className="w-1/3 h-[2px] bg-line mx-auto" />
                      </div>
                      <div className="card-line w-full absolute bottom-[-1px] left-0 z-20">
                        <div className="w-1/3 h-[2px] bg-line mx-auto" />
                      </div>
                      <motion.div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">💼</span>
                          <motion.span className="font-medium text-lg ">
                            Works
                          </motion.span>
                        </div>
                        <div className="bg-white bg-opacity-20 p-1 rounded-full arrow-card">
                          <CardArrowIcon />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{
                          y: 50,
                          scale: 1,
                          opacity: 0,
                          transformOrigin: "bottom",
                        }}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                        }}
                        whileHover={{
                          scale: 0.95,
                          transition: { duration: 0.4, type: "ease" },
                        }}
                        transition={{
                          delay: 0.4,
                          duration: 0.4,
                          type: "easeIn",
                        }}
                        className="relative h-[120px] md:h-[215px]"
                      >
                        <img
                          className="pe-none absolute bottom-[-18px] right-[-20px] scale-[1.2] drop-shadow-[2px_20px_5px_rgba(0,0,0,0.50)]"
                          src="cover-project-min.webp"
                          alt="cover-project"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
