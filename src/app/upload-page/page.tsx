"use client";
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Header from '@/components/uploadPage/header';
import Main from '@/components/uploadPage/main';

export default function UploadPage() {

    const handleUpload = async (files: File[], title: string, description: string) => {
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
            // We now send the TITLE and DESCRIPTION you typed in State 2
            const response = await fetch('/api/videos', {
                method: 'POST',
                body: JSON.stringify({
                    title: title, // Use the new title
                    description: description, // Use the new description
                    videoUrl: publicUrl
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                return true; // Tell the child it worked!
            } else {
                throw new Error("API failed");
            }
        } catch (error) {
            console.error("Upload error:", error);
            throw error; // Tell the child it failed
        }
    };

    return (
        <div className="flex flex-col h-screen w-full">
            <Header />
            <Main onUpload={handleUpload} />
        </div>


    );
}