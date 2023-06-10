import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import localFont from '@next/font/local'
interface Position {
    x: number;
    y: number;
}

const comicSans = localFont({
    src: [
        {
            path: '../../styles/fonts/comic-sans-ms/ComicSansMS3.ttf',
            weight: '200 700',
            style: 'normal',
        },
    ],
})

export default function CursorFollower({ imgSrc, show, detail }: {
    imgSrc: string;
    detail: string;
    show: boolean;
}) {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const [isDesktop, setDesktop] = useState(false);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1200);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDesktop(window.innerWidth > 1200);
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
        filter:'drop-shadow(0 0 0.75rem #333)'
    };

    const textStyles: CSSProperties = {
        width: '140px',
        height: '70px',
        position:'absolute',
        top: `18px`,
        left: `12px`,
        color: '#333',
        pointerEvents: 'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize: '16px',
        textAlign:'center',
    }

    return (
        <div style={cursorStyles}>
            <img src={imgSrc} alt="cursor" />
            <div style={textStyles}>
                <div className={comicSans.className}>
                    {detail}
                </div>
            </div>
        </div>
    );
};
