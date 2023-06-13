import { DeviceFlags } from "@/types";
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

export const earthflexText = ({ isMobile, isTablet }: DeviceFlags): Variants => ({
    initial: {
        y: 120,
        opacity: 0,
        scale: .98,
        transformOrigin: 'center bottom',
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: .6,
            duration: .8,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001,
            }
        }
    }
});

export const earthWrapper = ({ isMobile, isTablet }: DeviceFlags): Variants => ({
    initial: {
        y: 200,
        x: 0,
        z: 100,
        opacity: 0,
        scale: 0,
    },
    animate: {
        opacity: 1,
        y: isMobile ? 120 : isTablet ? 150 : 125,
        z: 100,
        scale: isMobile ? 1.4 : isTablet ? 1 : 1,
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
});

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
        y: 0,
        scale: .4,
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
        y: -100,
        scale: .8,
    },
    animate: {
        y: -40,
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

export const aircraft = ({ isMobile, isTablet }: DeviceFlags): Variants => ({
    initial: {
        y: 140,
        x: isMobile ? 400 : isTablet ? 800 : 800,
        scale: .7,
    },
    animate: {
        x: isMobile ? 60 : isTablet ? 300 : 300,
        transition: {
            delay: 1,
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001
            }
        }
    }
});


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

export const scaleCard: Variants = {
    offscreen: { y: 20, scale: .9, opacity: .9 },
    onscreen: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
        }
    }
}

export const scaleCardItem: Variants = {
    offscreen: {
        y: -120,
        scale: 0.9,
        z: -1,
        x: 0,
        opacity: 1,
        position: "relative",
        zIndex: -1,
        filter: "contrast(60%) brightness(30%) ",
        transformOrigin: 'center 0%',
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
        }
    },
    onscreen: {
        y: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        zIndex: 20,
        filter: "none",
        transformOrigin: 'top top',
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.6,
        }
    }
}

export const arrowCardItem: Variants = {
    offscreen: {
        x: 140,
    },
    onscreen: {
        x: 0,
        transition: {
            duration:.4,
        }
    }
}

export const imgCardItem: Variants = {
    offscreen: {
        scale: 1,
    },
    onscreen: {
        scale: 1,
        y: 0,
        transformOrigin:'left center',
        transition: {
            duration:1,
        }
    }
}

export const statusAnimate: Variants = {
    offscreen: {
        y: 0,
        opacity: .9,
        scale: .9,
        transformOrigin: 'left bottom',
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transformOrigin: 'left bottom',
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

export const headerCartAnimate: Variants = {
    offscreen: { y: 0, opacity: .9, scale: .9, transformOrigin: 'center' },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: .4,
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

export const textAnimate: Variants = {
    offscreen: { x: 10, opacity: 0, transformOrigin: 'bottom' },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .3,
            type: "spring",
            bounce: 0.4,
            duration: .5
        }
    }
}

export const flamingo: Variants = {
    offscreen: { x: -240, },
    onscreen: {
        x: -50,
        transition: {
            type: "spring",
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

