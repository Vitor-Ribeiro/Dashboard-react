import React from 'react';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';
import Calendar from '~/components/Calendar'

export default function CalendarPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <Calendar />
            </div>
        </div>
    );
}