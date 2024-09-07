import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import ChartMetrics from './ChartMetrics';
import Maps from './WorldMap';
import AnalyticsTable from './AnalyticsTable';
import PieChart from './PieChart';
import TopChannelsTable from './TopChannelsTable';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const visitorsData = {
    totalVisitors: 2548,
};

const dataTopContent = [
    { url: '/', views: 2500, uniques: 2100, progressWidth: 115 },
    { url: '/blog/', views: 376, uniques: 139, progressWidth: 60 },
    { url: '/reserve/success', views: 468, uniques: 290, progressWidth: 80 },
    { url: '/product/product-details', views: 298, uniques: 176, progressWidth: 45 },
    { url: '/blog/digital-marketing', views: 179, uniques: 57, progressWidth: 70 },
];

const dataTopChannels = [
    { url: 'Google', views: 4200, uniques: 3900, progressWidth: 120 },
    { url: 'Github', views: 1900, uniques: 509, progressWidth: 75 },
    { url: 'Producthunt', views: 1500, uniques: 986, progressWidth: 80 },
    { url: 'Facebook', views: 974, uniques: 639, progressWidth: 60 },
    { url: 'Twitter', views: 179, uniques: 57, progressWidth: 50 },
];

const dataTopChannelsTable = [
    {
        name: 'Apple Watch Series 7',
        category: 'Electronics',
        price: '$269',
        sold: 22,
        profit: '$45',
        image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07937463.png',
    },
    {
        name: 'Macbook Pro M1',
        category: 'Electronics',
        price: '$546',
        sold: 34,
        profit: '$125',
        image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07937463.png',
    },
    {
        name: 'Dell Inspiron 15',
        category: 'Electronics',
        price: '$443',
        sold: 64,
        profit: '$247',
        image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07937463.png',
    },
    {
        name: 'HP Probook 450',
        category: 'Electronics',
        price: '$499',
        sold: 72,
        profit: '$103',
        image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07937463.png',
    },
];


const ChartAnalytics = () => {
    const data = {
        labels: Array.from({ length: 30 }, (_, i) => i + 1),
        datasets: [
            {
                label: "Visitors",
                data: [
                    200, 250, 300, 150, 100, 200, 275, 320, 190, 230, 340, 290, 210, 310, 400, 320, 190, 210, 300, 290, 330, 190, 150,
                    260, 270, 220, 200, 240, 310, 150,
                ],
                backgroundColor: "#4F46E5",
                borderRadius: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 20,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#4F46E5',
                    crossAlign: 'near',
                    padding: 10,
                },
            },
            y: {
                beginAtZero: true,
                max: 400,
                grid: {
                    borderDash: [5, 5],
                    color: '#E5E7EB',
                    drawBorder: false,
                },
                ticks: {
                    color: '#4F46E5',
                    padding: 10,
                },
            },
        },
    };

    return (
        <div className="p-4 bg-[#f0f4fb] min-h-screen ">
            <div className="flex justify-between items-center mb-4">
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
                    Dec 29, 2023 - Jan 4, 2024
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
                    Daily
                </button>
            </div>

            <div className="bg-white shadow-md rounded p-4 h-96 mb-4">
                <h2 className="text-lg font-semibold mb-4">Visitors Analytics</h2>
                <div className="h-full">
                    <Bar data={data} options={options} />
                </div>
            </div>

            <ChartMetrics />

            <div className="grid grid-rows-2 grid-cols-3 gap-6 mt-6">
                <div className="col-span-2 row-span-2 w-10/12">
                    <Maps />
                </div>
                <AnalyticsTable
                    title="Top Content"
                    data={dataTopContent}
                />
                <AnalyticsTable
                    title="Top Channels"
                    data={dataTopChannels}
                />
            </div>

            <div className="grid grid-cols-3 gap-9 mt-7 pb-60">

                <PieChart data={visitorsData} />

                <div className="col-span-2">
                    <TopChannelsTable
                        title="Top Channels"
                        data={dataTopChannelsTable}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChartAnalytics;
