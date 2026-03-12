
"use client";
import Image from 'next/image';
import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection, DropEvent } from "react-dropzone";
import { Upload } from "lucide-react";

interface VideoUploadProps {
    onUpload: (files: File[]) => void;
}

export default function Main({ onUpload }: VideoUploadProps) {
    const [isUploading, setIsUploading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setIsUploading(true);
            onUpload(acceptedFiles);
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: {
            'video/*': ['.mp4', '.mov', '.avi', '.mkv']
        },
        multiple: false,
        noClick: true,
        noKeyboard: true
    });
    return (
        <main className="flex m-0 mx-auto max-w-5xl flex-row  bg-white pl-8 pr-8 pt-6 gap-y-8 gap-x-8 flex-wrap w-screen overflow-y-auto">
            <div
                {...getRootProps()}
                className={`
        flex flex-col items-center justify-center 
        w-full max-w-118 min-h-74 aspect-video 
        border-2 border-dashed rounded-lg
        transition-all duration-200 shrink
        ${isDragActive
                        ? "border-blue-500 bg-blue-50/10"
                        : "border-gray-300 hover:border-gray-200 bg-gray-50"
                    }
      `}
            >
                <input {...getInputProps()} />

                <div className="flex flex-col items-center gap-4">
                    <div className="p-6 bg-gray-200 rounded-full">
                        <Upload className={`w-12 h-12 ${isDragActive ? "text-blue-500" : "text-gray-500"}`} />
                    </div>

                    <div className="text-center">
                        <p className="text-xl font-medium">
                            {isDragActive ? "Drop files to upload" : "Drag and drop video files to upload"}
                        </p>
                        <p className="text-sm mt-1">
                            Your videos will be private until you publish them.
                        </p>
                    </div>

                    <button
                        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
                        onClick={open}
                    >
                        SELECT FILES
                    </button>
                </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 justify-center self-start max-w-118 flex grow">Select a video file to start uploading</div>
        </main>
    );

}






