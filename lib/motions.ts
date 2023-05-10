
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
        y: 80,
        opacity: 0,
    },
    animate: {
        y: 60,
        opacity: 1,
        transition: {
            delay: .2,
            duration: 1.2,
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
        scale: 1.8,
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
            duration: 15,
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


export const artcraft: Variants = {
    initial: {
        y: 100,
        x: -800,
        scale: .7,
    },
    animate: {
        x: 0,
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


export const swimming: Variants = {
    initial: {
        y: 800,
        x: -800,
        scale: .6,
    },
    animate: {
        y: 100,
        x: -100,
        scale: .8,
        transition: {
            delay: .4,
            duration: 1,
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


export const scaleAbout: Variants = {
    offscreen: { scale: 0, opacity: 0 },
    onscreen: {
        scale: 1,
        opacity: 1,
        transformOrigin: 'left top',
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}


export const statusAnimate: Variants = {
    offscreen: { y: 50, opacity: 0, scale: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transformOrigin: 'bottom left',
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

export const hithereAnimate: Variants = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .4,
            type: "spring",
            bounce: 0.4,
            duration: 1
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
            delay: .6,
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
            delay: .3,
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

