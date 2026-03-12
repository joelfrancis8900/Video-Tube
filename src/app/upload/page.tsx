"use client";
import Image from 'next/image';
import Header from '@/components/uploadPage/header';
import Main from '@/components/uploadPage/main';

export default function UploadPage() {

    const handleUpload = (files: File[]) => {
        console.log("Files received:", files);
        // Your upload logic here
    };

    return (
        <div className="flex flex-col h-screen w-full">
            <Header />
            <Main onUpload={handleUpload} />
        </div>


    );
}