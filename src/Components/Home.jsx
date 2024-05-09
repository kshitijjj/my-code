import React from 'react';
import Card from './Card';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col justify-center px-[3.25rem] gap-16 text-left pb-[6rem]">
        <Card/>
        <Card/>
        </div>
        </>
        
    );
}

export default Home;
