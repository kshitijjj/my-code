import React from 'react';

const Navbar = () => {
    return (
        <>
        <div className="flex justify-between items-center w-full px-[22px] py-[16px] md:px-[4rem] md:py-[2rem] ">
            <div className="flex items-center gap-2">
                <img src="../Logo.png" alt="" width={"24.32px"} height={"24.32px"}/>
                <p className="font-poppins font-extrabold text-lg md:text-2xl">Lorem</p>
            </div>

            <div className="hidden md:flex md:items-center md:gap-x-16 ">
                <a className="font-poppins font-medium " href="">Home</a>
                <a className="font-poppins font-medium " href="">About</a>
                <a className="font-poppins font-medium " href="">Contact</a>
            </div>

            <div className="flex items-center gap-4 md:hidden">
                <div>
                    <img src="../profile.png" alt="" width={"24.32px"} height={"24.32px"}/>
                </div>
                <div>
                    <img src="../menu.png" alt="" width={"20.32px"} height={"20.32px"}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;
