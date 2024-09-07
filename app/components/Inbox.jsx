import React from 'react';
import { DownloadIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/outline';
import { ClockIcon } from '@heroicons/react/outline';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { PencilIcon } from '@heroicons/react/outline';
import { ShieldExclamationIcon } from '@heroicons/react/outline';
import { TrashIcon } from '@heroicons/react/outline';
import { RefreshIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon } from '@heroicons/react/outline';




export default function Inbox() {

    return (
        <div className="p-8 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Inbox</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> /
                    <span className="ml-1 text-blue-600">Inbox</span>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col border border-gray-200">
                <div className="flex -mx-4">

                    <div className="w-1/4 px-4 border-r border-gray-200">
                        <button className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg mb-4">
                            Compose
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer">
                                <DownloadIcon className="w-6 h-6 " />
                                <h3 className="text-md font-semibold text-blue-600">Inbox</h3>
                            </div>

                            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                                <StarIcon className="w-6 h-6 " />
                                <h3 className="text-md font-semibold text-gray-600">Starred</h3>
                            </div>

                            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                                <ClockIcon className="w-6 h-6 " />
                                <h3 className="text-md font-semibold text-gray-600">Snoozed</h3>
                            </div>

                            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                                <PaperAirplaneIcon className="w-6 h-6 transform rotate-90" />
                                <h3 className="text-md font-semibold text-gray-600">Sent</h3>
                            </div>

                            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                                <PencilIcon className="w-6 h-6" />
                                <h3 className="text-md font-semibold text-gray-600">Drafts</h3>
                            </div>

                            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                                <ShieldExclamationIcon className="w-6 h-6" />
                                <h3 className="text-md font-semibold text-gray-600">Spam</h3>
                            </div>

                            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                                <TrashIcon className="w-6 h-6" />
                                <h3 className="text-md font-semibold text-gray-600">Trash</h3>
                            </div>
                        </div>
                    </div>



                    <div className="flex-1 px-4">
                        <div className="mb-4">

                            <div className="pb-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 ml-2" />
                                        <TrashIcon className="h-4 w-4" />
                                        <RefreshIcon className="h-4 w-4" />
                                        <DotsHorizontalIcon className="h-4 w-4" />

                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2.25-5.25a6 6 0 11-12 0 6 6 0 0112 0z" />
                                        </svg>
                                        <input type="text" placeholder="Search" className="form-input w-full max-w-xs border-gray-300 rounded-lg pl-8 pr-4 py-2" />
                                    </div>
                                </div>

                            </div>

                            <div className="border-b border-gray-200 -mx-4"></div>
                        </div>
                        <div className="mb-4">

                            <div className="pb-1">
                                <div className="flex items-center justify-between">
                                    <table className="min-w-full bg-white border-collapse">
                                        <thead >
                                            <tr>
                                                <th className="w-10 p-2 text-left">
                                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                                </th>
                                                <th className="p-2 text-left">Sender</th>
                                                <th className="p-2 pr-8 text-left">Subject</th>
                                                <th className="p-2 text-right">Date</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                            </div>

                            <div className="border-b border-gray-200 -mx-4"></div>
                            <table className="min-w-full bg-white border-collapse">
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="w-10 p-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                        </td>
                                        <td className="p-2 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="#FFD02C"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.407 4.33a1 1 0 00.95.69h4.576c.969 0 1.371 1.24.588 1.81l-3.702 2.683a1 1 0 00-.364 1.118l1.408 4.33c.3.921-.755 1.688-1.538 1.118l-3.702-2.683a1 1 0 00-1.175 0l-3.702 2.683c-.783.57-1.838-.197-1.538-1.118l1.407-4.33a1 1 0 00-.364-1.118l-3.702-2.683c-.783-.57-.38-1.81.588-1.81h4.576a1 1 0 00.95-.69l1.407-4.33z" />
                                            </svg>
                                            <span className="ml-2">Musharof Chowdhury</span>
                                        </td>
                                        <td className="p-2">Some note & Lorem Ipsum in some form.</td>
                                        <td className="p-2 text-right">17 Oct, 2024</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-blue-50">
                                        <td className="w-10 p-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
                                        </td>
                                        <td className="p-2 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="#DFE3F0"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.407 4.33a1 1 0 00.95.69h4.576c.969 0 1.371 1.24.588 1.81l-3.702 2.683a1 1 0 00-.364 1.118l1.408 4.33c.3.921-.755 1.688-1.538 1.118l-3.702-2.683a1 1 0 00-1.175 0l-3.702 2.683c-.783.57-1.838-.197-1.538-1.118l1.407-4.33a1 1 0 00-.364-1.118l-3.702-2.683c-.783-.57-.38-1.81.588-1.81h4.576a1 1 0 00.95-.69l1.407-4.33z" />
                                            </svg>
                                            <span className="ml-2">Naimur Rahman</span>
                                        </td>
                                        <td className="p-2">Lorem Ipsum alteration in some form.</td>
                                        <td className="p-2 text-right">25 Nov, 2024</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="w-10 p-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                        </td>
                                        <td className="p-2 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="#DFE3F0"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.407 4.33a1 1 0 00.95.69h4.576c.969 0 1.371 1.24.588 1.81l-3.702 2.683a1 1 0 00-.364 1.118l1.408 4.33c.3.921-.755 1.688-1.538 1.118l-3.702-2.683a1 1 0 00-1.175 0l-3.702 2.683c-.783.57-1.838-.197-1.538-1.118l1.407-4.33a1 1 0 00-.364-1.118l-3.702-2.683c-.783-.57-.38-1.81.588-1.81h4.576a1 1 0 00.95-.69l1.407-4.33z" />
                                            </svg>
                                            <span className="ml-2">Shafiq Hammad</span>
                                        </td>
                                        <td className="p-2">Lorem available alteration in some form.</td>
                                        <td className="p-2 text-right">25 Nov, 2024</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="w-10 p-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                        </td>
                                        <td className="p-2 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="#DFE3F0"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.407 4.33a1 1 0 00.95.69h4.576c.969 0 1.371 1.24.588 1.81l-3.702 2.683a1 1 0 00-.364 1.118l1.408 4.33c.3.921-.755 1.688-1.538 1.118l-3.702-2.683a1 1 0 00-1.175 0l-3.702 2.683c-.783.57-1.838-.197-1.538-1.118l1.407-4.33a1 1 0 00-.364-1.118l-3.702-2.683c-.783-.57-.38-1.81.588-1.81h4.576a1 1 0 00.95-.69l1.407-4.33z" />
                                            </svg>
                                            <span className="ml-2">Alex Semuyel</span>
                                        </td>
                                        <td className="p-2">Lorem Ipsum available in form.</td>
                                        <td className="p-2 text-right">25 Nov, 2024</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="w-10 p-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                        </td>
                                        <td className="p-2 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="#DFE3F0"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.407 4.33a1 1 0 00.95.69h4.576c.969 0 1.371 1.24.588 1.81l-3.702 2.683a1 1 0 00-.364 1.118l1.408 4.33c.3.921-.755 1.688-1.538 1.118l-3.702-2.683a1 1 0 00-1.175 0l-3.702 2.683c-.783.57-1.838-.197-1.538-1.118l1.407-4.33a1 1 0 00-.364-1.118l-3.702-2.683c-.783-.57-.38-1.81.588-1.81h4.576a1 1 0 00.95-.69l1.407-4.33z" />
                                            </svg>
                                            <span className="ml-2">Jhon Smith</span>
                                        </td>
                                        <td className="p-2">available alteration in some Ipsum</td>
                                        <td className="p-2 text-right">25 Nov, 2024</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>





                        <div className="pt-10 relative">
                            <div className="border-t border-gray-200 -mx-4 mb-4"></div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">
                                    1-5 of 29
                                </span>
                                <div className="flex items-center space-x-2">
                                    <button className="bg-white text-gray-500 border border-gray-300 rounded-lg p-2 hover:bg-gray-100 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}