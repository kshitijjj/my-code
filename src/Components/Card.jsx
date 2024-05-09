import React from 'react';

function Card (props){
    return (
       <>
       <div className="flex flex-col rounded-lg mt-[2rem]">
            <img src="../1.png" alt="" srcset="" />
            <div className="pt-[0.8rem]">
                <p className="text-[#2F88FF] font-bold text-2xl leading-10">Slinkify</p>
                <p className="text-md px-[1rem]">Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic Lorem ipsum</p>
            </div>

            <div className="mt-[2rem]">
                <a className="bg-[#2F88FF] px-[2.3rem] py-[0.8rem] rounded-lg text-white font-bold" href="">Open</a>
            </div>
       </div>
       </>
    );
}

export default Card;
