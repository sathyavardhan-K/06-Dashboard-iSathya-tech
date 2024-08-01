import React from 'react';
import Chart from './Chart';
import Table from './Table';

export default function Middle() {
    return(
        <>

            <div className='rounded-lg container-wid-one h-96 mb-2 '>
                <Chart/>
            </div>
            <div className='bg-white rounded-lg container-wid-one h-96'>
                 <Table/>
            </div>
    
        </>
    );
}