import React from 'react';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';
import Alearts from '~/components/Alearts';

export default function ResetPasswordPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full overflow-auto">
                <Navbar />
                <div className="h-full overflow-auto">
                    <Alearts />
                </div>
            </div>
        </div>
    );
}