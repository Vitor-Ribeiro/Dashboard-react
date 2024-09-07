import React, { useState } from 'react';
import { Switch } from '@headlessui/react'


const ToggleIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleDropdown} style={{ cursor: "pointer" }}>
      {isOpen ? (

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      ) : (

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )}
    </div>
  );
};

const ThemeSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`group relative inline-flex h-9 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${enabled ? 'bg-indigo-600' : 'bg-gray-200'}`}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={`pointer-events-none relative inline-block h-8 w-10 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${enabled ? 'opacity-0' : 'opacity-100'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4V2m0 20v-2m4.22-12.22l1.42-1.42M6.34 17.66l-1.42-1.42M20 12h2m-2 0a8 8 0 11-16 0 8 8 0 0116 0zm-1.78 5.78l1.42 1.42M6.34 6.34l-1.42 1.42M4 12H2"
            />
          </svg>
        </span>
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${enabled ? 'opacity-100' : 'opacity-0'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c.132 0 .263.003.393.01A9.002 9.002 0 0021 12.607 7.5 7.5 0 1112 3z"
            />
          </svg>
        </span>
      </span>
    </Switch>
  );
};

export default function Navbar() {

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">

      <div className="flex-1 max-w-sm">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 016.65 13.15z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>


      <div className="flex items-center space-x-2">
        <div className="relative pr-8">
          <ThemeSwitch />
        </div>
        <div className="relative pr-4">
          <button className="text-gray-600 p-2 bg-gray-100 rounded-full hover:text-gray-800 focus:outline-none ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bell"
            >
              <path d="M18 8a6 6 0 1 0-12 0c0 7.66-3 10-3 10h18s-3-2.34-3-10"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
        </div>

        <div className="relative pr-12">
          <button className="text-gray-600 p-2 bg-gray-100 rounded-full hover:text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.5 8.5 0 0 1 8.5 8.5z"></path>
            </svg>

          </button>
        </div>


        <div className="flex items-center ml-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">Thomas Anwar</p>
            <p className="text-xs text-gray-500">UX Designer</p>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full ml-2"
          />
        </div>


        <div className="ml-4">
          <ToggleIcon />
        </div>
      </div>
    </div>
  );
}