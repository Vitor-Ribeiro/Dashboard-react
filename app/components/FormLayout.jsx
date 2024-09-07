import React from 'react';
import { useState } from 'react'
import { Switch } from '@headlessui/react'



export default function FormLayout() {

    return (
        <div className="p-8 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Form Layout</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> / <span className="ml-1 text-blue-600">Form Layout</span>
                </div>
            </div>

            <div className="flex justify-between">

                <div className="w-[49%]">
                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Contact Form</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 mr-0 shadow-md h-auto bg-white">

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-semibold mb-2">First name</label>
                                <input
                                    type="text"
                                    className="block w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Last name</label>
                                <input
                                    type="text"
                                    className="block w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>


                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="Enter your email address"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Subject</label>
                            <select className="block w-full p-3 border border-gray-300 rounded-md">
                                <option>Select subject</option>
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Feedback</option>
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Message</label>
                            <textarea
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                rows="4"
                                placeholder="Type your message"
                            ></textarea>
                        </div>


                        <div className="text-center">
                            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 w-full">
                                Send Message
                            </button>
                        </div>
                    </div>


                </div>


                <div className="w-full lg:w-[48%]">

                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Sign In Form</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 shadow-md h-auto bg-white">

                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="Enter your email address"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                className="block w-full p-3 border border-gray-300 rounded-md"
                                placeholder="Enter password"
                            />
                        </div>


                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember-me" className="mr-2" />
                                <label htmlFor="remember-me" className="text-gray-600">Remember me</label>
                            </div>
                            <a href="#" className="text-blue-600 hover:underline">Forget password?</a>
                        </div>


                        <div className="text-center">
                            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 w-full">
                                Sign In
                            </button>
                        </div>
                    </div>

                    {/* Select input */}
                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Sign Up Form</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 bg-white shadow-md h-auto">

                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="retype-password">
                                    Re-type password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="retype-password"
                                    type="password"
                                    placeholder="Re-enter password"
                                />
                            </div>
                            <div className="text-center">
                                <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 w-full">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
