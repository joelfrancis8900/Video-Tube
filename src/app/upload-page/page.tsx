"use client";
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Header from '@/components/uploadPage/header';
import Main from '@/components/uploadPage/main';

export default function UploadPage() {

    const handleUpload = async (files: File[]) => {
        const file = files[0];
        if (!file) return;

        try {
            // 1. Upload to Supabase Storage
            const fileName = `${Date.now()}-${file.name}`;
            const { data, error: storageError } = await supabase.storage
                .from('videos')
                .upload(fileName, file);

            if (storageError) throw storageError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('videos')
                .getPublicUrl(fileName);

            // 3. Save to PostgreSQL via your API
            const response = await fetch('/api/videos', {
                method: 'POST',
                body: JSON.stringify({
                    title: file.name,
                    videoUrl: publicUrl
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) alert("Video uploaded and saved!");
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    return (
        <div className="flex flex-col h-screen w-full">
            <Header />
            <Main onUpload={handleUpload} />
        </div>


    );
}