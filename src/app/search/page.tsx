import db from "@/lib/db";
import Image from "next/image";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const { q = "" } = await searchParams;

    const videos = q
        ? await db.video.findMany({
            where: {
                title: {
                    contains: q,
                    mode: "insensitive",
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        })
        : [];

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-xl font-bold mb-4">
                Results for: "{q}"
            </h1>

            {videos.length === 0 ? (
                <p>No results found</p>
            ) : (
                <div className="space-y-4">
                    {videos.map((video) => (
                        <a
                            key={video.id}
                            href={`/watch-page/${video.id}`}
                            className="flex gap-4 p-3 border rounded hover:bg-gray-50 items-center"
                        >
                            {/* Thumbnail */}
                            {video.thumbnailUrl && (
                                <div className="w-40 aspect-video relative flex-shrink-0">
                                    <Image
                                        src={video.thumbnailUrl}
                                        alt={video.title}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            )}

                            {/* Title */}
                            <div className="flex flex-col justify-center">
                                <p className="font-medium text-base line-clamp-2">
                                    {video.title}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}