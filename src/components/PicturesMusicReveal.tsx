import type React from 'react';
import Image from 'next/image';

export const PicturesMusicReveal: React.FC = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-[#119DBF] shadow-md shadow-blue-700'>
            <div className='grid grid-cols-2 gap-16 p-4'>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/tune.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-2xl shadow-2xl shadow-blue-900' />
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Tónn</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/list.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>List</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/mynd.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Mynd</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/band.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Band</p>
                </div>
            </div>
            <p className='text-white text-4xl mt-10 mb-10 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Tónlistarmyndband</p>
        </div>
    );
};