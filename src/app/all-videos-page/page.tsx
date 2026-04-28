import db from "@/lib/db";
import DeleteVideoButton from "@/components/all-videos-page/DeleteVideoButton";

export default async function VideoFeed() {
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
                        <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden border flex flex-col">
                            <video
                                src={video.videoUrl}
                                controls
                                className="w-full aspect-video bg-black"
                            >
                                Your browser does not support the video tag.
                            </video>

                            <div className="p-4 grow">
                                <h3 className="font-semibold text-lg truncate" title={video.title}>
                                    {video.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Uploaded on {new Date(video.createdAt).toLocaleDateString()}
                                </p>

                                {/* Pass the thumbnailUrl here so the delete action can find it */}
                                {/* <DeleteVideoButton
                                    id={video.id}
                                    url={video.videoUrl}
                                    thumbnail={video.thumbnailUrl}
                                /> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}