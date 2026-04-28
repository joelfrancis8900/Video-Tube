'use client';
import { useRef, useState } from 'react';

export default function GridItemVideo({ video }: any) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.error("Playback error:", err);
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.load();
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
        >
            <video
                ref={videoRef}
                src={video.videoUrl}
                poster={video.thumbnailUrl}
                muted
                playsInline
                controls={isHovering}
                // disablePictureInPicture removes the PiP option from the menu
                disablePictureInPicture
                className="aspect-video rounded-xl w-full"
                // noplaybackrate removes the speed option from the menu
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            />

            <style jsx>{`
                /* Target the overflow menu button directly */
                video::-webkit-media-controls-overflow-button {
                    display: none !important;
                }

                /* Final safety to hide buttons and ensure only scrubber shows */
                video::-webkit-media-controls-play-button,
                video::-webkit-media-controls-volume-control-container,
                video::-webkit-media-controls-mute-button,
                video::-webkit-media-controls-fullscreen-button,
                video::-webkit-media-controls-picture-in-picture-button {
                    display: none !important;
                }

                video::-webkit-media-controls-panel {
                    background-color: transparent !important;
                }
            `}</style>
        </div>
    );
}