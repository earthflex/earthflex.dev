

import React from "react";
import { motion, useSpring, useTransform, MotionValue, useScroll } from 'framer-motion';

export default function SmoothScroll() {
    // สร้าง reference สำหรับ DOM element ที่จะถูก scroll
    const scrollRef = React.useRef<HTMLDivElement>(null);

    // ใช้ useScroll hook ของ Framer Motion เพื่อเข้าถึงค่า scroll progress (0 ถึง 1)
    const { scrollYProgress } = useScroll();

    // สร้าง reference สำหรับการเก็บค่า spring animation
    const ref = React.useRef<MotionValue<number> | null>(null);


    // กำหนดค่าให้กับ spring animation
    const spring = useSpring(ref.current || scrollYProgress, { stiffness: 100, damping: 30 });
    ref.current = spring;

    // สร้าง state สำหรับเก็บค่า maxScrollPosition
    const [maxScrollPosition, setMaxScrollPosition] = React.useState(0);

    // แปลงค่า scrollYProgress ให้อยู่ในรูปของค่า pixel ที่สามารถ scroll ได้
    const scrollProgress = useTransform(spring, [0, 1], [0, maxScrollPosition]);

    // จัดการกับ event wheel และสร้าง smooth scrolling effect
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
            scrollRef.current.addEventListener('wheel', handleWheel, { passive: false });
        }
        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    // คำนวณค่า maxScrollPosition เมื่อหน้าต่างถูกเปลี่ยนขนาด
    React.useEffect(() => {
        const calculateMaxScrollPosition = () => {
            const contentHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const calculatedMaxScroll = contentHeight - viewportHeight;
            const ninetyPercentOfViewport = viewportHeight * 0.9;
            return Math.min(calculatedMaxScroll, ninetyPercentOfViewport);
        };
        const maxScroll = calculateMaxScrollPosition();
        setMaxScrollPosition(maxScroll);

        const handleResize = () => {
            const newMaxScrollPosition = calculateMaxScrollPosition();
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
                className="h-[80px] w-[7px] bg-[#787B7C] hover:bg-[#555] rounded-lg"
                style={{
                    y: scrollProgress,
                }}
            />
        </div>
    )
}