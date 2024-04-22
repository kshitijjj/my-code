import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-black w-full p-7">
            <p className="text-xl text-white md:text-4xl font-bold md:ml-9">Lorem</p>

            <ul className="hidden md:flex mt-2">
                <a className="px-10 text-white text-lg cursor-pointer">Home</a>
                <a className="px-10 text-white text-lg cursor-pointer">About</a>
                <a className="px-10 text-white text-lg cursor-pointer">Contact</a>
            </ul>
        </nav>
    );
}

export default Navbar;
