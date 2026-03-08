import Image from 'next/image';

export default function Aside() {
    return (

        <aside className="w-[240px] bg-white shrink-0 border-r border-gray-200 ">
            <div className="pb-[12px] pt-[10px] border-gray-200 border-b-[1px] flex flex-col gap-[1px]">

                <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
                    <div>
                        <Image
                            src="/icons/icons8-home-no-white-space.svg"
                            alt="Home icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div>
                        Home
                    </div>

                </div>

                <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
                    <div>
                        <Image
                            src="/icons/notification-bell-svgrepo-com-space-removed.svg"
                            alt="Notification bell icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div>
                        Notifications
                    </div>

                </div>

                <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
                    <div>
                        <Image
                            src="/icons/icons8-plus.svg"
                            alt="Plus icon for upload"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div>
                        Upload
                    </div>

                </div>

            </div>





            <div className="pb-[12px] pt-[10px] border-gray-200  flex flex-col gap-[1px]">

                <div className='pl-[25px] flex flex-row items-center gap-[25px] hover:bg-gray-100 pt-[11px] pb-[11px] rounded-lg transition-colors'>
                    <div>
                        <Image
                            src="/icons/icons8-home-no-white-space.svg"
                            alt="Settings icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div>
                        Settings
                    </div>

                </div>

            </div>

        </aside>

    );
}




// bg-gray-500
// border-b-[1px]