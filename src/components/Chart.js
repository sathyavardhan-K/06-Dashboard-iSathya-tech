import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
// import './App.css';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
];

function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow">
        <p className="text-gray-700 font-semibold">{`${label} 2024`}</p>
        <p className="text-purple-600">{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }

  return null;
}

function Chart() {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-white p-5 rounded-xl">
      <header className="w-full max-w-2xl bg-white p-4 rounded-lg  mb-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800">Memo Report</h1>
        <div className="flex gap-2">
          <button className="px-2 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">12 Months</button>
          <button className="px-2 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">6 Months</button>
          <button className="px-2 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">30 Days</button>
          <button className="px-2 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">7 Days</button>
          <button className="px-2 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 flex items-center">
            Export PDF
          </button>
        </div>
      </header>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Legend verticalAlign="top" height={36} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
