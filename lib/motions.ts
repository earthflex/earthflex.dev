
import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.7,
        }
    }
}

export const earthflexText: Variants = {
    initial: {
        y: 800,
    },
    animate: {
        y: 150,
        transition: {
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001,
            }
        }
    }
}

export const earthWrapper: Variants = {
    initial: {
        y: 400,
        x: 0,
        scale: 0
    },
    animate: {
        y: 100,
        x: 0,
        scale: .6,
        transition: {
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
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

export const missileWrapper: Variants = {
    initial: {
        y: -800,
        scale: .8,
    },
    animate: {
        y: 100,
        scale: .5,
        transition: {
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001
            }
        }
    }
}

export const missile: Variants = {
    initial: {},
    animate: {
        y: [30, 0, 30],
        transition: {
            duration: 3,
            ease: "linear",
            repeat: Infinity,
        }
    }
}

export const saturnWrapper: Variants = {
    initial: {
        y: -300,
        scale: .8,
    },
    animate: {
        y: 0,
        scale: .6,
        transition: {
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001
            }
        }
    }
}

export const saturn: Variants = {
    initial: {},
    animate: {
        y: [30, 0, 30],
        transition: {
            duration: 3,
            ease: "linear",
            repeat: Infinity,
        }
    }
}


export const earthTv: Variants = {
    initial: {
        y: 1400,
        scale: 0
    },
    animate: {
        y: 260,
        scale: .8,
        transition: {
            delay: .5,
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001,
            }
        }
    }
}

export const imageAnimate: Variants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        rotate: [0, 10, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

export const textAnimate: Variants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

export const oldMan: Variants = {
    offscreen: { y: 200, scale: 0 },
    onscreen: {
        scale: .8,
        y: 0,
        transition: {
            type: "spring",
            duration: 1
        }
    }
}

export const speechText: Variants = {
    offscreen: { y: 100, x: 140, scale: 0, opacity: 0 },
    onscreen: {
        scale: .9,
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001,
            }
        }
    }
}

