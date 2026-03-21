'use client';
import GridItem from "./grid-item"
import { useEffect, useState } from 'react';



import Image from 'next/image';

export default function Main() {
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await fetch('/api/videos');
            const data = await res.json();
            console.log(data); // optional (for debugging)
            setVideos(data);
        };

        fetchVideos();
    }, []);
    return (

        <main className="flex-1 bg-white pl-8 pr-8 pt-8 grid gap-y-8 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
         2xl:grid-cols-4  overflow-y-auto h-full auto-rows-[minmax(100px, auto)] content-start">
            {videos.map((video) => (
                <GridItem key={video.id} video={video} />
            ))}

        </main>

    );
}


// bg-gray-700






// grid-rows-[repeat(3,minmax(100px,auto))]