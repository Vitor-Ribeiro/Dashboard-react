import React from 'react';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';
import Buttons from '~/components/Buttons';

export default function ResetPasswordPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full overflow-auto">
                <Navbar />
                <div className="h-full overflow-auto">
                    <Buttons />
                </div>
            </div>
        </div>
    );
}