import React from 'react';

export default function Invoice() {
    return (
        <div className="p-8 bg-[#f0f4fb] min-h-screen overflow-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Invoice</h1>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> /
                    <span className="ml-1 text-blue-600">Invoice</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="grid grid-cols-3 items-center mb-6">
                        <div className="pr-40">
                            <p className="font-medium">From</p>
                            <p className="text-gray-700">Roger Culhane</p>
                            <p className="text-gray-500 text-sm">Email: contact@example.com</p>
                            <p className="text-gray-500 text-sm">Address: 2972 Westheimer Rd. Santa Ana.</p>
                        </div>
                        <div >
                            <p className="font-medium">To</p>
                            <p className="text-gray-700">Cristofer Levin</p>
                            <p className="text-gray-500 text-sm">Email: contact@example.com</p>
                            <p className="text-gray-500 text-sm">Address: New York, USA 2707 Davis Avenue</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium ">Order #15478</p>
                    </div>
                </div>


                <div className="flex border border-gray-200 p-5 justify-between items-center mb-4">
                    <div className="flex items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/4f25/5412/0a5c4ff28e96fe5d94d172ef288da071?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lc6RDODAioz~Fc5Dn99~gWBcXm8iCAuAspj1GCfV0O0dyFz~3SnDYT8UDSDibIM7-rf-T2akXhvAG4A8XkVcgrFEZ4FjD-19xgxNMM7jdh2lnNmstPzna1q8qAN12hIMc6a4hliI4i-d0a5QaT~PPlOm7d3IOWhkisoEmd8cB66JgkszQr5SVybZhIyEjORX54ovKVjh6QVhh5v9MXaF~W5TQnrmmV8K7N7LrGM34z5q2Fv8CtSQZXnNsoSMq77RjCrIebuturCpr0g0jjeN9t24NsEOr~B7FWhZO4wgoZjwC9SNnq0PhEC05nklUU3mptj3AX7hXzlI59qDA6qBNw__" alt="Product Image" className="w-16 h-16 rounded mr-4" />
                        <div>
                            <p className="text-gray-700">Mist Black Triblend</p>
                            <div className="flex">
                                <p className="text-gray-500 pr-6 text-sm">Color: White</p>
                                <p className="text-gray-500 text-sm">Size: Medium</p>
                            </div>

                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-700">Qty: 01</p>
                        <p className="text-gray-700">$120.00</p>
                    </div>
                </div>



                <div className="flex justify-between mb-6">

                    <div className="grid grid-cols-2 gap-10">
                        <div className="pr-40">
                            <p className="font-medium">Shipping Method</p>
                            <p className="text-gray-500">FedEx - Take up to 3 working days.</p>
                        </div>
                        <div>
                            <p className="font-medium">Payment Method</p>
                            <p className="text-gray-500">Apply Pay Mastercard **** **** 6874</p>
                        </div>
                    </div>


                    <div className="w-56">
                        <div className="flex justify-between">
                            <p className="text-gray-500">Subtotal</p>
                            <p className="text-gray-700">$120.00</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-500">Shipping Cost (+)</p>
                            <p className="text-gray-700">$10.00</p>
                        </div>
                        <div className="border-t border-gray-300 my-2"></div>
                        <div className="flex justify-between">
                            <p className="font-medium">Total</p>
                            <p className="font-medium text-gray-700">$130.00</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded mr-2">Download Invoice</button>
                    <button className="border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded">Send Invoice</button>
                </div>
            </div>
        </div>
    );
}
