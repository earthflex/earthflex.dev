import { useEffect, useState, useMemo } from "react";

interface WindowSize {
    width: number | null;
    height: number | null;
}

interface UseWindowSizeResult {
    windowSize: WindowSize;
    isMobile: boolean;
    isDesktop: boolean;
    isTablet: boolean;
}

export default function useWindowSize(): UseWindowSizeResult {
    const isClient = typeof window !== "undefined";

    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: isClient ? window.innerWidth : null,
        height: isClient ? window.innerHeight : null,
    });

    const { isMobile, isDesktop, isTablet } = useMemo(() => {
        const width = windowSize.width;
        return {
            isMobile: width !== null && width < 768,
            isTablet: width !== null && width >= 768 && width < 1200,
            isDesktop: width !== null && width >= 1200
        }
    }, [windowSize.width]);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        windowSize,
        isMobile,
        isDesktop,
        isTablet
    };
}
