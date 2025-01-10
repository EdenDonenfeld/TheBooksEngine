import React from 'react';
import logo from '../logo-books.png';

function Home() {
  return (
    <div className="bg-babyBlue h-screen flex flex-col">
      <header className="bg-darkerBlue py-5 flex items-center justify-center space-x-4 px-10">
        <h1 className="text-white text-4xl font-croissant tracking-wider">
          The Books Engine
        </h1>
        <img src={logo} className="h-12" alt="logo" />
      </header>

      <main className="flex-1 flex flex-col items-center py-16 font-crimson">
        <p className="text-2xl text-black tracking-wider font-medium mb-6">
          Search for book name or author
        </p>

        <div className="flex items-center space-x-4 mt-4">
          <input
            type="text"
            className="text-lg border border-gray-300 px-4 py-2 rounded-lg h-12 w-96 focus:outline-none focus:ring-2 focus:ring-borderBlue focus:border-borderBlue"
            placeholder="Search for books"
          />
          <button
            className="bg-darkerBlue text-white px-4 py-2 rounded-lg"
            type="button"
          >
            <svg
              class="w-4 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </main>
      <footer className="py-5 text-center text-black text-sm font-crimson">
        <p>Created by @EdenDonenfeld</p>
        <p>&copy; 2025 The Books Engine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
