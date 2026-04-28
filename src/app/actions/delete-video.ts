"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
);

/**
 * Robust path extraction. 
 * This removes the URL prefix and any query parameters (like ?v=123)
 */
function extractPath(url: string, bucket: string) {
    try {
        const urlObj = new URL(url);
        const pathDecoded = decodeURIComponent(urlObj.pathname);
        // Find where the bucket name ends in the URL path
        const marker = `/${bucket}/`;
        const index = pathDecoded.indexOf(marker);

        if (index === -1) {
            // Fallback: just get the last part of the URL
            return pathDecoded.split("/").pop() || "";
        }

        return pathDecoded.substring(index + marker.length);
    } catch (e) {
        // If URL parsing fails, try manual split
        return url.split(`${bucket}/`).pop()?.split("?")[0] || "";
    }
}

export async function deleteVideo(videoId: string, videoUrl: string, thumbnailUrl?: string | null) {
    try {
        // 1. Prepare Paths
        const videoPath = extractPath(videoUrl, "videos");
        const thumbPath = thumbnailUrl ? extractPath(thumbnailUrl, "thumbnails") : null;

        // Debugging - Check these in your Terminal
        console.log("--- Deletion Debug ---");
        console.log("Video Path to delete:", videoPath);
        console.log("Thumb Path to delete:", thumbPath);

        // 2. Delete Video
        const { data: vData, error: vError } = await supabase.storage
            .from("videos")
            .remove([videoPath]);

        if (vError) console.error("Video Storage Error:", vError);
        else console.log("Video Storage Result:", vData);

        // 3. Delete Thumbnail
        if (thumbPath) {
            const { data: tData, error: tError } = await supabase.storage
                .from("thumbnails")
                .remove([thumbPath]);

            if (tError) console.error("Thumbnail Storage Error:", tError);
            else console.log("Thumbnail Storage Result:", tData);
        }

        // 4. Delete Database Row (Supabase Table Editor)
        await db.video.delete({
            where: { id: videoId },
        });

        revalidatePath("/all-videos-page");
        return { success: true };
    } catch (error) {
        console.error("Critical Failure:", error);
        return { success: false, error: "Deletion failed." };
    }
}