'use client';
import GridItem from "./grid-item"
import { useEffect, useState } from 'react';

export default function Main() {
    const [videos, setVideos] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 8;

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch('/api/videos');
                const data = await res.json();

                // ✅ SAFETY CHECK
                if (!Array.isArray(data)) {
                    console.error("Invalid API response:", data);
                    setVideos([]); // fallback
                    return;
                }

                setVideos(data);
            } catch (err) {
                console.error("Fetch failed:", err);
                setVideos([]); // fallback
            }
        };

        fetchVideos();
    }, []);

    // ✅ SAFE fallback
    const safeVideos = Array.isArray(videos) ? videos : [];

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = safeVideos.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalPages = Math.ceil(safeVideos.length / videosPerPage);

    return (
        <main className="flex-1 ...">

            {currentVideos.length === 0 ? (
                <p>No videos available right now.</p>
            ) : (
                currentVideos.map((video) => (
                    <GridItem key={video.id} video={video} />
                ))
            )}

            {safeVideos.length > videosPerPage && (
                <div className="col-span-full flex justify-center items-center gap-2 py-10">
                    {/* pagination buttons unchanged */}
                </div>
            )}
        </main>
    );
}