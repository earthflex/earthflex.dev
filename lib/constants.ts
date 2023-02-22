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
