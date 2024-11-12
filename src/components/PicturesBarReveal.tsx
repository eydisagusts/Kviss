import type React from 'react';
import Image from 'next/image';

export const PicturesBarReveal: React.FC = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-[#119DBF] shadow-md shadow-blue-700'>
            <div className='grid grid-cols-2 gap-16 p-4'>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/aegirmynd.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-2xl shadow-2xl shadow-blue-900' />
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Ægir Bar</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/forrettir.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Forréttabarinn/Matbar</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/kaffi.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Kaffibarinn</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[400px] h-[230px]'>
                        <Image src="/images/kaldi.jpeg" alt="Bar Pictures" layout="fill" objectFit="cover" className='border-2 border-blue-900 rounded-xl shadow-2xl shadow-blue-900'/>
                    </div>
                    <p className='text-white text-2xl mt-8 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Kaldibar</p>
                </div>
            </div>
            <p className='text-white text-4xl mt-10 mb-10 border border-blue-800 bg-blue-600 rounded-xl px-4 shadow-lg shadow-blue-500 '>Nöfn á Börum</p>
        </div>
    );
};