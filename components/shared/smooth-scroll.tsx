

import React from "react";
import { motion, useSpring, useTransform, MotionValue, useScroll } from 'framer-motion';

export default function SmoothScroll() {

    const scrollRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const ref = React.useRef<MotionValue<number> | null>(null);

    const spring = useSpring(ref.current || scrollYProgress, { stiffness: 100, damping: 30 });
    ref.current = spring;

    const [maxScrollPosition, setMaxScrollPosition] = React.useState(0);
    const scrollProgress = useTransform(spring, [0, 1], [0, maxScrollPosition]);

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

    React.useEffect(() => {
        const calculateMaxScrollPosition = () => {
            const contentHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const calculatedMaxScroll = contentHeight - viewportHeight;
            const ninetyPercentOfViewport = viewportHeight * 0.9;
            return Math.min(calculatedMaxScroll, ninetyPercentOfViewport); // จำกัดค่าที่ไม่เกิน 90vh
        };

        const maxScroll = calculateMaxScrollPosition();
        setMaxScrollPosition(maxScroll);
        // console.log("Maximum Scroll Position:", maxScroll);

        const handleResize = () => {
            const newMaxScrollPosition = calculateMaxScrollPosition();
            // console.log("New Maximum Scroll Position:", newMaxScrollPosition);
            setMaxScrollPosition(newMaxScrollPosition);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            className="hidden xl:block fixed w-[7px] top-0 right-0 z-[100] h-screen overflow-y-scroll"
            ref={scrollRef}
        >
            <motion.div
                className="h-[60px] w-[7px] bg-[#787B7C] hover:bg-[#555] rounded-lg"
                style={{
                    y: scrollProgress,
                }}
            />
        </div>
    )
}