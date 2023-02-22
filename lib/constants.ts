import { Variants } from "framer-motion";

export const FadeIn = (direction: "up" | "down" = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    }
  };
};

export const ButtonScale: Variants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1 },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    }
  }
}

export const earthWrapper: Variants = {
  initial: {
    y: 400,
    scale: 0
  },
  animate: {
    y: 100,
    scale: .6,
    transition: {
      deafult: {
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
      },
      scale: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        restDelta: 0.001,
      }
    }
  }
}

export const earth: Variants = {
  initial: {},
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    }
  }
}

export const saturnWrapper: Variants = {
  initial: {
    y: -100,
    scale: .6
  },
  animate: {
    y: 0,
    scale: .6,
    transition: {
      deafult: {
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
      },
      scale: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        restDelta: 0.001,
      }
    }
  }
}

export const saturn: Variants = {
  initial: {},
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    }
  }
}
