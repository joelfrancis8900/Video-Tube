"use client";
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Header from '@/components/uploadPage/header';
import Main from '@/components/uploadPage/main';

export default function UploadPage() {

    const handleUpload = async (files: File[], title: string, description: string, thumbnail: string) => {
        try {
            // 1. Upload Video to 'videos' bucket (We still need to do this)
            const videoName = `${Date.now()}-video-${files[0].name}`;
            await supabase.storage.from('videos').upload(videoName, files[0]);
            const { data: { publicUrl: videoUrl } } = supabase.storage.from('videos').getPublicUrl(videoName);

            // 2. SKIP THE THUMBNAIL UPLOAD
            // We don't use supabase.storage here because the thumbnail was 
            // already uploaded in Main.tsx. 'thumbnail' is now the URL.

            // 3. Save everything to your API
            const response = await fetch('/api/videos', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    description,
                    videoUrl,
                    thumbnailUrl: thumbnail // Ensure this matches your Prisma schema name!
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) throw new Error("Failed to save to database");

            return true;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return (
        <div className="flex flex-col h-screen w-full">
            <Header />
            <Main onUpload={handleUpload} />
        </div>


    );
}