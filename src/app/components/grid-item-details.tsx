import Image from 'next/image';


export default function GridItemDetails() {
    return (

        <div className="flex flex-row h-[74px]">
            <div className='bg-gray-200 h-[36px] w-[36px] rounded-[18px] mt-[12px]'></div>
            <div className='pt-[17px] pl-[13px] flex flex-col'>
                <div>Title</div>
                <div>Channel</div>
                <div className='flex flex-row'>
                    <div>Views</div>
                    {/* <div>Dot icon</div> */}
                    <Image
                        src="/icons/dot-single-svgrepo-com.svg"
                        alt="Dot icon"
                        width={4}
                        height={4}
                    />
                    <div>Date</div>
                </div>

            </div>

        </div>


    );
}