import React from 'react';

function Table() {
  const data = [
    { no: 1, name: 'Annual Budget Review and Adjustments', date: '2/19/24', status: 'In Progress' },
    { no: 2, name: 'Quarterly Financial Performance Analysis', date: '5/7/24', status: 'In Progress' },
    { no: 3, name: 'Expense Reduction Strategies for Q4', date: '9/18/24', status: 'Completed' },
    { no: 4, name: 'Cash Flow Management Best Practices', date: '2/11/24', status: 'Completed' },
    { no: 5, name: 'Year-End Tax Planning and Compliance', date: '9/18/24', status: 'Completed' },
  ];

  const getStatusClass = (status) => {   
    switch (status) {
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Memo</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">NO</th>
              <th className="py-3 px-6 text-left">MEMO NAME</th>
              <th className="py-3 px-6 text-center">DATE</th>
              <th className="py-3 px-6 text-center">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-black text-sm font-light">
            {data.map((item) => (
              <tr className="border-b border-gray-200 hover:bg-gray-100" key={item.no}>
                <td className="py-3 px-6 text-left">{item.no}</td>
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-center">{item.date}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
