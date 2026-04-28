'use client';
import GridItem from "./grid-item"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Main() {
    const [videos, setVideos] = useState<any[]>([]);
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 8;

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await fetch('/api/videos');
            const data = await res.json();
            setVideos(data);
        };

        fetchVideos();
    }, []);

    // Pagination Logic
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalPages = Math.ceil(videos.length / videosPerPage);

    return (
        <main className="flex-1 bg-white pl-8 pr-8 pt-8 grid gap-y-8 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
         2xl:grid-cols-4  overflow-y-auto h-full auto-rows-[minmax(100px, auto)] content-start">

            {/* Displaying only the sliced videos */}
            {currentVideos.map((video) => (
                <GridItem key={video.id} video={video} />
            ))}

            {/* Pagination Controls - Spanning all columns at the bottom */}
            {videos.length > videosPerPage && (
                <div className="col-span-full flex justify-center items-center gap-2 py-10">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`px-3 py-1 rounded ${currentPage === num ? 'bg-black text-white' : 'bg-gray-100'
                                }`}
                        >
                            {num}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </main>
    );
}