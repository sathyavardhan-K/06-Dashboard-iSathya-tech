import React from 'react';
import CategoryMemo from './CategoryMemo';
import Mailpic from '../images/final.png';
import Exit from '../images/exit.svg';

export default function Last() {
    return(
        <>
            <div className='rounded-lg container-wid-two h-96 mb-3'>
                <CategoryMemo/>
            </div>

            <div className='bg-white rounded-lg container-wid-two h-96'>
                <div>
                    <h1 className='text-2xl font-bold p-3'>Learn and Watch Our Memo Creation Tutorials!</h1>
                    <img src={Mailpic} alt="pic" className='ml-20 w-48 h-48'/>
                    <div className='grid grid-cols-2'>
                        <div className='ml-5 w-40'>
                            <h1 className='font-bold text-2xl'>10,542</h1>
                            <p className='text-sm text-gray-500'>Total video and article Updated weekly</p>
                        </div>
                        <div className='ml-3 mt-7 border border-gray-300 rounded-lg mr-5 hover:bg-gray-100'>
                            <button className='relative mt-2 mr-5 '>Learn more <img src={Exit} alt="exit" className='-mt-5 ml-28' /></button>
                        </div>
                    </div>

                </div>
                 
            </div>

        </>
    );
}