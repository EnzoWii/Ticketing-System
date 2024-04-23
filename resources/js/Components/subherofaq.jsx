import React from 'react';
import projector from '@/Components/images/Assets.jpg';
import account from '@/Components/images/Accounts.jpg';
import internet from '@/Components/images/Internet.jpeg';
import technical from '@/Components/images/Technical.jpg';

function SubHeroFAQ() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold">TICKETS</h1>
        <p className="text-sm">TRACK YOUR SENT TICKETS HERE</p>
      </header>

      {/* Search bar */}
      <div className="flex justify-center mt-8 mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search an Article"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-lg"
          />
          <button className="absolute inset-y-0 right-0 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none text-lg">
            Search
          </button>
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <a href="#" className="block">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img src={projector} alt="Assets" className="w-64 h-64 mx-auto mb-4 cursor-pointer" />
            <h2 className="text-3xl font-bold mb-2">Assets</h2>
          </div>
        </a>
        <a href="#" className="block">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img src={internet} alt="Network" className="w-64 h-64 mx-auto mb-4 cursor-pointer" />
            <h2 className="text-3xl font-bold mb-2">Network</h2>
          </div>
        </a>
        <a href="#" className="block">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img src={technical} alt="Technical" className="w-64 h-64 mx-auto mb-4 cursor-pointer" />
            <h2 className="text-3xl font-bold mb-2">Technical</h2>
          </div>
        </a>
        <a href="#" className="block">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img src={account} alt="Accounts" className="w-64 h-64 mx-auto mb-4 cursor-pointer" />
            <h2 className="text-3xl font-bold mb-2">Accounts</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SubHeroFAQ;
