import React, { useRef, useEffect } from "react";
import { VideoProps } from "@/types";

const Video: React.FC<VideoProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video && video.paused) {
            video.play();
        }
    }, [videoRef]); 

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay={true}
            muted={true}
            playsInline={true}
            loop={true}
        />
    );
};

export default Video;
