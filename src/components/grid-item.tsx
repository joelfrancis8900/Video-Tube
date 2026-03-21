import Image from 'next/image';
import GridItemVideo from "./grid-item-video"
import GridItemDetails from "./grid-item-details"

export default function GridItem({ video }: any) {
    return (

        <div>
            <GridItemVideo video={video} />
            <GridItemDetails video={video} />
        </div>

    );
}


