

import React from "react";
import { motion, useSpring, useTransform, MotionValue, useScroll } from 'framer-motion';

export default function SmoothScroll() {

    const scrollRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const ref = React.useRef<MotionValue<number> | null>(null);

    const spring = useSpring(ref.current || scrollYProgress, { stiffness: 100, damping: 30 });
    ref.current = spring;

    React.useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();

            const container = scrollRef.current;
            if (container) {
                container.scrollTo({
                    top: container.scrollTop + event.deltaY,
                    behavior: 'smooth',
                });
            }
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener('wheel', handleWheel, {
                passive: false,
            });
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const [maxScrollPosition, setMaxScrollPosition] = React.useState(
        typeof window !== 'undefined' ? window.innerHeight * 0.86 : 0
    );

    const scrollProgress = useTransform(spring, [0, 1], [0, maxScrollPosition]);

    React.useEffect(() => {
        const updateMaxScrollPosition = () => {
            setMaxScrollPosition(window.innerHeight * 0.86);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateMaxScrollPosition);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', updateMaxScrollPosition);
            }
        };
    }, []);

    return (
        <div
            className="hidden xl:block fixed w-[8px] top-[48px] right-[4px] z-[13] h-screen overflow-y-scroll"
            ref={scrollRef}
        >
            <motion.div
                className="scroll-main h-[60px] absolute w-[7px] shadow-inner bg-[#787B7C] hover:bg-[#555] rounded-lg"
                style={{
                    top: scrollProgress,
                }}
            />
        </div>
    )
}