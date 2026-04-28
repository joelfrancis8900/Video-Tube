'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';




export default function Aside({ isSemiCollapsed }: { isSemiCollapsed: boolean }) {

    const itemClass = `flex cursor-pointer rounded-lg pt-[11px] pb-[11px] transition-all transition-colors duration-300 hover:bg-gray-100 ${isSemiCollapsed
        ? 'flex-col items-center justify-center gap-1 px-0' // Collapsed: No left padding
        : 'flex-row items-center gap-[25px] pl-[25px]'    // Expanded: Left padding included
        }`;

    return (

        // New sidebar:
        <aside className={`
            ${isSemiCollapsed ? 'w-20' : 'w-60'} bg-white shrink-0 border-r h-full border-gray-200 transition-all duration-300`}>
            <div className="pb-3 pt-2.5 border-gray-200 border-b flex flex-col gap-px">
                {/* previous classes for image second parent div */}
                <div className={itemClass}>
                    <div>
                        <Image
                            src="/icons/icons8-home-no-white-space.svg"
                            alt="Home icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    {/* <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight truncate px-1' : 'text-base'}>
                        Home
                    </div> */}
                    <Link href="/" className={isSemiCollapsed ? 'text-[12px] text-center leading-tight truncate px-1' : 'text-base'}>Home</Link>

                </div>

                <div className={itemClass}>
                    <div>
                        <Image
                            src="/icons/notification-bell-svgrepo-com-space-removed.svg"
                            alt="Notification bell icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight truncate px-1' : 'text-base'}>
                        Notifications
                    </div>

                </div>

                <div className={itemClass}>
                    <div>
                        <Image
                            src="/icons/icons8-plus.svg"
                            alt="Plus icon for upload"
                            width={18}
                            height={18}
                        />
                    </div>
                    {/* <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight truncate px-1' : 'text-base'}>
                        Upload
                    </div> */}
                    <Link href="/upload-page" className={isSemiCollapsed ? 'text-[12px] text-center leading-tight truncate px-1' : 'text-base'}>Upload</Link>
                </div>

            </div>





            <div className="pb-3 pt-2.5 border-gray-200  flex flex-col gap-px">

                <div className={itemClass}>
                    <div>
                        <Image
                            src="/icons/settings-gear-svgrepo-com.svg"
                            alt="Settings icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight' : 'text-base'}>
                        Settings
                    </div>
                </div>

                <div className={itemClass}>
                    <div>
                        <Image
                            src="/icons/settings-gear-svgrepo-com.svg"
                            alt="Settings icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    {/* <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight' : 'text-base'}>
                        All videos page
                    </div> */}
                    <Link href="/all-videos-page" className={isSemiCollapsed ? 'text-[12px] text-center leading-tight' : 'text-base'}>All videos page</Link>
                </div>
            </div>



        </aside>
    );
}
