import { useState, useEffect } from 'react';
import { useLocation } from '@remix-run/react';
export default function Colapse({ text, iconText, toggleIcon, children, activePaths = [] }) {

    const location = useLocation();


    const isActive = activePaths.some(path => location.pathname.startsWith(path));

    const [isOpen, setIsOpen] = useState(isActive);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isActive) {
            setIsOpen(true);
        }
    }, [isActive]);


    return (
        <>
            <div className="text-white">
                <button
                    onClick={toggleDropdown}
                    className="w-full h-10 flex items-center justify-between p-2 hover:bg-gray-600 text-white rounded-md"
                >
                    <div className="flex items-center space-x-3">
                        <div dangerouslySetInnerHTML={{ __html: iconText }} />
                        <span>{text}</span>
                    </div>
                    {toggleIcon ? (
                        isOpen ? (
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF" className={`transition-transform transform ${isOpen ? 'rotate-180' : ''}`}>
                                <path d="M19 16.59L17.59 18 12 12.41 6.41 18 5 16.59 12 9.59l7 7z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
                                <path d="M19 16.59L17.59 18 12 12.41 6.41 18 5 16.59 12 9.59l7 7z" />
                            </svg>
                        )
                    ) : null}

                </button>
                {isOpen && children}
            </div>
        </>
    );
}