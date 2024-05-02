import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar"
import axios from 'axios';

const LinkShortner = () => {
    const [link,setLink]=useState("");
    const [ans,setAns]=useState(false);
    const [slink,setSlink]=useState(null);
    return (
        <div>
            <Navbar/>

            <div className=" min-h-screen w-full bg-cover bg-center">
                <div className="flex flex-col p-20">
                    <p className="text-5xl px-10 py-4 text-[#74EEDF] font-bold">Slinkify</p>
                    <p className="text-white text-xl max-w-5xl px-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut facilis voluptatem sequi reiciendis. Enim, quo nihil nemo a tempora officia eum quos molestias impedit sed veniam. Similique, voluptates exercitationem.</p>

                    <form className="hover:bg-opacity-25 flex gap-x-4 border-2 border-[#74EEDF] bg-[#72F5E5] p-3 rounded-md max-w-3xl m-10 bg-opacity-15">
                        <input className="w-[36.25rem] px-4 text-white bg-transparent focus:border-transparent focus:outline-none -2 rounded-md " type="url"  name="link" placeholder="Enter the URL" value={link} onChange={(e)=>{console.log(e.target.value);setLink(e.target.value)}} />
                        <button className="bg-[#72F5E5] px-6 py-2 rounded-md" type="submit" whitespace-nowrap >Shorten URL</button>
                    </form>

                    {ans && (
                        <div className=" hover:bg-opacity-25 flex flex-row gap-x-4 border-2 border-[#74EEDF] bg-[#72F5E5] p-3 rounded-md max-w-lg ml-10 bg-opacity-15">
                        <button className="bg-[#72F5E5] rounded-md" type="submit" whitespace-nowrap ><img src="../copy.png" alt="" srcset="" /></button>
                        <button className="bg-[#72F5E5] rounded-md" type="submit" whitespace-nowrap ><img src="../qr.png" alt="" srcset="" /></button>
                        </div>
                    )}
                    
                </div>

                
            </div>

        </div>
    );
}

export default LinkShortner;
