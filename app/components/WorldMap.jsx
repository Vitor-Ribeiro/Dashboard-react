import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import ProgressBar from './ProgressBar';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const flagUrls = {
    "United States": "https://flagcdn.com/w320/us.png",
    "Canada": "https://flagcdn.com/w320/ca.png",
    "France": "https://flagcdn.com/w320/fr.png",
    "Italy": "https://flagcdn.com/w320/it.png",
    "Australia": "https://flagcdn.com/w320/au.png",
    "India": "https://flagcdn.com/w320/in.png",
};

const countries = [
    { country: 'United States', flag: flagUrls["United States"], percentage: 35, gdp: 14624.18 },
    { country: 'Canada', flag: flagUrls["Canada"], percentage: 20, gdp: 1736.53 },
    { country: 'France', flag: flagUrls["France"], percentage: 18, gdp: 2715.52 },
    { country: 'Italy', flag: flagUrls["Italy"], percentage: 14, gdp: 2073.89 },
    { country: 'Australia', flag: flagUrls["Australia"], percentage: 10, gdp: 1323.42 },
    { country: 'India', flag: flagUrls["India"], percentage: 7, gdp: 2875.14 },
];

const countryNameMapping = {
    "United States": "United States",
    "Canada": "Canada",
    "France": "France",
    "Italy": "Italy",
    "Australia": "Australia",
    "India": "India"
};


const CountryStats = () => {
    return (
        <div className="mt-4">
            {countries.map((country) => (
                <ProgressBar
                    key={country.country}
                    country={country.country}
                    flag={country.flag}
                    percentage={country.percentage}
                />
            ))}
        </div>
    );
};

const WorldMap = () => {
    const [tooltipContent, setTooltipContent] = useState("");
    const [zoom, setZoom] = useState(1);

    const handleZoomIn = () => {
        if (zoom >= 4) return;
        setZoom(zoom * 1.2);
    };

    const handleZoomOut = () => {
        if (zoom <= 1) return;
        setZoom(zoom / 1.2);
    };

    const getColorByPercentage = (percentage) => {
        const intensity = Math.round((percentage / 100) * 255);
        return `rgb(102, 179, ${255 - intensity})`;
    };

    return (
        <div className="relative">
            <ComposableMap>
                <ZoomableGroup zoom={zoom}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const countryName = geo.properties.NAME?.trim();
                                console.log('Country Name from Geo:', countryName);

                                const mappedName = countryNameMapping[countryName];
                                console.log('Mapped Name:', mappedName);

                                const country = countries.find(
                                    (country) => country.country === mappedName
                                );

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            if (country) {
                                                setTooltipContent(
                                                    `${mappedName} (GDP - ${country.percentage}%)`
                                                );
                                            } else {
                                                setTooltipContent(`${countryName}`);
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        style={{
                                            default: {
                                                fill: country
                                                    ? getColorByPercentage(country.percentage)
                                                    : "#D6D6DA",
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#F53",
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                outline: "none",
                                            },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            {tooltipContent && (
                <div
                    className="absolute bg-white p-2 rounded shadow-md text-sm pointer-events-none"
                    style={{ bottom: "10px", left: "50%", transform: "translateX(-50%)" }}
                >
                    {tooltipContent}
                </div>
            )}
            <div className="absolute bottom-2 left-2 flex space-x-2">
                <button
                    className="bg-gray-200 border border-gray-300 text-gray-700 px-2 py-1 rounded"
                    onClick={handleZoomIn}
                >
                    +
                </button>
                <button
                    className="bg-gray-200  border border-gray-300 text-gray-700 px-2.5 py-1 rounded"
                    onClick={handleZoomOut}
                >
                    -
                </button>
            </div>
        </div>
    );
};

const Maps = () => {
    return (
        <div className="flex flex-col ">
            <div className="bg-white shadow-lg rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Top Countries</h2>
                    <button className="bg-gray-200 px-4 py-2 rounded text-sm">
                        Last 7 days
                    </button>
                </div>
                <div >
                    <WorldMap />
                </div>
                <CountryStats />
            </div>
        </div>
    );
};

export default Maps;
