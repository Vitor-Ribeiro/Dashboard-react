import React from 'react';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Select from "react-select";
import { FaGlobe } from "react-icons/fa";

export default function FormElements() {
    const SimpleSwitch = () => {
        const [enabled, setEnabled] = useState(true);

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-[#3056D3]"
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
        )
    }
    const BgBlueSwitch = () => {
        const [enabled, setEnabled] = useState(true);

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 "
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#3056D3] shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
        )
    }
    const BgBlackSwitch = () => {
        const [enabled, setEnabled] = useState(false);

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${enabled ? 'bg-gray-200' : 'bg-black'}`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
                />
            </Switch>
        )
    }
    const WithoutBgSwitch = () => {
        const [enabled, setEnabled] = useState(false);

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 "
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
        )
    }
    const FineSwitch = () => {
        const [enabled, setEnabled] = useState(false)

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
                <span className="sr-only">Use setting</span>
                <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out"
                />
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
        )
    }
    const FineBlueSwitch = () => {
        const [enabled, setEnabled] = useState(true)

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
                <span className="sr-only">Use setting</span>
                <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out"
                />
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-[#3056D3] shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
        )
    }
    const IconSwitch = () => {
        const [enabled, setEnabled] = useState(false)

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
            >
                <span className="sr-only">Use setting</span>
                <span className="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"
                    >
                        <svg fill="none" viewBox="0 0 12 12" className="h-3 w-3 text-gray-400">
                            <path
                                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
                    >
                        <svg fill="currentColor" viewBox="0 0 12 12" className="h-3 w-3 text-indigo-600">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </span>
            </Switch>
        )
    }
    const IconTrueSwitch = () => {
        const [enabled, setEnabled] = useState(true)

        return (
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
                <span className="sr-only">Use setting</span>
                <span className="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-[#3056D3] shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"
                    >
                        <svg fill="none" viewBox="0 0 12 12" className="h-3 w-3 text-gray-400">
                            <path
                                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
                    >
                        <svg fill="currentColor" viewBox="0 0 12 12" className="h-3 w-3 text-white">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </span>
            </Switch>
        )
    }
    const CheckBox = () => {
        const [checked, setChecked] = useState(true);

        return (
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#f0f4fb] checked:border-blue-600 checked:border-2"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-1.5">
                        {checked && <span className="text-blue-600 font-bold text-sm">X</span>}
                    </div>
                </div>
                <label className="ml-2 mb-2">Checkbox Text</label>
            </div>
        );
    }

    const CheckBorderBox = () => {
        const [checked, setChecked] = useState(true);
        return (
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#f0f4fb] checked:border-blue-600 checked:border-2"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-1.5">
                        {checked && (
                            <div className="bg-blue-600 w-2 h-2"></div>
                        )}
                    </div>
                </div>
                <label className="ml-2 mb-2">Checkbox Text</label>
            </div>
        );
    }

    const CheckWriteBox = () => {
        const [checked, setChecked] = useState(true);

        return (
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#f0f4fb] checked:border-blue-600 checked:border-2"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-2">
                        {checked && <span className="text-blue-600 font-bold text-sm">✓</span>}
                    </div>
                </div>
                <label className="ml-2 mb-2">Checkbox Text</label>
            </div>
        );
    }

    const CheckRoundedBox = () => {
        const [checked, setChecked] = useState(true);
        return (
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 rounded-full checked:bg-[#f0f4fb] checked:border-blue-600 checked:border-2"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-1.5">
                        {checked && (
                            <div className="border rounded-lg bg-blue-600 w-2.5 h-2.5"></div>
                        )}
                    </div>
                </div>
                <label className="ml-2 mb-2">Checkbox Text</label>
            </div>
        );
    }

    const CheckBgBlueBox = () => {
        const [checked, setChecked] = useState(true);
        return (
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 rounded-full checked:bg-blue-600 checked:border-blue-600 checked:border-2"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-1.5">
                        {checked && (
                            <div className="border rounded-lg bg-white w-2.5 h-2.5"></div>
                        )}
                    </div>
                </div>
                <label className="ml-2 mb-2">Checkbox Text</label>
            </div>
        );
    }

    const CheckFalseBox = () => {
        const [checked, setChecked] = useState(false);

        return (
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#f0f4fb] checked:border-blue-600 checked:border-2"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-1.5">
                        {checked && <span className="text-blue-600 font-bold text-sm">X</span>}
                    </div>
                </div>
                <label className="ml-2 mb-2">Checkbox Text</label>
            </div>
        );
    }

    const CheckFalseRoundedBox = () => {
        const [checked, setChecked] = useState(false);
        return (
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-300 rounded-full checked:bg-[#f0f4fb] checked:border-blue-600 checked:border-2"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-1.5">
                        {checked && (
                            <div className="border rounded-lg bg-blue-600 w-2.5 h-2.5"></div>
                        )}
                    </div>
                </div>
                <label className="ml-2 mb-2">Checkbox Text</label>
            </div>
        );
    }

    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { value: "design", label: "Design" },
        { value: "development", label: "Development" },
        { value: "marketing", label: "Marketing" }
    ];

    const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <div className="p-8 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Form Elements</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> / <span className="ml-1 text-blue-600">Form Elements</span>
                </div>
            </div>

            <div className="flex justify-between">

                <div className="w-[48%]">
                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Input Fields</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 shadow-md h-auto bg-white " >
                        <h2 className="font-semibold mb-2 mt-2">Default Input</h2>
                        <input
                            type="text"
                            className="block w-full p-4 border border-gray-300 rounded-md mb-4"
                            placeholder="Default input text"
                        />
                        <h2 className="font-semibold mb-2">Active Input</h2>
                        <input
                            type="text"
                            className="block w-full p-4 border border-blue-800 rounded-md mb-4"
                            placeholder="Active input text"
                        />
                        <h2 className="font-semibold mb-2">Disabled Input</h2>
                        <input
                            type="text"
                            className="block w-full p-4 border border-gray-300 rounded-md bg-[#f0f4fb] text-gray-500 cursor-not-allowed"
                            placeholder="Disabled input text"
                            disabled
                        />
                    </div>


                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Toggle switch input</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 bg-white mb-7 shadow-md h-auto" >
                        <div className="flex flex-wrap mr-[70%]">
                            <div className="w-1/2 px-0.5 mb-4">
                                <WithoutBgSwitch />
                            </div>
                            <div className="w-1/2 px-0.5 mb-4">
                                <BgBlueSwitch />
                            </div>
                            <div className="w-1/2 px-0.5 mb-4">
                                <BgBlackSwitch />
                            </div>
                            <div className="w-1/2 px-0.5 mb-4">
                                <SimpleSwitch />
                            </div>
                            <div className="w-1/2 px-0.5 mb-4">
                                <FineSwitch />
                            </div>
                            <div className="w-1/2 px-0.5 mb-4">
                                <FineBlueSwitch />
                            </div>
                            <div className="w-1/2 px-0.5 mb-4">
                                <IconSwitch />
                            </div>
                            <div className="w-1/2 px-0.5 mb-4">
                                <IconTrueSwitch />
                            </div>
                        </div>
                    </div>

                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Time and date</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 bg-white mb-7 shadow-md h-auto">
                        <div className="relative mb-4">
                            <h2 className="font-semibold mb-2 mt-2">Date picker</h2>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="dd/mm/yyyy"
                                />
                                <button className="absolute top-[70%] transform -translate-y-1/2 right-0 pr-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 2a1 1 0 00-1 1v1H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2V3a1 1 0 00-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <h2 className="font-semibold mb-2 mt-2">Select date</h2>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="dd/mm/yyyy"
                                />
                                <button className="absolute top-[70%] transform -translate-y-1/2 right-0 pr-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.5l3.71-3.27a.75.75 0 011.02 1.09l-4 3.5a.75.75 0 01-1.02 0l-4-3.5a.75.75 0 01-.02-1.06z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">File upload</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 bg-white shadow-md h-auto">
                        <h2 className="font-semibold mb-2">Attach file</h2>
                        <div className="mb-4">
                            <input
                                type="file"
                                className="block w-full p-0 border border-gray-300 rounded-md bg-gray-100 file:bg-gray-300 file:text-gray-700 file:py-4 file:px-4 file:mr-4 file:border-none file:rounded-none"
                            />
                        </div>
                        <h2 className="font-semibold mb-2">Attach file</h2>
                        <div>
                            <input
                                type="file"
                                className="block w-full p-2 pt-4 border border-gray-300 rounded-md bg-gray-100 file:bg-gray-300 file:text-gray-700 file:px-4 file:py-1 file:mr-4 file:border-none file:rounded-md"
                            />
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-[48%]">

                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Textarea Fields</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 bg-white shadow-md h-auto">
                        <h2 className="font-semibold mb-2 mt-2">Default textarea</h2>
                        <textarea
                            className="block w-full p-4 border border-gray-300 rounded-md mb-4 h-40"
                            placeholder="Default textarea text"
                        ></textarea>
                        <h2 className="font-semibold mb-2 mt-2">Active textarea</h2>
                        <textarea
                            className="block w-full p-4 border border-blue-500 rounded-md mb-4 h-40"
                            placeholder="Active textarea text"

                        ></textarea>
                        <h2 className="font-semibold mb-2 mt-2">Disabled textarea</h2>
                        <textarea
                            className="block w-full p-4 border border-gray-300 rounded-md bg-[#f0f4fb] text-gray-500 cursor-not-allowed h-40"
                            placeholder="Disabled textarea text"
                            disabled
                        ></textarea>
                    </div>

                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Checkbox and radio</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 bg-white shadow-md h-auto">
                        <div className="grid grid-cols-2 gap-4 mr-72">
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <CheckFalseBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckFalseBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckFalseBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckFalseRoundedBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckFalseRoundedBox />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <CheckWriteBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckBorderBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckRoundedBox />
                                </div>
                                <div className="flex items-center">
                                    <CheckBgBlueBox />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="font-semibold bg-white shadow-md text-lg p-4">Select Input</h1>
                    <div className="border-b border-gray-200"></div>
                    <div className="p-4 mb-8 bg-white shadow-md h-auto">

                        <h2 className="font-semibold mb-2">Select Country</h2>
                        <div className="relative mb-4">
                            <FaGlobe className="absolute left-3 top-3 text-gray-500" />
                            <select className="block w-full p-2 pl-10 border border-gray-300 rounded-md">
                                <option>Select Country</option>
                                <option>United States</option>
                                <option>Brazil</option>
                                <option>Canada</option>
                            </select>
                        </div>


                        <h2 className="font-semibold mb-2">Multiselect Dropdown</h2>
                        <Select
                            isMulti
                            value={selectedOptions}
                            onChange={handleSelectChange}
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
