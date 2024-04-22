import React from 'react';
import Navbar from './Navbar';
import { useNavigate,Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
        
        <div className="bg-[url('../public/SignUp-bg.png')] min-h-screen w-full bg-cover bg-center">
            <Navbar/>

            <div className="flex flex-col flex-wrap justify-center items-center h-[35.5rem] gap-2 p-4">
            <p className="text-3xl sm:text-4xl text-white md:text-6xl font-bold">Lorem&nbsp;<span className="text-[#74EEDF]">Ipsum</span></p>
            <p className="text-lg text-white md:text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa</p>

            <div className="flex text-center justify-center mt-6">
            <Link className="px-8 py-3 mx-6 bg-[#74EEDF] md:mx-10 md:px-10 md:py-3 rounded-md font-bold whitespace-nowrap " to="/signup">Sign Up</Link>
            <Link className="bg-white px-10 py-3 rounded-md font-bold" to="/login">Login</Link>
            </div>
        </div>

            


            {/* <div className="flex flex-col justify-end h-[38.25rem] gap-4">
                <div className="grid grid-flow-row text-center gap-2">
                </div>

                <div className="flex text-center justify-center gap-x-4 ">
                    <Link className="bg-[#74EEDF] mx-10 px-10 py-3 rounded-md" to="/">Sign Up</Link>
                    <Link className="bg-white px-10 py-3 rounded-md" to="/">Login</Link>
                </div>
            </div> */}

        </div>
        </>
        
    );
}

export default Home;
