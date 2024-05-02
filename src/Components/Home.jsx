import React from 'react';
import Navbar from './Navbar';
import { useNavigate,Link } from 'react-router-dom';
import About from './About';


const Home = () => {
    return (
        <>
        <Navbar/>
        
        <div className="flex items-center">
            <div className="flex flex-col px-[22px] pt-[3rem] pb-[1rem] md:px-[4rem] md:py-[6rem]">
                <div >
                    <p className="text-2xl md:text-5xl font-extrabold font-poppins leading-9 md:leading-relaxed">LOREM <span className="text-[#1379F2] text-2xl md:text-5xl font-extrabold font-poppins" >IPSUM</span></p>
                    <p className="font-poppins md:text-2xl max-w-xs md:max-w-2xl text-[#2A2727] text-opacity-50 ">Lorem Ipsum is a dummy text which I don't know what to right 
                        here so I am writing a random text here cbdbcdbjd
                    </p>
                </div>

                <div className="flex gap-6 md:gap-10 py-[2rem]">
                    <a className="font-poppins bg-[#1379F2] px-6 py-2 md:px-10 md:py-3 text-center text-white font-bold rounded-md"  href="">Sign Up</a>
                    <a className="font-poppins border border-[#1379F2] px-6 py-2 md:px-10 md:py-3  rounded-md text-[#1379F2] font-bold"  href="">Login</a>
                </div>
            </div>

            <div></div>
        </div>

        <About/>

        </>
        
    );
}

export default Home;
