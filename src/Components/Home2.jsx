import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

const Home2 = () => {
    return (
        <>
        <div className="bg-[url('../public/SignUp-bg.png')] min-h-screen w-full bg-cover bg-center">
            <Navbar/>

            <div className="flex flex-col md:flex-row justify-center gap-x-20 m-40">
                <Card text="Slinkify"/>
                <Card text="Quotes App"/>
            </div>
        </div>
        </>
    );
}

export default Home2;
