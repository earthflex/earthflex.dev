import { cardTapProfilio } from "@/lib/constants";
import { arrowCardItem, imgCardItem, scaleCardItem } from "@/lib/motions";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { CardArrowIcon } from "./Icons";
import CursorFollower from "@/components/shared/cursor";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/client";
import useWindowSize from "../hook/use-window-size";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default function CardItem({
  col,
  name,
  type,
  theme,
  color,
  src,
  alt,
  chip,
  link,
}: {
  col: string;
  name: string;
  type: string;
  theme: string;
  color: string;
  src?: string;
  alt: string;
  chip: string;
  link: string;
}) {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  const [isHovered, setHovered] = React.useState(false);

  const handleHoverStart = () => {
    setHovered(true);
  };
  const handleHoverEnd = () => {
    setHovered(false);
  };

  const [showCursor, setShowCursor] = React.useState(false);

  if (!src) {
    return null;
  }

  return (
    <React.Fragment>
      <div className={col}>
        <CursorFollower
          detail={name}
          imgSrc="/ballon-hand.webp"
          show={showCursor}
        />
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <div
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
          >
            <motion.div variants={scaleCardItem}>
              <motion.div
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                variants={cardTapProfilio}
                className={
                  "card-me min-h-full !border-none !p-0 relative max-h-[400px] md:max-h-[600px] group " +
                  (link ? "online" : "offline")
                }
              >
                {type === "img" && (
                  <motion.div
                    className="overflow-hidden"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      staggerChildren: 0.4,
                    }}
                  >
                    <motion.img
                      src={urlFor(src).url()}
                      alt={alt}
                      width={376}
                      height={424}
                      className="w-full h-full object-cover"
                      variants={isDesktop ? imgCardItem : undefined}
                    />
                  </motion.div>
                )}
                <div className="absolute rounded-[20px] inset-0 bg-card overflow-hidden opacity-40 hover:opacity-70 ease-out duration-300"></div>
                <motion.div className="absolute bottom-3 w-full flex items-center justify-between px-4">
                  <div className="flex gap-1">
                    <motion.div
                      style={{ backgroundColor: theme }}
                      animate={{
                        boxShadow: isHovered
                          ? [
                              "0px 0px 0px 0px rgba(0,0,0,0)",
                              `-5px 0px 20px 5px ${theme}`,
                              `-20px 0 100px 16px ${theme}`,
                            ]
                          : "0px 0px 0px rgba(0,0,0,0)",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="p-1 px-3 rounded-full ease-out duration-300"
                    >
                      <small style={{ color: color }}>{chip}</small>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ staggerChildren: 0.5 }}
                  >
                    <motion.div variants={arrowCardItem}>
                      {link ? (
                        <motion.div className="bg-black p-1 rounded-full arrow-card">
                          <CardArrowIcon />
                        </motion.div>
                      ) : (
                        <motion.div className="relative">
                          <span className="hover:animate-ping absolute h-full w-full rounded-full bg-white opacity-25"></span>
                          <span className="text-black text-[10px] bg-[#ddd] px-2 py-1 f rounded-full flex items-center justify-center">
                            OFFLINE
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
}
