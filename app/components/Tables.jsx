import React from 'react';
import TopChannelsTable from './TopChannelsTable';



export default function Tables() {
    const dataTopChannelsTable = [
        {
            name: 'Apple Watch Series 7',
            category: 'Electronics',
            price: '$269',
            sold: 22,
            profit: '$45',
            image: 'https://s3-alpha-sig.figma.com/img/48aa/b2f5/d6cf02e92bf277d7844e81dd7861cd24?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X~N6JbsI8wWpKaVRZN2a~y6Gev9u271sW2CJPje4EYxiDMnRrB65ChjYFR3pS9lrlh8dXcJFE2wgKjMSLYMX0Ikub83QwxTAphRATwTPb9KSIwcbaSXBSEL8xUntftjaQgSOa6VuYLIICYjnwcXyoGKqw6ZV7vALXkmo6XOX9~i0cygDb4-zoA0Fxg8W2Fs3QPVN1R~a1LOmywOVh-MTSBclKamzEHeGXvf8Vrsq2W2zLZo16tX93kYNUwHNUc4DfmU~DjHQGZC4Eblq1V6lBb170~epOKSXmAXpG9L6ODUXWoyc~056mmssFyHZ209b8eMYsWXyY~eBBpayxjBuFg__',
        },
        {
            name: 'Macbook Pro M1',
            category: 'Electronics',
            price: '$546',
            sold: 34,
            profit: '$125',
            image: 'https://s3-alpha-sig.figma.com/img/48aa/b2f5/d6cf02e92bf277d7844e81dd7861cd24?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X~N6JbsI8wWpKaVRZN2a~y6Gev9u271sW2CJPje4EYxiDMnRrB65ChjYFR3pS9lrlh8dXcJFE2wgKjMSLYMX0Ikub83QwxTAphRATwTPb9KSIwcbaSXBSEL8xUntftjaQgSOa6VuYLIICYjnwcXyoGKqw6ZV7vALXkmo6XOX9~i0cygDb4-zoA0Fxg8W2Fs3QPVN1R~a1LOmywOVh-MTSBclKamzEHeGXvf8Vrsq2W2zLZo16tX93kYNUwHNUc4DfmU~DjHQGZC4Eblq1V6lBb170~epOKSXmAXpG9L6ODUXWoyc~056mmssFyHZ209b8eMYsWXyY~eBBpayxjBuFg__',
        },
        {
            name: 'Dell Inspiron 15',
            category: 'Electronics',
            price: '$443',
            sold: 64,
            profit: '$247',
            image: 'https://s3-alpha-sig.figma.com/img/48aa/b2f5/d6cf02e92bf277d7844e81dd7861cd24?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X~N6JbsI8wWpKaVRZN2a~y6Gev9u271sW2CJPje4EYxiDMnRrB65ChjYFR3pS9lrlh8dXcJFE2wgKjMSLYMX0Ikub83QwxTAphRATwTPb9KSIwcbaSXBSEL8xUntftjaQgSOa6VuYLIICYjnwcXyoGKqw6ZV7vALXkmo6XOX9~i0cygDb4-zoA0Fxg8W2Fs3QPVN1R~a1LOmywOVh-MTSBclKamzEHeGXvf8Vrsq2W2zLZo16tX93kYNUwHNUc4DfmU~DjHQGZC4Eblq1V6lBb170~epOKSXmAXpG9L6ODUXWoyc~056mmssFyHZ209b8eMYsWXyY~eBBpayxjBuFg__',
        },
        {
            name: 'HP Probook 450',
            category: 'Electronics',
            price: '$499',
            sold: 72,
            profit: '$103',
            image: 'https://s3-alpha-sig.figma.com/img/48aa/b2f5/d6cf02e92bf277d7844e81dd7861cd24?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X~N6JbsI8wWpKaVRZN2a~y6Gev9u271sW2CJPje4EYxiDMnRrB65ChjYFR3pS9lrlh8dXcJFE2wgKjMSLYMX0Ikub83QwxTAphRATwTPb9KSIwcbaSXBSEL8xUntftjaQgSOa6VuYLIICYjnwcXyoGKqw6ZV7vALXkmo6XOX9~i0cygDb4-zoA0Fxg8W2Fs3QPVN1R~a1LOmywOVh-MTSBclKamzEHeGXvf8Vrsq2W2zLZo16tX93kYNUwHNUc4DfmU~DjHQGZC4Eblq1V6lBb170~epOKSXmAXpG9L6ODUXWoyc~056mmssFyHZ209b8eMYsWXyY~eBBpayxjBuFg__',
        },
    ];
    return (
        <div className="p-20 pt-10 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Table</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> /
                    <span className="ml-1 text-blue-600">Table</span>
                </div>
            </div>


            <div className="bg-white shadow-md overflow-hidden ">
                <h2 className="text-2xl font-semibold mb-6 ml-10 mt-7">Top Channels</h2>
                <table className="w-[97%] mb-5 ml-5">
                    <thead className="bg-[#f0f4fb]">
                        <tr>
                            <th className="px-6 py-5 text-left text-sm font-semibold text-[#64748B] ">Source</th>
                            <th className="pr-60 py-3 text-left  text-sm font-semibold text-[#64748B] ">Visitors</th>
                            <th className="pr-60 py-3 text-left text-sm font-semibold text-[#64748B] ">Revenues</th>
                            <th className="pr-40 py-3 text-left text-sm font-semibold text-[#64748B] ">Sales</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-[#64748B] ">Conversion</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="border-b border-gray-200">
                            <td className="px-5 py-4 whitespace-nowrap flex items-center w-1/4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" className="h-10 w-40 mr-3" />
                                <span className="text-[#1C2434] font-semibold">Google</span>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">3.5K</td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#10B981] font-semibold text-base ">$5,768</td>
                            <td className="px-1 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">590</td>
                            <td className="px-11 py-4 whitespace-nowrap text-[#259AE6] font-semibold ">4.8%</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-5 py-4 whitespace-nowrap flex items-center w-1/4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" className="h-10 w-10 mr-3" />
                                <span className="text-[#1C2434] font-semibold">Twitter</span>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">2.2K</td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#10B981] font-semibold text-base ">$4,635</td>
                            <td className="px-1 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">467</td>
                            <td className="px-11 py-4 whitespace-nowrap text-[#259AE6] font-semibold ">4.3%</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-5 py-4 whitespace-nowrap flex items-center w-1/4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" className="h-10 w-10 mr-3" />
                                <span className="text-[#1C2434] font-semibold">Github</span>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">2.1K</td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#10B981] font-semibold text-base">$4,290</td>
                            <td className="px-1 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">420</td>
                            <td className="px-11 py-4 whitespace-nowrap text-[#259AE6] font-semibold ">3.7%</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-5 py-4 whitespace-nowrap flex items-center w-1/4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" className="h-10 w-10 mr-3" />
                                <span className="text-[#1C2434] font-semibold">Vimeo</span>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">1.5K</td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#10B981] font-semibold text-base">$3,580</td>
                            <td className="px-1 py-4 whitespace-nowrap text-[#1C2434] font-semibold ">389</td>
                            <td className="px-11 py-4 whitespace-nowrap text-[#259AE6] font-semibold ">2.5%</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 whitespace-nowrap flex items-center w-1/4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" className="h-10 w-10 mr-3" />
                                <span className="text-[#1C2434] font-semibold">Facebook</span>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#1C2434] font-semibold">1.2K</td>
                            <td className="px-2 py-4 whitespace-nowrap text-[#10B981] font-semibold text-base">$2,740</td>
                            <td className="px-1 py-4 whitespace-nowrap text-[#1C2434] font-semibold">230</td>
                            <td className="px-11 py-4 whitespace-nowrap text-[#259AE6] font-semibold">1.9%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mt-10'>
                <TopChannelsTable
                    title="Top Channels"
                    data={dataTopChannelsTable}
                />
            </div>
            <div className='mt-10 bg-white shadow-md overflow-hidden mx-auto'>
                <table className="w-[95%] mx-auto mt-8 mb-7">
                    <thead className="bg-[#f0f4fb]">
                        <tr>
                            <th className="px-6 py-4 text-left text-md text-[#1C2434] font-semibold">Package</th>
                            <th className="px-6 py-3 text-left text-md text-[#1C2434] font-semibold">Invoice date</th>
                            <th className="px-6 py-3 text-left text-md text-[#1C2434] font-semibold">Status</th>
                            <th className="px-9 py-3 text-right text-md text-[#1C2434] font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">
                                <div>
                                    <span>Free Package</span>
                                    <div className="text-sm text-gray-500">$0.00</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">12 Jan 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Paid</span>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-7.293 0-12 7.5-12 7.5s4.707 7.5 12 7.5 12-7.5 12-7.5-4.707-7.5-12-7.5zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 7h16" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">
                                <div>
                                    <span>Standard Package</span>
                                    <div className="text-sm text-gray-500">$59.00</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">15 Jan 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Paid</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-7.293 0-12 7.5-12 7.5s4.707 7.5 12 7.5 12-7.5 12-7.5-4.707-7.5-12-7.5zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 7h16" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">
                                <div>
                                    <span>Business Package</span>
                                    <div className="text-sm text-gray-500">$99.00</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">22 Jan 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">Unpaid</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-7.293 0-12 7.5-12 7.5s4.707 7.5 12 7.5 12-7.5 12-7.5-4.707-7.5-12-7.5zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 7h16" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">
                                <div>
                                    <span>Standard Package</span>
                                    <div className="text-sm text-gray-500">$59.00</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#1C2434]">28 Jan 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Pending</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-7.293 0-12 7.5-12 7.5s4.707 7.5 12 7.5 12-7.5 12-7.5-4.707-7.5-12-7.5zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 7h16" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}





