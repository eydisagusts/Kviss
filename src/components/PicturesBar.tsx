import type React from 'react';
import Image from 'next/image';

export const PicturesBar: React.FC = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-[#119DBF] shadow-xl shadow-blue-900'>
            <div className='grid grid-cols-2 gap-2 p-4'>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/aegirmynd.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900' />
                </div>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/forrettir.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                </div>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/kaffi.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                </div>
                <div className='relative w-[500px] h-[300px]'>
                    <Image src="/images/kaldi.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                </div>
            </div>
        </div>
    );
};