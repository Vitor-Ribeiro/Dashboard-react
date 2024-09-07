import React from 'react';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';
import ChartAnalytics from '~/components/ChartAnalytics';

export default function Index() {
    return (
        <div className="flex h-screen bg-gray-100 ">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="h-full overflow-auto">
                    <ChartAnalytics />
                </div>
            </div>
        </div>
    );
}