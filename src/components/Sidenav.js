import React from 'react';
import overview from '../images/overview.svg'
import req from '../images/req.svg';
import approval from '../images/group.svg';
import business from '../images/business.svg';
import cc from '../images/mail.svg';
import Account from '../images/avatar.svg';
import Faq from '../images/faq.svg';
import Setting from '../images/settings.svg';
import Logout from '../images/logout.svg';

export default function Sidenav() {
    return(
        <>
        <div className='ml-3 mt-5'>
            <h1 className='text-gray-500'>Menu</h1>
            <ul className='ml-5 mt-3'>
                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-3 h-10 cursor-pointer'>
                    <img src={overview} alt="overview"/>
                    <li className='ml-2 -mt-1'>Overview</li>
                </div>

                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-3 h-10 cursor-pointer'>
                    <img src={req} alt="request"/>
                    <li className='ml-2 -mt-1'>My Request</li>
                </div>
                
                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-3 h-10 cursor-pointer'>
                    <img src={approval} alt="approval"/>
                    <li className='ml-2 -mt-1'>My Approval</li>
                </div>

                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-3 h-10 cursor-pointer'>
                    <img src={cc} alt="cc"/>
                    <li className='ml-2 -mt-1'>My CC</li>
                </div>

                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-5 h-10 cursor-pointer'>
                    <img src={business} alt="business"/>
                    <li className='ml-2 -mt-1'>Business Unit</li>
                </div>

            </ul>
            <h1 className='text-gray-500'>Setting</h1>
            <ul className='ml-5 mt-3'>
                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-3 h-10 cursor-pointer'>
                    <img src={Account} alt="account"/>
                    <li className='ml-2 -mt-1'>Account</li>
                </div>

                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-3 h-10 cursor-pointer'>
                    <img src={Faq} alt="faq"/>
                    <li className='ml-2 -mt-1'>Faq</li>
                </div>

                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-56 rounded-lg mb-3 h-10 cursor-pointer'>
                    <img src={Setting} alt="setting"/>
                    <li className='ml-2 -mt-1'>Settings</li>
                </div>
                </ul>
                <hr className='border-gray-300 mr-2 mt-80'/>
                <ul>
                <div className='flex flex-row border-b-0 hover:bg-gray-100 p-3 w-64 rounded-lg mb-3 h-10 cursor-pointer mt-3 items-center justify-center'>
                    <img src={Logout} alt="Logout"/>
                    <li className='ml-2 -mt-1'>Log out</li>
                </div>
                </ul>
                
        </div>
        </> 
    );
}