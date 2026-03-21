import Image from 'next/image';


export default function GridItemVideo({ video }: any) {
    return (

        // <div className="bg-gray-200 aspect-video rounded-xl"></div>
        <video
            src={video.videoUrl}
            className="aspect-video rounded-xl" controls
        />

    );
}