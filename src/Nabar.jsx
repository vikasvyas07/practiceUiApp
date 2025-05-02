// import React from 'react';

// const Nabar = () => {
//   return (
//     <nav className='bg-white shadow-md p-4 w-full'>
//      <div className=' container flex flex-col md:flex-row justify-around items-center mx-auto '>
//       <div className='font-bold text-xl text-blue-600'>
//         My Logo
//       </div>
//       <ul className='flex space-x-6 text-gray-600 font-medium'>
//         <li className='hover:text-blue-300 cursor-pointer'>
//             Home
//         </li >
//         <li className='hover:text-blue-300 cursor-pointer'>
//             about
//         </li>
//         <li className='hover:text-blue-300 cursor-pointer'>
//             contact
//         </li>
//       </ul>
//       <div className='bg-green-50'>
//         <input
//         type='text'
//         placeholder='search here'
//         className="px-4 py-2 border border-grey-300 rounded-md fucus:outline-none  "

//         />
//       </div>
//      </div>
//     </nav>
//   );
// }

// export default Nabar;

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl text-blue-600">My Logo</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
          <input
            type="text"
            placeholder="Search here"
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
