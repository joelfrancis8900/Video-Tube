'use client';

import { useState, useEffect } from 'react';
import { useParams } from "next/navigation"; // ✅ ADDED
import Header from '@/components/homePage/header';
import MobileDrawer from "@/components/homePage/mobile-drawer";
import Image from "next/image";

export default function WatchPage() {
    const { id } = useParams(); // ✅ ADDED
    console.log("VIDEO ID:", id);
    const [video, setVideo] = useState<any>(null); // ✅ ADDED

    // Keep isDrawerOpen as the primary state for your menu
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showMore, setShowMore] = useState(false);

    // ✅ ADDED: fetch video
    useEffect(() => {
        if (!id) return;

        const fetchVideo = async () => {
            const res = await fetch(`/api/videos/${id}`);
            const data = await res.json();
            setVideo(data);
        };

        fetchVideo();
    }, [id]);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // ✅ ADDED: loading state
    if (!video) {
        return <div className="p-6">Loading...</div>;
    }

    return (
        <div>
            <Header onToggle={handleMenuToggle} />

            <MobileDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                isUniversal={true}
            />

            <div className="flex w-full pl-6 sm:pl-[69px] pr-6 py-4 gap-6">
                {/* LEFT MAIN SECTION */}
                <div className="flex-1 max-w-[1344px]">
                    {/* Video Player */}
                    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
                        {/* ✅ CHANGED */}
                        <video
                            src={video.videoUrl}
                            controls
                            className="w-full h-full"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-xl font-semibold mt-4">
                        {/* ✅ CHANGED */}
                        {video.title}
                    </h1>

                    {/* Video Meta + Actions */}
                    <div className="flex items-center justify-between mt-2 flex-wrap gap-3">
                        <p className="text-sm text-gray-500">
                            {/* ✅ CHANGED */}
                            {video.views} views • {new Date(video.createdAt).toLocaleDateString()}
                        </p>

                        <div className="flex items-center gap-3">
                            <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
                                👍 Like
                            </button>
                            <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
                                👎 Dislike
                            </button>
                            <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
                                Share
                            </button>
                            <button className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Channel Section */}
                    <div className="flex justify-between items-start mt-4 border-b pb-4">
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300" />

                            <div>
                                {/* ✅ CHANGED */}
                                <p className="font-medium">{video.user?.name}</p>
                                <p className="text-sm text-gray-500">
                                    {video.user?.subscribers ?? 0} subscribers
                                </p>
                            </div>
                        </div>

                        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
                            Subscribe
                        </button>
                    </div>

                    {/* Description */}
                    <div className="mt-3 text-sm">
                        <p className={showMore ? "" : "line-clamp-2"}>
                            {/* ✅ CHANGED */}
                            {video.description}
                        </p>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-blue-500 mt-1"
                        >
                            {showMore ? "Show less" : "Show more"}
                        </button>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-6">
                        <h2 className="font-semibold text-lg">
                            {/* ✅ OPTIONAL */}
                            {video.comments?.length || 0} Comments
                        </h2>

                        {/* Add Comment */}
                        <div className="flex gap-3 mt-3">
                            <div className="w-8 h-8 rounded-full bg-gray-300" />
                            <input
                                className="flex-1 border-b outline-none pb-1"
                                placeholder="Add a comment..."
                            />
                        </div>

                        {/* Comment Item */}
                        <div className="mt-6 space-y-6">
                            {/* ✅ CHANGED */}
                            {video.comments?.map((comment: any) => (
                                <div key={comment.id} className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-300" />

                                    <div className="flex-1">
                                        <p className="text-sm font-medium">
                                            {comment.user.name}
                                        </p>
                                        <p className="text-sm mt-1">
                                            {comment.text}
                                        </p>

                                        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                                            <button>👍</button>
                                            <button>Reply</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="w-[350px] hidden lg:block">
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((v) => (
                            <div key={v} className="flex gap-3 cursor-pointer">
                                <div className="w-40 h-24 bg-gray-300 rounded-lg" />

                                <div className="flex-1">
                                    <p className="text-sm font-medium line-clamp-2">
                                        Suggested Video Title Goes Here
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Channel Name
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        120K views • 2 days ago
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}