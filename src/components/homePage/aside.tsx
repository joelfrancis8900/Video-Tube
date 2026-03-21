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
                    <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight truncate px-1' : 'text-base'}>
                        Home
                    </div>

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
                    <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight truncate px-1' : 'text-base'}>
                        Upload
                    </div>

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
                    <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight' : 'text-base'}>
                        Temporary links below
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
                    <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight' : 'text-base'}>
                        <Link href="upload">Upload page</Link>
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
                    <div className={isSemiCollapsed ? 'text-[12px] text-center leading-tight' : 'text-base'}>
                        <Link href="all-videos">All videos page</Link>
                    </div>
                </div>

            </div>



        </aside>
    );
}

// Google ai mode sidebar:
// <aside className={`${isCollapsed ? 'w-[80px]' : 'w-[240px]'} bg-white shrink-0 border-r border-gray-200 transition-all duration-300`}>
//     <div className="pb-[12px] pt-[10px] border-gray-200 border-b-[1px] flex flex-col gap-[1px]">

//         {/* Sidebar Item */}
//         <div className={`flex ${isCollapsed ? 'flex-col justify-center gap-1 px-0' : 'flex-row items-center gap-[25px] pl-[25px]'} hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors cursor-pointer`}>
//             <div className="flex justify-center">
//                 <Image src="/icons/icons8-home-no-white-space.svg" alt="Home" width={18} height={18} />
//             </div>
//             <div className={`${isCollapsed ? 'text-[10px] text-center' : 'text-base'}`}>
//                 Home
//             </div>
//         </div>

//         {/* Repeat logic for other items... */}

//     </div>
// </aside>


// bg-gray-500
// border-b-[1px]


// original sidebar here:
// <aside className="w-[240px] bg-white shrink-0 border-r border-gray-200 ">
//     <div className="pb-[12px] pt-[10px] border-gray-200 border-b-[1px] flex flex-col gap-[1px]">

//         <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
//             <div>
//                 <Image
//                     src="/icons/icons8-home-no-white-space.svg"
//                     alt="Home icon"
//                     width={18}
//                     height={18}
//                 />
//             </div>
//             <div>
//                 Home
//             </div>

//         </div>

//         <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
//             <div>
//                 <Image
//                     src="/icons/notification-bell-svgrepo-com-space-removed.svg"
//                     alt="Notification bell icon"
//                     width={18}
//                     height={18}
//                 />
//             </div>
//             <div>
//                 Notifications
//             </div>

//         </div>

//         <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
//             <div>
//                 <Image
//                     src="/icons/icons8-plus.svg"
//                     alt="Plus icon for upload"
//                     width={18}
//                     height={18}
//                 />
//             </div>
//             <div>
//                 Upload
//             </div>

//         </div>

//     </div>





//     <div className="pb-[12px] pt-[10px] border-gray-200  flex flex-col gap-[1px]">

//         <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
//             <div>
//                 <Image
//                     src="/icons/icons8-home-no-white-space.svg"
//                     alt="Settings icon"
//                     width={18}
//                     height={18}
//                 />
//             </div>
//             <div>
//                 Settings
//             </div>

//         </div>

//     </div>

// </aside>