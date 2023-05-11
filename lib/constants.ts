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

export const ButtonScale = (direction: "up" | "down" = "up"): Variants => {
  return {
    initial: { scale: direction === "up" ? .95 : 1, },
    whileHover: { scale: direction === "up" ? 1 : .95, },
    whileTap: { scale: direction === "up" ? .95 : 1, },
  };
};

export const headerHover: Variants = {
  initial: { scale: 1 },
  whileHover: { scale: .99 },
  whileTap: { scale: 1 },
};
export const cardTap: Variants = {
  initial: {
   background:'linear-gradient(136deg, rgb(51, 51, 51) 0%, rgb(34, 34, 34) 100%)',
    transition: {
      duration: 0.5
    }
  },
  whileHover: {
    scale: .99,
    background: [
      'linear-gradient(136deg, rgb(51, 51, 51) 0%, rgb(84, 84, 84) 100%)',
      'linear-gradient(136deg, rgb(84, 84, 84) 0%, rgb(51, 51, 51) 100%)',
    ],
    transition: {
      duration: 1.2,
      ease: [0, 0.71, 0.2, 1.01],
      background: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        restDelta: 0.001,
        repeat: Infinity,
      }
    }
  },
  whileTap: {
    scale: 1.01,
    transition: {
      duration: 0.5
    }
  },
}

export const sentence: Variants = {
  hidden: { opacity: 1, scale: .5 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      deley: .5,
      staggerChildren: 0.08,
    },
  }
}

export const letter: Variants = {
  hidden: { opacity: 0, y: 50, scale: .5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0
  }
}