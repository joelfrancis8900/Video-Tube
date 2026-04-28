import Image from 'next/image';
import GridItemVideo from "./grid-item-video"
import GridItemDetails from "./grid-item-details"
import Link from "next/link"; // ✅ ADDED

export default function GridItem({ video }: any) {
    return (
        // ✅ ADDED
        <Link href={`/watch-page/${video.id}`} className="block">
            <div>
                <GridItemVideo video={video} />
                <GridItemDetails video={video} />
            </div>
        </Link>
    );
}


