import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProfileCard = () => {
    return (
        <div className="h-screen bg-[#f0f4fb] flex flex flex-col justify-center items-center relative">
            <div className="w-4/5 flex justify-between items-center mb-8">
                <div className="text-2xl font-semibold">Profile</div>
                <div className="flex text-sm text-gray-500">
                    <a href="#" className="hover:underline">Dashboard</a> / <span className="ml-1 text-blue-600">Profile</span>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-4/5" >
                <div className="relative">
                    <img
                        src="https://static.vecteezy.com/ti/vetor-gratis/t1/1987871-abstrato-preto-listras-diagonal-fundo-gratis-vetor.jpg"
                        alt="Background"
                        className="w-full h-60 object-cover"
                    />
                    <div className="absolute top-40 right-0 m-4">
                        <button className="bg-blue-600 text-white px-2 py-1 rounded-md">
                            Edit
                        </button>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[56%]">
                        <div className="relative w-44 h-44">
                            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-100 to-white rounded-full p-1">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Profile"
                                    className="w-full h-full rounded-full border border-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <h2 className="text-2xl font-semibold text-gray-800">Danish Heilum</h2>
                    <p className="text-gray-600">UI/UX Designer</p>
                </div>


                <div className="flex box-shadow shadow-md justify-center mt-4 mx-auto border border-gray-300 rounded-md max-w-md min-h-[3.125rem]">
                    <div className="flex-1 flex justify-center items-center border-r border-gray-300">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-md font-bold text-gray-800">259</h3>
                            <p className="text-gray-600">Posts</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center border-r border-gray-300">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-md font-bold text-gray-800">129K</h3>
                            <p className="text-gray-600">Followers</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-md font-bold text-gray-800">2K</h3>
                            <p className="text-gray-600">Following</p>
                        </div>
                    </div>
                </div>


                <div className="px-6 py-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
                    <p className="text-gray-600 text-sm mt-2 mx-auto max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut.
                        Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero.
                        Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.
                    </p>
                </div>

                <div className="px-6 py-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Follow me on</h3>
                    <div className="flex justify-center mt-4">
                        <a href="#" className="text-blue-500 mx-2">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-blue-400 mx-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-blue-600 mx-2">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-gray-600 mx-2">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
