import Image from 'next/image';
import Header from '@/components/uploadPage/header';
import Main from '@/components/uploadPage/main';

export default function UploadPage() {

    return (
        <div className="flex flex-col h-screen w-full">
            <Header />
            <Main />
        </div>


    );
}