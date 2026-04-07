
"use client";
import Image from 'next/image';
import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection, DropEvent } from "react-dropzone";
import { Upload } from "lucide-react";

interface VideoUploadProps {
    onUpload: (files: File[], title: string, description: string) => Promise<boolean | void>;
}

export default function Main({ onUpload }: VideoUploadProps) {
    const [status, setStatus] = useState<"idle" | "form" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setSelectedFile(acceptedFiles[0]);
            setStatus("form"); // Moves from State 1 to State 2
        }
    }, []);

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
        setStatus("idle"); // Moves back to State 1
        setSelectedFile(null);
        setTitle("");
        setDescription("");
        setErrorMessage("");
    };

    return (
        <main className="flex m-0 mx-auto max-w-5xl flex-col bg-white p-8 gap-8 w-screen overflow-y-auto min-h-screen">
            {/* --- STATE 1: DRAG AND DROP (Idle) --- */}
            {status === "idle" && (
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
            )}

            {/* --- STATE 2: THE FORM (Details) --- */}
            {status === "form" && (
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
                        <button onClick={handleCancel} className="px-6 py-2 font-semibold text-gray-600 hover:bg-gray-50 rounded-md">
                            CANCEL
                        </button>
                        <button
                            onClick={async () => {
                                if (!selectedFile) return; // Safety check
                                try {
                                    // Now the computer knows onUpload expects 3 arguments!
                                    await onUpload([selectedFile], title, description);
                                    setStatus("success");
                                } catch (err) {
                                    setStatus("error");
                                }
                            }}
                            className="px-8 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                        >
                            UPLOAD VIDEO
                        </button>
                    </div>
                </div>
            )}

            {/* --- STATE 3: THE RESULT (Success or Error) --- */}
            {(status === "success" || status === "error") && (
                <div className="flex flex-col items-center justify-center py-20 text-center gap-6 border rounded-xl bg-gray-50">
                    {status === "success" ? (
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold">✓</div>
                            <h1 className="text-3xl font-bold text-green-700">Video uploaded!</h1>
                            <p className="text-gray-600">Your video is now being processed and will be available soon.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-3xl font-bold">✕</div>
                            <h1 className="text-3xl font-bold text-red-700">Upload failed.</h1>
                            <p className="text-gray-600">{errorMessage || "An unexpected error occurred."}</p>
                        </div>
                    )}
                    <button
                        onClick={handleCancel}
                        className="mt-4 px-8 py-2 bg-white border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        DONE
                    </button>
                </div>
            )}
        </main>
    );

}






