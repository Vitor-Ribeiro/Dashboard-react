import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const chartData = {
        labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
        datasets: [
            {
                data: [65, 34, 45, 12],
                backgroundColor: ['#80CAEE', '#0FADCF', '#3C50E0', '#6577F3'],
                hoverBackgroundColor: ['#4F46E5', '#6366F1', '#818CF8', '#E5E7EB'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '75%',
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="relative bg-white shadow-lg rounded p-6 w-full flex flex-col items-center">

            <div className="self-start mb-4">
                <h2 className="text-lg font-bold">Visitors Analytics</h2>
            </div>


            <div className="absolute top-4 right-4">
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
                    Monthly
                </button>
            </div>


            <div className="relative flex justify-center items-center">
                <Doughnut data={chartData} options={options} />

                <div className="absolute flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-3xl font-semibold">{data.totalVisitors}</p>
                        <p className="text-gray-500">Visitors</p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 bg-[#3C50E0] rounded-full"></span>
                    <span>Desktop</span>
                    <span className="ml-2 text-gray-500">65%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 bg-[#6577F3] rounded-full"></span>
                    <span>Tablet</span>
                    <span className="ml-2 text-gray-500">34%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 bg-[#8FD0EF] rounded-full"></span>
                    <span>Mobile</span>
                    <span className="ml-2 text-gray-500">45%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 bg-[#0FADCF] rounded-full"></span>
                    <span>Unknown</span>
                    <span className="ml-2 text-gray-500">12%</span>
                </div>
            </div>
        </div>
    );
};

export default PieChart;
