import React from 'react';

const ProgressBar = ({ country, flag, percentage }) => {
    return (
        <div className="flex items-center mb-2">

            <div className="flex items-center w-1/4">
                <img src={flag} alt={`${country} flag`} className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">{country}</span>
            </div>

            <div className="w-3/4 flex items-center">
                <div className="w-full bg-gray-200 rounded h-4 relative">
                    <div
                        className="bg-blue-600 h-4 rounded flex items-center justify-center text-white text-xs font-semibold"
                        style={{ width: `${percentage}%` }}
                    >
                        {percentage}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;