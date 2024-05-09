import React from 'react';

function Card (props){
    return (
       <>
       <div className="flex flex-col rounded-lg mt-[4rem] md:max-w-md">
            <img className="h-[11.25rem] md:h-[13.25rem]"   src="../1.png" alt="" srcset="" height={"11.25rem"}/>
            <div className="pt-[0.8rem] px-[1rem]">
                <p className="text-[#2F88FF] font-bold text-2xl leading-10">Slinkify</p>
                <p className="text-md ">Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic Lorem ipsum</p>
            </div>

            <div className="mt-[2rem] px-[1rem]">
                <a className="bg-[#2F88FF] px-[2.3rem] py-[0.8rem] text-left rounded-lg text-white font-bold" href="">Open</a>
            </div>
       </div>
       </>
    );
}

export default Card;
