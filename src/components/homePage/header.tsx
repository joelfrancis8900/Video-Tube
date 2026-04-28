"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link';


export default function Header({ onToggle }: { onToggle: () => void }) {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) return;

        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    };

    return (

        <header className="bg-white h-[76px] pl-[27px] pr-[31px] w-full shrink-0 border-b border-gray-200 flex flex-row items-center justify-between">
            {/* Group 1: Logo & Menu */}
            <div className="flex flex-row items-center shrink-0">
                <button
                    onClick={onToggle}
                    className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Image
                        src="/icons/menu-svgrepo-com-space-removed.svg"
                        alt="Close menu"
                        width={18}
                        height={18}
                    />
                </button>

                {/* <div className=" pl-2 hidden sm:block sm:pl-6.75 text-base sm:text-2xl text-red-600">
                    VideoTube
                </div> */}
                <Link href="/" className=" pl-2 hidden sm:block sm:pl-6.75 text-base sm:text-2xl text-red-600">VideoTube</Link>
            </div>

            {/* Group 2: Search Bar */}
            <div className="flex flex-row flex-grow max-w-[672px] justify-center">
                <input
                    type="search"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    className="w-full p-2 border border-gray-300 rounded-l-[21px] focus:outline-none focus:border-blue-500"
                />

                <button
                    onClick={handleSearch}
                    className="px-4 py-2 w-[68px] flex flex-row justify-center items-center border-gray-300 transition-colors border-t border-r border-b hover:bg-gray-50 text-white rounded-r-[21px]"
                >
                    <Image
                        src="/icons/search-outline-svgrepo-com-space-removed.svg"
                        alt="Menu"
                        width={18}
                        height={18}
                    />
                </button>
            </div>

            {/* Group 3: Sign In */}
            <div className="flex flex-row justify-end items-center">
                {/* <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors rounded-full flex flex-nowrap flex-row whitespace-nowrap">
                    Sign in
                </button> */}
                <Link href="/login-sign-up-page" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors rounded-full flex flex-nowrap flex-row whitespace-nowrap">Sign in</Link>
            </div>
        </header>

    );
}