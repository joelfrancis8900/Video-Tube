import Image from 'next/image';

export default function Header({ onToggle }: { onToggle: () => void }) {
    return (

        <header className="bg-white h-[76px] pl-[27px] pr-[31px] w-full shrink-0 border-b border-gray-200 flex flex-row items-center justify-between">
            {/* Group 1: Logo & Menu */}
            <div className="flex flex-row items-center shrink">
                <Image
                    src="/icons/menu-svgrepo-com-space-removed.svg"
                    alt="Menu"
                    width={18}
                    height={18}
                    onClick={onToggle}
                />
                <div className="ml-[27px] text-2xl text-red-600">VideoTube</div>
            </div>

            {/* Group 2: Search Bar */}
            <div className="flex flex-row flex-grow max-w-[672px] justify-center">
                <input
                    type="search"
                    placeholder="Search"
                    className="w-full p-2 border border-gray-300 rounded-l-[21px] focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 w-[68px] flex flex-row justify-center items-center border-gray-300 transition-colors border-t border-r border-b hover:bg-gray-50 text-white rounded-r-[21px]">
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
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors rounded-full flex flex-nowrap flex-row whitespace-nowrap">
                    Sign in
                </button>
            </div>
        </header>

    );
}


// bg-blue-500
// left header | basis-[632px]
// basis-[672px] | middle header