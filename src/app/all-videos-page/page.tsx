import db from "@/lib/db"; // Your Prisma singleton

export default async function VideoFeed() {
    // Fetch all videos from your Prisma database
    const videos = await db.video.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Uploaded Videos</h1>

            {videos.length === 0 ? (
                <p className="text-gray-500">No videos uploaded yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden border">
                            {/* Video Player */}
                            <video
                                src={video.videoUrl}
                                controls
                                className="w-full aspect-video bg-black"
                                poster="/thumbnail-placeholder.png" // Optional: path to a placeholder image
                            >
                                Your browser does not support the video tag.
                            </video>

                            <div className="p-4">
                                <h3 className="font-semibold text-lg truncate" title={video.title}>
                                    {video.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Uploaded on {new Date(video.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
