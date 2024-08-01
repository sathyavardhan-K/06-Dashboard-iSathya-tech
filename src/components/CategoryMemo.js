import React from 'react';

import '../App.css';


import Down from '../images/down.svg';
const categories = [
  { name: 'General', value: 143382 },
  { name: 'Finance', value: 87974 },
  { name: 'Business', value: 45211 },
  { name: 'IT Information', value: 21893 },
  { name: 'Other', value: 10452 },
];

const CategoryMemo = () => {
  const total = categories.reduce((acc, category) => acc + category.value, 0);

  return (
    <div className="bg-white p-4 rounded-lg category-memo">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Category Memo</h2>
        <span className="text-sm text-gray-500 relative">Last 7 Days <span><img src={Down} alt="arrow" className='ml-20 -mt-5' /></span></span>
      </div>
      {categories.map((category) => (
        <div key={category.name} className="mb-2">
          <div className="flex justify-between">
            <span>{category.name}</span>
            <span>{category.value.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${(category.value / total) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryMemo;
