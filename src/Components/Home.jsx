import React from 'react';
import Card from './Card';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col justify-center px-[2.5rem] mt-[2rem] gap-16 text-left">
        <Card/>
        <Card/>
        </div>
        </>
        
    );
}

export default Home;
