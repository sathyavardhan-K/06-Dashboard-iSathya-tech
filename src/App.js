import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from './images/notification.svg';
import Search from './images/search.svg';
import Mail from './images/mail.svg';
import Avatar from './images/profile.svg';
import Down from './images/down.svg';
import Sidenav from './components/Sidenav';
import Arrow from './images/arrow.svg';
import Middle from './components/middle';
import Last from './components/Last';

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div className="custom-container container-color border-b border rounded-lg shadow-lg grid grid-cols-2 mt-10 mb-10">
          <div className='w-72 bg-white ml-0 rounded-xl height-nav'>
            <div className='flex flex-row items-center gap-2'>
            <div className='text-white font-bold text-xl bg-indigo-600 rounded-2xl ml-5 p-3 w-10 h-10 mt-3 text-center'>
            <h1 className='-mt-2'>S</h1>
            </div>
            <h1 className='text-indigo-600 font-bold text-xl mt-3'>iSathya Tech</h1>
            
            </div>
            <button><h1 className='text-white bg-indigo-600 mt-3 ml-3 w-64 p-3 rounded-lg'>+ New Memo</h1></button>
            <Sidenav/>
          </div>
          
          <div>
              <div className='mt-3 flex justify-between items-center'>
                <div className='-ml-96'>
                    <p className='text-customGray text-sm'>Good Morning</p>
                    <h1 className='font-semibold text-lg'>Ray Rona Epiya</h1>
                </div>

                <div className="flex items-center mr-3">
                    <img src={Notification} alt="notification" className='bg-white rounded-full p-3 ml-28 cursor-pointer' />
                    <img src={Search} alt="search" className='bg-white rounded-full p-3 ml-5 cursor-pointer' />
                    <img src={Mail} alt="search" className='bg-white rounded-full p-3 ml-5 mr-5 cursor-pointer' /> 
                    
                    <div className='grid grid-cols-2 border-b-0 rounded-full bg-white w-56 p-3 h-16'>
                    
                      <img src={Avatar} alt="avatar" className='w-10'/>
                      <div className='-ml-16 cursor-pointer'>
                        <h1 className='font-bold ml-3'>Ray Rona Epiya</h1>
                        <p className='text-gray-400 ml-3'>ray@example.com</p>  
                        <img src={Down} alt="downarrow" className='ml-36 -mt-9' />
                      </div>
                    </div>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-3 -ml-96 mr-5 mt-3'>
                <div className='bg-white p-3 rounded-lg hover:bg-indigo-100'>
                  <p className='text-gray-400 text-xs'>MEMO TODAY</p>
                  <p className='font-bold text-xl'>5,359</p>
                  <div>
                    <p className='text-customGreen font-bold relative ml-60'>+23%</p><span className='absolute ml-72 -mt-5'><img src={Arrow} alt="arrow" /></span>
                  </div>
                  
                </div>
                <div className='bg-white p-3 rounded-lg hover:bg-indigo-100'>
                  <p className='text-gray-400 text-xs'>MEMO COMPLETE</p>
                  <p className='font-bold text-xl'>254,633</p>
                  <div>
                    <p className='text-customGreen font-bold relative ml-60'>+57%</p><span className='absolute ml-72 -mt-5'><img src={Arrow} alt="arrow" /></span>
                  </div>
                
                </div>
                <div className='bg-white p-3 rounded-lg hover:bg-indigo-100'>
                  <p className='text-gray-400 text-xs'>MEMO TOTAL</p>
                  <p className='font-bold text-xl'>270,763</p>
                  <div>
                    <p className='text-customGreen font-bold relative ml-60'>+18%</p><span className='absolute ml-72 -mt-5'><img src={Arrow} alt="arrow" /></span>
                  </div>
    
                </div>
              </div>
             
              <div className='grid grid-cols-2 mt-5 gap-8 -ml-96'>
                  <div className=' container-wid-one mr-30 rounded-xl grid grid-rows-2'>
                    {/* <div className='grid grid-rows-2'></div> */}
                    
                      <Middle/>
                  
                  </div>
          

                  <div className='ml-40 mr-5 container-wid-two rounded-xl grid grid-rows-2'>
                    {/* <p className="text-gray-400 text-xs">35% Width Div</p> */}
                    <Last/>
                  </div>

              </div>


          </div>

        </div>
      </div>
    </>
  );
}

export default App;
