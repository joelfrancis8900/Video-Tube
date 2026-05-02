import Image from 'next/image';
import GridItemVideo from "./grid-item-video"
import GridItemDetails from "./grid-item-details"
import Link from "next/link";

export default function GridItem({ video }: any) {
    return (
        <Link
            href={`/watch-page/${video.id}`}
            className="block"
            draggable={false} // Prevents the ghosting rectangle
            onDragStart={(e) => e.preventDefault()} // Extra safety for Firefox/Safari
        >
            <div>
                <GridItemVideo video={video} />
                <GridItemDetails video={video} />
            </div>
        </Link>
    );
}
