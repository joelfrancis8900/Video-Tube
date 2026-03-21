'use client';
import Image from 'next/image';

export default function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        /* The container handles visibility and z-index */
        <div className={`fixed inset-0 z-[100] sm:hidden transition-all duration-300 ${isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
            }`}>

            {/* 1. Dark Backdrop Overlay */}
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            <aside className={`absolute top-0 left-0 h-full w-60 bg-white border-r border-gray-200 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center h-19 px-6.75 border-b border-gray-200">
                    <button
                        onClick={onClose}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <Image
                            src="/icons/menu-svgrepo-com-space-removed.svg"
                            alt="Close menu"
                            width={18}
                            height={18}
                        />
                    </button>
                    <div className="ml-[27px] text-2xl text-red-600">VideoTube</div>
                </div>




                <div className="pb-[12px] pt-[10px] border-gray-200 border-b-[1px] flex flex-col gap-[1px]">
                    {/* previous classes for image second parent div */}
                    <div className={'flex cursor-pointer rounded-lg pt-[11px] pb-[11px] transition-all transition-colors duration-300 hover:bg-gray-100 flex-row items-center gap-[25px] pl-[25px]'}>
                        <div>
                            <Image
                                src="/icons/icons8-home-no-white-space.svg"
                                alt="Home icon"
                                width={18}
                                height={18}
                            />
                        </div>
                        <div className={'text-base'}>
                            Home
                        </div>

                    </div>

                    <div className={'flex cursor-pointer rounded-lg pt-[11px] pb-[11px] transition-all transition-colors duration-300 hover:bg-gray-100 flex-row items-center gap-[25px] pl-[25px]'}>
                        <div>
                            <Image
                                src="/icons/notification-bell-svgrepo-com-space-removed.svg"
                                alt="Notification bell icon"
                                width={18}
                                height={18}
                            />
                        </div>
                        <div className={'text-base'}>
                            Notifications
                        </div>

                    </div>

                    <div className={'flex cursor-pointer rounded-lg pt-[11px] pb-[11px] transition-all transition-colors duration-300 hover:bg-gray-100 flex-row items-center gap-[25px] pl-[25px]'}>
                        <div>
                            <Image
                                src="/icons/icons8-plus.svg"
                                alt="Plus icon for upload"
                                width={18}
                                height={18}
                            />
                        </div>
                        <div className={'text-base'}>
                            Upload
                        </div>

                    </div>

                </div>





                <div className="pb-[12px] pt-[10px] border-gray-200  flex flex-col gap-[1px]">

                    <div className={'flex cursor-pointer rounded-lg pt-[11px] pb-[11px] transition-all transition-colors duration-300 hover:bg-gray-100 flex-row items-center gap-[25px] pl-[25px]'}>
                        <div>
                            <Image
                                src="/icons/settings-gear-svgrepo-com.svg"
                                alt="Settings icon"
                                width={18}
                                height={18}
                            />
                        </div>
                        <div className={'text-base'}>
                            Settings
                        </div>

                    </div>

                </div>

            </aside>
        </div>
    );
}

















// Google ai mode sidebar:

{/* <aside className={`absolute top-0 left-0 h-full w-[240px] bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

   
    <div className="flex items-center h-[76px] px-[27px] border-b border-gray-200">
        <button
            onClick={onClose}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
        >
            <Image
                src="/icons/menu-svgrepo-com-space-removed.svg" 
                alt="Close menu"
                width={18}
                height={18}
            />
        </button>
        <div className="ml-[27px] text-2xl text-red-600">VideoTube</div>
    </div>

    
    <nav className="p-2 flex flex-col gap-1">
        <div className="flex items-center gap-[25px] pl-[25px] py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Image
                src="/icons/icons8-home-no-white-space.svg"
                alt="Home icon"
                width={18}
                height={18}
            />
            <span className="text-sm">Home</span>
        </div>
        
    </nav>
</aside> */}