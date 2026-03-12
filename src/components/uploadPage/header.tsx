import Image from 'next/image';

export default function Header() {
    return (

        <header className='bg-white h-19 pl-6.75 pr-7.75 w-full shrink-0 border-b border-gray-200 flex flex-row items-center'>
            <div className="text-2xl text-red-600 pr-3.25">VideoTube</div>

            <div className="flex flex-col">
                <div className="font-bold">Upload videos</div>
                <div>Post a video on your channel</div>
            </div>

        </header>

    );
}