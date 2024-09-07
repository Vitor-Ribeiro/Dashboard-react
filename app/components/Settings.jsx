import React from 'react';
import { UploadIcon } from '@heroicons/react/outline';



export default function Settings() {

    return (
        <div className="px-40 py-10 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Settings</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> / <span className="ml-1 text-blue-600">Settings</span>
                </div>
            </div>
            <div className="flex justify-between">

                <div className="w-[55%]">
                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Personal Information</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 mr-0 shadow-md h-auto bg-white">

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-semibold mb-2">Full name</label>
                                <input
                                    type="text"
                                    className="block w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    className="block w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>


                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Email Adress </label>
                            <input
                                type="email"
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="Enter your email address"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Username</label>
                            <input
                                type="text"
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="Enter your username"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Bio</label>
                            <textarea
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                rows="4"
                                placeholder="Type your bio"
                            ></textarea>
                        </div>


                        <div className="flex gap-5 justify-end">
                            <button className="bg-white text-black border font-semibold py-3 px-6 rounded-md ">
                                Cancel
                            </button>
                            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700">
                                Save
                            </button>

                        </div>
                    </div>


                </div>


                <div className="w-full lg:w-[40%]">
                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Your Photo</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 shadow-md h-auto bg-white">

                        <div className="text-center mb-8">
                            <div className="flex">
                                <img
                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                    alt="Avatar"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div className="pl-5">
                                    <p className="font-medium mt-2">Edit your photo</p>
                                    <div className="flex space-x-2 text-sm mt-1">
                                        <span >Delete</span> <a className="hover:underline text-blue-600">Update</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="border-2 bg-blue-50 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer">
                            <UploadIcon className="w-6 h-6 ml-52 text-blue-600" />
                            <a className="hover:underline text-blue-600">Click to upload</a> <span className="ml-1">or drag and drop</span>
                            <p className="text-gray-400">
                                SVG, PNG, JPG or GIF <br /> (max, 800 X 800px)
                            </p>
                        </div>


                        <div className="flex gap-5 justify-end mt-8">
                            <button className="bg-white text-black border font-semibold py-3 px-6 rounded-md">
                                Cancel
                            </button>
                            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}