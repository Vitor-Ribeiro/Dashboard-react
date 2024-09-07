import React from 'react';
import { UserIcon } from '@heroicons/react/outline';
import { MailIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/outline';


export default function Buttons() {
    return (
        <div className="p-8 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Buttons</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> /
                    <span className="ml-1 text-blue-600">Buttons</span>
                </div>
            </div>
            <div className="bg-white mt-10 py-5">
                <h2 className="text-lg pl-6 font-semibold mb-4">Normal Button</h2>
                <div className="border-b"></div>
            </div>
            <div className="bg-white p-8 pt-2 space-y-4">
                <div className="w-[80%]">
                    <div className="grid grid-cols-4 gap-8 pr-72">
                        <button className="bg-blue-600 text-white w-28 py-4 text-sm">Button</button>
                        <button className="bg-blue-600 text-white w-28 py-4 rounded text-sm">Button</button>
                        <button className="bg-blue-600 text-white w-28 py-4 rounded-full text-sm">Button</button>
                        <button className="border border-blue-600 text-blue-600 w-28 py-4 rounded text-sm">Button</button>

                        <button className="bg-green-500 text-white w-28 py-4 text-sm">Button</button>
                        <button className="bg-green-500 text-white w-28 py-4 rounded text-sm">Button</button>
                        <button className="bg-green-500 text-white w-28 py-4 rounded-full text-sm">Button</button>
                        <button className="border border-green-500 text-green-500 w-28 py-4 rounded text-sm">Button</button>

                        <button className="bg-gray-800 text-white w-28 py-4 text-sm">Button</button>
                        <button className="bg-gray-800 text-white w-28 py-4 rounded text-sm">Button</button>
                        <button className="bg-gray-800 text-white w-28 py-4 rounded-full text-sm">Button</button>
                        <button className="border border-gray-800 text-gray-800 w-28 py-4 rounded text-sm">Button</button>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-10 py-5">
                <h2 className="text-lg pl-6 font-semibold mb-4">Normal Button With Icon</h2>
                <div className="border-b"></div>
            </div>

            <div className="bg-white p-8 pt-2 space-y-4">
                <div className="w-[70%]">
                    <div className="grid grid-cols-4 gap-8">

                        <button className="bg-blue-600 text-white py-4 px-4  flex items-center">
                            <MailIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="bg-green-500 text-white py-4 px-4  flex items-center">
                            <MailIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="bg-gray-800 text-white py-4 px-4  flex items-center">
                            <MailIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="border border-blue-600 text-blue-600 py-4 px-4  flex items-center">
                            <MailIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>


                        <button className="bg-blue-600 text-white py-4 px-4 rounded flex items-center">
                            <ShoppingCartIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="bg-green-500 text-white py-4 px-4 rounded flex items-center">
                            <ShoppingCartIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="bg-gray-800 text-white py-4 px-4 rounded flex items-center">
                            <ShoppingCartIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="border border-blue-600 text-blue-600 py-4 px-4 rounded flex items-center">
                            <ShoppingCartIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>


                        <button className="bg-blue-600 text-white py-4 px-4 rounded-full flex items-center">
                            <UserIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="bg-green-500 text-white py-4 px-4 rounded-full flex items-center">
                            <UserIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="bg-gray-800 text-white py-4 px-4 rounded-full flex items-center">
                            <UserIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                        <button className="border border-blue-600 text-blue-600 py-4 px-4 rounded-full flex items-center">
                            <UserIcon className="w-5 h-5 mr-2" />
                            Button With Icon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}