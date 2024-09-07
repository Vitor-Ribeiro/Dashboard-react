import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { PaperClipIcon } from '@heroicons/react/outline';
import { EmojiHappyIcon } from '@heroicons/react/outline';

export default function Message() {
    return (
        <div className="p-4 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Message</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> /
                    <span className="ml-1 text-blue-600">Messages</span>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col border border-gray-200">
                <div className="flex -mx-4">

                    <div className="w-1/4 px-4 border-r border-gray-200">
                        <div className="mb-4">
                            <div className="flex justify-between items-center pt-3">
                                <h2 className="text-2xl font-semibold">Active Conversations</h2>
                                <span className="bg-blue-600 text-white text-xs font-bold rounded-full px-2 py-1">4</span>
                            </div>
                            <div className="border-b pb-9 border-gray-200 -mx-4"></div>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none"
                            />
                            <div className="absolute right-3 top-3 text-gray-500">

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
                        </div>
                        <div className="space-y-4">

                            {["Henry Dholi", "Mariya Desoja", "Robert Jhon", "Cody Fisher", "Cristofer Donin", "Marcus Siphorn"].map((name, index) => (
                                <div key={index} className="flex items-center space-x-3 p-2 hover:bg-blue-100 cursor-pointer rounded-lg">
                                    <img
                                        src={`https://randomuser.me/api/portraits/thumb/men/${index + 1}.jpg`}
                                        alt={name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold">{name}</h3>
                                        <p className="text-xs text-gray-500">Last message preview...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex-1 px-4">
                        <div className="mb-4">

                            <div className="pb-4">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/1.jpg"
                                        alt="Henry Dholi"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">Henry Dholi</h3>
                                        <p className="text-sm text-gray-500">Reply to message</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-200 -mx-4"></div>
                        </div>


                        <div className="space-y-4 overflow-auto mb-4 flex-1">
                            <div className="flex flex-col space-y-2">
                                <div className="bg-gray-200 text-sm text-gray-800 p-3 rounded-lg max-w-xs">
                                    I want to make an appointment tomorrow from 2:00 to 5:00pm?
                                </div>
                                <span className="text-xs text-gray-500 self-start">1:55pm</span>
                            </div>
                            <div className="flex flex-col space-y-2 self-end">
                                <div className="bg-blue-600 text-white text-sm p-3 rounded-lg max-w-xs self-end">
                                    Hello, Thomas! I will check the schedule and inform you
                                </div>
                                <span className="text-xs text-gray-500 self-end">1:58pm</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="bg-gray-200 text-sm text-gray-800 p-3 rounded-lg max-w-xs">
                                    Ok, Thanks for your reply.
                                </div>
                                <span className="text-xs text-gray-500 self-start">1:59pm</span>
                            </div>
                            <div className="flex flex-col space-y-2 self-end">
                                <div className="bg-blue-600 text-white text-sm p-3 rounded-lg max-w-xs self-end">
                                    You are welcome!
                                </div>
                                <span className="text-xs text-gray-500 self-end">2:00pm</span>
                            </div>
                        </div>


                        <div className="pt-10 relative">
                            <div className="border-t border-gray-200 -mx-4 mb-4"></div>
                            <div className="flex items-center space-x-3">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Type something here..."
                                        className="w-full px-3 py-2 h-12 border border-gray-300 rounded-lg pr-20 focus:outline-none"
                                    />
                                    <div className="absolute right-10 top-3 text-gray-500">
                                        <PaperClipIcon className="w-5 h-5" />
                                    </div>
                                    <div className="absolute right-3 top-3 text-gray-500">
                                        <EmojiHappyIcon className="w-5 h-5" />
                                    </div>

                                </div>
                                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                                    <PaperAirplaneIcon className="w-6 h-6 transform rotate-90" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
