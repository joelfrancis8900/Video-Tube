'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Assuming you're using Next.js router

export default function GridItemVideo({ video }: any) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        videoRef.current?.play().catch(() => { });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        videoRef.current?.pause();
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) setDuration(videoRef.current.duration);
    };

    const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
        const seekTime = (parseFloat(e.target.value) / 100) * duration;
        if (videoRef.current) {
            videoRef.current.currentTime = seekTime;
            setProgress(parseFloat(e.target.value));
        }
    };

    // --- NEW: Prevent the click from reaching the parent/Link ---
    const handleControlsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push(`/watch/${video.id}`)} // Or whatever your navigation logic is
            className="relative aspect-video rounded-xl overflow-hidden bg-black group cursor-pointer"
        >
            {/* Thumbnail Layer */}
            <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${isHovering ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Image src={video.thumbnailUrl} alt="thumbnail" fill className="object-cover" />
            </div>

            {/* Video Layer */}
            <video
                ref={videoRef}
                src={video.videoUrl}
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover"
            />

            {/* Custom Scrubber Overlay */}
            {isHovering && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="absolute bottom-0 left-0 right-0 z-20 p-2 bg-gradient-to-t from-black/70 to-transparent cursor-default border-none outline-none"
                >
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={isNaN(progress) ? 0 : progress}
                            onChange={handleScrub}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                            }}
                            onMouseDown={(e) => e.stopPropagation()}
                            className="accent-red-600 h-1 flex-grow cursor-pointer appearance-none bg-white/30 rounded-lg overflow-hidden"
                        />
                        <span className="text-white text-[10px] font-medium whitespace-nowrap select-none">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                    </div>
                </button>
            )}





            <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 0;
          box-shadow: -100vw 0 0 100vw #dc2626;
        }
      `}</style>
        </div>
    );
}
