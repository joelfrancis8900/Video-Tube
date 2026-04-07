
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
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setSelectedFile(acceptedFiles[0]); // Save the file to memory
            setIsUploading(true);              // Change the page layout
        }
    }, []); // We removed onUpload from here so it doesn't upload yet

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: {
            'video/*': ['.mp4', '.mov', '.avi', '.mkv']
        },
        multiple: false,
        noClick: true,
        noKeyboard: true
    });

    const handleCancel = () => {
        setIsUploading(false);
        setSelectedFile(null);
        setTitle("");
        setDescription("");
    };

    return (
        <main className="flex m-0 mx-auto max-w-5xl flex-col bg-white p-8 gap-8 w-screen overflow-y-auto">
            {!isUploading ? (
                /* --- STATE 1: DRAG AND DROP (Your original code) --- */
                <div className="flex flex-row gap-8 flex-wrap">
                    <div
                        {...getRootProps()}
                        className={`flex flex-col items-center justify-center w-full max-w-118 min-h-74 aspect-video border-2 border-dashed rounded-lg transition-all duration-200 shrink ${isDragActive ? "border-blue-500 bg-blue-50/10" : "border-gray-400 hover:border-gray-200 bg-gray-50"
                            }`}
                    >
                        <input {...getInputProps()} />
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="p-6 bg-gray-200 rounded-full">
                                <Upload className={`w-12 h-12 ${isDragActive ? "text-blue-500" : "text-gray-500"}`} />
                            </div>
                            <p className="text-xl font-medium">Drag and drop video files to upload</p>
                            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full" onClick={open}>
                                SELECT FILES
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-8 justify-center self-start max-w-118 flex grow">
                        Select a video file to start uploading
                    </div>
                </div>
            ) : (
                /* --- STATE 2: THE FORM (The new code) --- */
                <div className="flex flex-col gap-6 max-w-2xl">
                    <h1 className="text-2xl font-bold">Video Details</h1>

                    {/* Title Input */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm text-gray-600">Title</label>
                        <input
                            className="border border-gray-300 p-3 rounded-md outline-blue-500"
                            placeholder="Give your video a title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Description Input */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm text-gray-600">Description</label>
                        <textarea
                            className="border border-gray-300 p-3 rounded-md h-32 outline-blue-500"
                            placeholder="Tell us about the video"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Thumbnail Placeholder */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm text-gray-600">Thumbnail</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center bg-gray-50 cursor-pointer">
                            <p className="text-gray-500 text-sm">Click to upload a thumbnail</p>
                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="flex justify-end gap-4 mt-6 border-t pt-6">
                        <button onClick={handleCancel} className="px-6 py-2 font-semibold text-gray-600">
                            CANCEL
                        </button>
                        <button
                            onClick={() => selectedFile && onUpload([selectedFile])}
                            className="px-8 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                        >
                            UPLOAD VIDEO
                        </button>
                    </div>
                </div>
            )}
        </main>
    );

}






