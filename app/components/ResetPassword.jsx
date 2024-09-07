import React from 'react';
import { MailIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/outline';

export default function ResetPassword() {
    return (
        <div className="px-60 py-10 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Reset Password</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> /
                    <span className="ml-1 text-blue-600">Reset Password</span>
                </div>
            </div>

            <div className="bg-white shadow-md flex mx-auto">

                <div className="flex  w-1/2 pt-16 flex-col">
                    <div className="flex justify-center gap-3 items-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <rect width="24" height="24" rx="6" fill="#3B5CCC" />
                            <line x1="8" y1="14" x2="8" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line x1="12" y1="16" x2="12" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line x1="16" y1="12" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-xl font-bold text-[#151F3C]">TailAdmin</span>
                    </div>
                    <p className="flex text-[#7D7D7D] justify-center  mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
                    </p>
                    <img src="/images/undraw_modern_design_re_dlp8.svg" alt="Illustration" className="w-96 ml-32 " />
                </div>
                <div className="border-r"></div>


                <div className="w-1/2 p-10">
                    <div className="mb-10">

                        <h1 className="text-3xl pt-20 font-bold text-[#151F3C]">Reset Password</h1>
                        <p className="pt-5">Enter your email address to receive a password reset link.</p>
                    </div>

                    <form>
                        <div className="mb-4">
                            <label className="block text-[#151F3C] mb-2" htmlFor="email">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center">
                                    <MailIcon className="w-6 h-6 text-gray-400" />
                                </span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <button className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold mb-16">Send Password Reset Link</button>
                        </div>




                    </form>


                </div>
            </div>




        </div>
    )
}