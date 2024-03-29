import {
  staggerContainer,
  earthflexText,
  earthWrapper,
  earth,
  aircraft,
  earthTv,
  missile,
  missileWrapper,
  saturn,
  saturnWrapper,
  swimming,
} from "@/lib/motions";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import React from "react";
import useWindowSize from "../hook/use-window-size";

export default function Intro() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    "/element/computer-earth-frame-1.webp",
    "/element/computer-earth-frame-2.webp",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 500); // 500 milliseconds delay for frame swap (0.5 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  const { isMobile, isTablet } = useWindowSize();

  const { scrollYProgress } = useScroll();
  const ref = React.useRef<MotionValue<number> | null>(null);

  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  ref.current = spring;

  const startearthY = isMobile ? 120 : isTablet ? 150 : 125;
  const endearthY = isMobile ? -240 : isTablet ? -300 : -220;
  const earthY = useTransform(spring, [0, 1], [startearthY, endearthY]);

  const startearthScale = isMobile ? 1.4 : isTablet ? 1 : 1;
  const endearthScale = isMobile ? 0.5 : isTablet ? 0.5 : 0.5;
  const scaleEarth = useTransform(
    spring,
    [0, 1],
    [startearthScale, endearthScale]
  );

  const startoriginEarth = isMobile
    ? "50%  0%"
    : isTablet
    ? "50% 0%"
    : "50% 100%";
  const endoriginEarth = isMobile ? "50% 0%" : isTablet ? "50% 0%" : "50% 0%";
  const transformEarth = useTransform(
    spring,
    [0, 1],
    [startoriginEarth, endoriginEarth]
  );

  const startTextScale = isMobile ? 1 : isTablet ? 1 : 1;
  const endTextScale = isMobile ? 2 : isTablet ? 2 : 2;
  const scaleText = useTransform(
    spring,
    [0, 1],
    [startTextScale, endTextScale]
  );

  const startTextX = isMobile ? 0 : isTablet ? 0 : 0;
  const endTextX = isMobile ? 1000 : isTablet ? 500 : 1000;
  const TextX = useTransform(spring, [0, 1], [startTextX, endTextX]);

  const endsaturnY = isMobile ? -400 : isTablet ? -800 : -800;
  const saturnY = useTransform(spring, [0, 1], [0, endsaturnY]);

  const endmissileY = isMobile ? 700 : isTablet ? 800 : 800;
  const missilePosition = useTransform(spring, [0, 1], [0, endmissileY]);

  const endSwimX = isMobile ? -800 : isTablet ? -800 : -800;
  const endSwimY = isMobile ? 800 : isTablet ? 800 : 800;
  const SwimX = useTransform(spring, [0, 1], [-100, endSwimX]);
  const SwimY = useTransform(spring, [0, 1], [100, endSwimY]);

  const startAircraft = isMobile ? 75 : isTablet ? 160 : 300;
  const endAircraft = isMobile ? -300 : isTablet ? -300 : -300;
  const aircraftPosition = useTransform(
    spring,
    [0, 1],
    [startAircraft, endAircraft]
  );

  return (
    <React.Fragment>
      <motion.div
        className="intro"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={saturnWrapper}
          initial="initial"
          animate="animate"
          className="p-element saturn aura -top-8 -right-6 xl:right-[5%]"
          style={{
            perspective: 800,
            y: saturnY,
          }}
        >
          <motion.img
            variants={saturn}
            initial="initial"
            animate="animate"
            alt="saturn"
            src="/element/saturn-min.webp"
          />
        </motion.div>

        <motion.div
          className="absolute overflow-hidden h-[60px] sm:h-[75px] xl:h-[80px] top-[90px] xl:top-[100px]"
          style={{
            perspective: 800,
            scale: scaleText,
            x: TextX,
          }}
        >
          <motion.div
            className="earthflex text-[40px] min-[281]:text-[45px] min-[321px]:text-[50px] min-[403px]:text-[55px] sm:text-[70px]"
            variants={earthflexText({ isMobile, isTablet })}
            initial="initial"
            animate="animate"
          >
            <span className="glitch">EARTH</span>
            <motion.div className="inline-flex flex-col relative">
              <motion.span className="grain">FLEX</motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={earthWrapper({ isMobile, isTablet })}
          initial="initial"
          animate="animate"
          style={{
            perspective: 800,
            transformOrigin: transformEarth,
            y: earthY,
            scale: scaleEarth,
          }}
          className="p-element earth-wrapper"
        >
          <motion.img
            className="earth w-full"
            variants={earth}
            initial="initial"
            animate="animate"
            alt="earth"
            src={
              isMobile
                ? "/element/earth-mobile-min.webp"
                : "/element/earth-desktop-min.webp"
            }
          />
        </motion.div>

        <motion.div
          variants={missileWrapper}
          initial="initial"
          animate="animate"
          className="p-element missile aura -top-[50px] left-0 xl:left-[5%]"
          style={{
            perspective: 800,
            y: missilePosition,
          }}
        >
          <motion.img
            variants={missile}
            initial="initial"
            animate="animate"
            alt="missile"
            className="w-full"
            src="/element/missile-min.webp"
          />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          variants={earthTv}
          initial="initial"
          animate="animate"
          className="p-element group-computer aura"
        >
          <div className="animation-c">
            <motion.img
              className="pe-none computer w-full"
              alt="computer"
              src={images[currentImage]}
            />
          </div>
        </motion.div>

        <motion.div
          variants={aircraft({ isMobile, isTablet })}
          initial="initial"
          animate="animate"
          className="p-element aura z-10 top-30"
          style={{
            perspective: 800,
            x: aircraftPosition,
          }}
        >
          <motion.img
            className="pe-none aircraft w-full"
            alt="aircraft"
            src="/element/aircraft-min.webp"
          />
        </motion.div>

        <motion.div
          variants={swimming}
          initial="initial"
          animate="animate"
          className="p-element aura"
          style={{
            perspective: 800,
            y: SwimY,
            x: SwimX,
          }}
        >
          <motion.img
            className="pe-none swim w-full"
            alt="swimming"
            src="/element/sport-swimming-min.webp"
          />
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
