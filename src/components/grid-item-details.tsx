import Image from 'next/image';


export default function GridItemDetails() {
    return (

        <div className="flex flex-row  min-h-0">
            <div className='bg-gray-200 h-9 w-9 rounded-[18px] mt-3'></div>
            <div className='pt-4.25 pl-3.25 flex flex-col'>
                <div className='truncate mb-2.5 leading-none'>Title</div>
                <div className='truncate mb-1.5 leading-none'>Channel</div>
                <div className='flex flex-row'>
                    <div className='truncate leading-none'>Views</div>
                    {/* <div>Dot icon</div> */}
                    <div className="pl-1.5 pr-1.5 flex flex-row items-center">
                        <Image
                            src="/icons/dot-single-svgrepo-com.svg"
                            alt="Dot icon"
                            width={4}
                            height={4}
                        /></div>

                    <div className='truncate leading-none'>Date</div>
                </div>

            </div>

        </div>


    );
}

// h-[74px]