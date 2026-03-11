import GridItem from "./grid-item"




import Image from 'next/image';

export default function Main() {
    return (

        <main className="flex-1 bg-white pl-[32px] pr-[32px] pt-[32px] grid gap-y-8 gap-x-[16px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 h-full overflow-y-auto  auto-rows-[minmax(100px, auto)] content-start">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />

            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />

            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />

        </main>

    );
}


// bg-gray-700






// grid-rows-[repeat(3,minmax(100px,auto))]