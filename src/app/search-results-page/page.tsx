"use client";

import { useEffect, useState } from "react";

type Video = {
    id: string;
    title: string;
    url: string;
};

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Video[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (!query) {
                setResults([]);
                return;
            }

            const fetchResults = async () => {
                setLoading(true);

                const res = await fetch(`/api/search?q=${query}`);
                const data = await res.json();

                setResults(data.videos);
                setLoading(false);
            };

            fetchResults();
        }, 300); // debounce

        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search Videos</h1>

            <input
                className="w-full border p-2 rounded"
                placeholder="Search videos by title..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {loading && <p className="mt-2">Loading...</p>}

            <div className="mt-4 space-y-3">
                {results.map((video) => (
                    <a
                        key={video.id}
                        href={`/watch/${video.id}`}
                        className="block p-3 border rounded hover:bg-gray-50"
                    >
                        <p className="font-medium">{video.title}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}