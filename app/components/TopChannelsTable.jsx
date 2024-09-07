const TopChannelsTable = ({ data }) => {
    return (
        <div className="bg-white shadow-lg p-8">

            <div className="-mx-8">
                <h2 className="text-2xl font-semibold mb-6 ml-10 ">Top Channels</h2>
                <table className="min-w-full mb-7">
                    <thead className="border-b border-t">
                        <tr>
                            <th className="text-left text-md font-semibold text-[#64748B] w-1/3 pl-9 py-4">Product Name</th>
                            <th className="text-left text-md font-semibold text-[#64748B] w-1/4 py-2">Category</th>
                            <th className="text-left text-md font-semibold text-[#64748B] w-60 py-2">Price</th>
                            <th className="text-left text-md font-semibold text-[#64748B] pr-10 py-2">Sold</th>
                            <th className="text-left text-md font-semibold text-[#64748B]  py-2">Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="relative ">
                                <td className="py-4 flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-12 rounded mr-4 ml-9" />
                                    <span className="text-[#1C2434] text-md font-semibold">{item.name}</span>
                                </td>
                                <td className="py-4 text-[#1C2434] text-md font-semibold">{item.category}</td>
                                <td className="py-4 text-[#1C2434] text-md font-semibold">{item.price}</td>
                                <td className="py-4 text-[#1C2434] text-md font-semibold">{item.sold}</td>
                                <td className="py-4 text-[#10B981] font-semibold">{item.profit}</td>
                                {index < data.length - 1 && (
                                    <div className="absolute left-0 right-0 h-[1px] bg-gray-200 -bottom-[1px]"></div>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopChannelsTable;