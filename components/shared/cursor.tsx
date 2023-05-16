import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';

interface Position {
    x: number;
    y: number;
}

export default function CursorFollower({ imgSrc, show }: {
    imgSrc: string;
    show: boolean;
}) {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const [isDesktop, setDesktop] = useState(false);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1024);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDesktop(window.innerWidth > 1024);
            window.addEventListener("resize", updateMedia);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("resize", updateMedia);
            }
        };
    }, []);
    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
        };

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        addEventListeners();
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    const cursorStyles: CSSProperties = {
        position: 'fixed',
        transform: 'translate(0%, -90%)',
        zIndex: '9999',
        width: '180px',
        height: '90px',
        pointerEvents: 'none',
        top: `${position.y}px`,
        left: `${position.x}px`,
        display: (show && isDesktop) ? 'block' : 'none',
    };

    return (
        <img src={imgSrc} style={cursorStyles} alt="cursor" />
    );
};
