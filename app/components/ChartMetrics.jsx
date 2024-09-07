import React from "react";

const ChartMetrics = () => {
    const metrics = [
        { label: "Unique Visitors", value: "18.6K", percentage: "18%", positive: true },
        { label: "Total Pageviews", value: "55.9K", percentage: "25%", positive: true },
        { label: "Bounce Rate", value: "54%", percentage: "7%", positive: false },
        { label: "Visit Duration", value: "2m 56s", percentage: "12%", positive: true },
    ];

    return (
        <div className="bg-white shadow-md rounded flex justify-around p-6 mt-6 space-x-8">
            <div className="flex flex-col items-center flex-1 border-r border-gray-200">
                <div className="flex items-baseline justify-center mb-1">
                    <p className="text-3xl font-semibold text-gray-900">18.6K</p>
                    <p className="text-sm text-green-500 ml-2">
                        ↑18%
                    </p>
                </div>
                <p className="text-gray-500 mt-2">Unique Visitors</p>
            </div>
            <div className="flex flex-col items-center flex-1 border-r border-gray-200">
                <div className="flex items-baseline justify-center mb-1">
                    <p className="text-3xl font-semibold text-gray-900">55.9K</p>
                    <p className="text-sm text-green-500 ml-2">
                        ↑25%
                    </p>
                </div>
                <p className="text-gray-500 mt-2">Total Pageviews</p>
            </div>
            <div className="flex flex-col items-center flex-1 border-r border-gray-200">
                <div className="flex items-baseline justify-center mb-1">
                    <p className="text-3xl font-semibold text-gray-900">54%</p>
                    <p className="text-sm text-yellow-500 ml-2">
                        ↓7%
                    </p>
                </div>
                <p className="text-gray-500 mt-2">Bounce Rate</p>
            </div>
            <div className="flex flex-col items-center flex-1">
                <div className="flex items-baseline justify-center mb-1">
                    <p className="text-3xl font-semibold text-gray-900">2m 56s</p>
                    <p className="text-sm text-green-500 ml-2">
                        ↑12%
                    </p>
                </div>
                <p className="text-gray-500 mt-2 pr-10">Visit Duration</p>
            </div>
        </div>
    );
};

export default ChartMetrics;