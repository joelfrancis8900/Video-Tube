import Image from 'next/image';


export default function GridItemDetails() {
    return (

        <div className="flex flex-row  min-h-0">
            <div className='bg-gray-200 h-[36px] w-[36px] rounded-[18px] mt-[12px]'></div>
            <div className='pt-[17px] pl-[13px] flex flex-col'>
                <div className='truncate mb-[10px] leading-none'>Title</div>
                <div className='truncate mb-[6px] leading-none'>Channel</div>
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