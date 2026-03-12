
"use client";
import Image from 'next/image';
import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection, DropEvent } from "react-dropzone";
import { Upload } from "lucide-react";

interface VideoUploadProps {
    onUpload: (files: File[]) => void;
}

export default function VideoUploadArea({ onUpload }: VideoUploadProps) {
    const [isUploading, setIsUploading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setIsUploading(true);
            onUpload(acceptedFiles);
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'video/*': ['.mp4', '.mov', '.avi', '.mkv']
        },
        multiple: false
    });
    return (
        <main className="flex-1 bg-white pl-8 pr-8 pt-6 grid gap-y-8 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 h-full overflow-y-auto  auto-rows-[minmax(100px, auto)] content-start">
            <div
                {...getRootProps()}
                className={`
        flex flex-col items-center justify-center 
        w-full max-w-2xl aspect-video 
        border-2 border-dashed rounded-full 
        transition-all duration-200 cursor-pointer
        ${isDragActive
                        ? "border-blue-500 bg-blue-50/10"
                        : "border-gray-600 hover:border-gray-400 bg-[#0f0f0f]"
                    }
      `}
            >
                <input {...getInputProps()} />

                <div className="flex flex-col items-center gap-4">
                    <div className="p-6 bg-[#272727] rounded-full">
                        <Upload className={`w-12 h-12 ${isDragActive ? "text-blue-500" : "text-gray-400"}`} />
                    </div>

                    <div className="text-center">
                        <p className="text-xl font-medium text-white">
                            {isDragActive ? "Drop files to upload" : "Drag and drop video files to upload"}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            Your videos will be private until you publish them.
                        </p>
                    </div>

                    <button
                        className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                    >
                        SELECT FILES
                    </button>
                </div>
            </div>
        </main>
    );

}






{/* <main className="flex-1 bg-white pl-8 pr-8 pt-6 grid gap-y-8 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 h-full overflow-y-auto  auto-rows-[minmax(100px, auto)] content-start">

    Test main section
</main> */}