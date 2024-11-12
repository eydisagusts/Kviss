import type React from 'react';
import Image from 'next/image';

export const PicturesMusic: React.FC = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-[#119DBF] shadow-xl shadow-blue-900'>
            <div className='grid grid-cols-2 gap-2 p-4'>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/tune.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900' />
                </div>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/list.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                </div>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/mynd.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                </div>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/band.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                </div>
            </div>
        </div>
    );
};

export default PicturesMusic;