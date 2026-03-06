import Image from 'next/image';

export default function Header() {
    return (

        <header className="bg-blue-500 h-[76px] pl-[27px] pr-[31px] w-full shrink-0 border-b border-gray-200 flex flex-row items-center">
            {/* Group 1: Logo & Menu */}
            <div className="flex flex-row basis-[632px] shrink">
                <Image
                    src="/icons/menu-svgrepo-com-space-removed.svg"
                    alt="Menu"
                    width={24}
                    height={24}
                />
                <div className="ml-[27px]">VideoTube</div>
            </div>

            {/* Group 2: Search Bar */}
            <div className="flex flex-row basis-[672px] justify-start">
                <input
                    type="search"
                    placeholder="Search..."
                    className="flex-grow p-2 border rounded-md"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Search
                </button>
            </div>

            {/* Group 3: Sign In */}
            <div className="flex flex-row justify-end grow">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex flex-nowrap flex-row whitespace-nowrap">
                    Sign in
                </button>
            </div>
        </header>

    );
}