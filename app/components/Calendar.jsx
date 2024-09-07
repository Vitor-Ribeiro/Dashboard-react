import React from 'react';

const Calendar = () => {
    const days = [
        ['27', '28', '29', '30', '31', '1', '2'],
        ['3', '4', '5', '6', '7', '8', '9'],
        ['10', '11', '12', '13', '14', '15', '16'],
        ['17', '18', '19', '20', '21', '22', '23'],
        ['24', '25', '26', '27', '28', '29', '30'],
    ];

    return (
        <div className="p-16 bg-[#f0f4fb] h-screen">
            <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-semibold">Calendar</div>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> / <span className="ml-1 text-blue-600">Calendar</span>
                </div>
            </div>
            <div className="box-shadow shadow-lg">
                <div className="grid grid-cols-7 ">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <div key={day} className="text-center text-white font-semibold bg-blue-600 p-2 ">{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {days.map((week, weekIndex) =>
                        week.map((day, dayIndex) => (
                            <div key={dayIndex} className="h-24 bg-white p-2 relative">
                                <div className="text-gray-700 text-left absolute top-2 ">{day}</div>
                                {weekIndex === 1 && day === '4' && (
                                    <div className="bg-blue-50 text-black-600 rounded p-2 absolute top-8 left-16 right-[-50%] z-10 border-l-4 border-blue-700">
                                        <div className="font-semibold">Redesign Website</div>
                                        <div className="text-xs">4 Dec - 5 Dec</div>
                                    </div>
                                )}
                                {weekIndex === 3 && day === '21' && (
                                    <div className="bg-blue-50 text-black-600 rounded p-2 absolute top-8 left-16 right-[-50%] z-10 border-l-4 border-blue-700">
                                        <div className="font-semibold">App Design</div>
                                        <div className="text-xs">21 Dec - 23 Dec</div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
