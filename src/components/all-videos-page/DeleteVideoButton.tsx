"use client";

import { useState } from "react";
import { deleteVideo } from "@/app/actions/delete-video";

// 1. Make sure "thumbnail" is in the destructured props
export default function DeleteVideoButton({
    id,
    url,
    thumbnail
}: {
    id: string;
    url: string;
    thumbnail?: string | null
}) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this video?")) {
            setIsDeleting(true);

            // 2. Make sure "thumbnail" is passed as the 3rd argument here
            const result = await deleteVideo(id, url, thumbnail);

            if (!result.success) {
                alert(result.error);
                setIsDeleting(false);
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors disabled:bg-gray-400"
        >
            {isDeleting ? "Deleting..." : "Delete Video"}
        </button>
    );
}