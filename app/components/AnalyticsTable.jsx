const AnalyticsTable = ({ title, data, width = 'auto', height = 'auto' }) => {
    return (
        <div
            className="bg-white shadow-lg rounded-lg p-4"
            style={{
                width,
                height,

                transformOrigin: 'right',
                transform: 'scaleX(1.1)',
                marginLeft: '-20%',
            }}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <table className="w-full text-left table-fixed">
                <thead>
                    <tr>
                        <th className="pb-4 w-1/2">URL</th>
                        <th className="pb-4 w-1/4 text-right">Views</th>
                        <th className="pb-4 w-1/4 text-right">Uniques</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="h-16">
                            <td className="relative py-4 pr-4 flex items-center">
                                <div
                                    className="absolute inset-y-0 left-0 flex items-center justify-center h-14 rounded-lg bg-blue-100"
                                    style={{
                                        width: `${item.progressWidth}%`,
                                        borderRadius: '8px',
                                    }}
                                />
                                <span className="relative z-10 text-center px-2">
                                    {item.url}
                                </span>
                            </td>
                            <td className="py-4 pr-4 relative text-right">
                                <span className="relative z-10">{item.views}</span>
                            </td>
                            <td className="py-4 pl-4 pr-4 relative text-right">
                                <span className="relative z-10">{item.uniques}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnalyticsTable;
