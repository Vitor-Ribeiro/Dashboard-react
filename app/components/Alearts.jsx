import React from 'react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/outline';

export default function Alearts() {
    return (
        <div className="p-8 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Alerts</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> /
                    <span className="ml-1 text-blue-600">Alerts</span>
                </div>
            </div>
            <div className="bg-white p-8 space-y-4">


                <div className="w-[70%]">
                    <div className="flex items-center mb-10 bg-[#fff8e5] border-l-4 border-[#ffbb33] p-4 py-10 rounded-md">
                        <div className="mr-3 pb-6">
                            <div className="bg-[#FBBF24] p-1 rounded-md">
                                <ExclamationIcon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[#f29b11]">Attention needed</h2>
                            <p className="text-sm text-[#c09853]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
                        </div>
                    </div>


                    <div className="flex items-center mb-10 bg-[#E1F9F0] border-l-4 border-[#36d399] p-4 py-8 rounded-md">
                        <div className="mr-3">
                            <div className="bg-[#34D399] p-1 rounded-md">
                                <CheckIcon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[#36d399]">Message Sent Successfully</h2>
                            <p className="text-sm text-[#4caeaf]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>


                    <div className="flex items-center bg-[#FEEAEA] border-l-4 border-[#e06a6a] p-4 py-8 rounded-md">
                        <div className="mr-3">
                            <div className="bg-[#F87171] p-1 rounded-md">
                                <XIcon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[#e06a6a]">There were 1 errors with your submission</h2>
                            <p className="text-sm text-[#b94a48]">Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}