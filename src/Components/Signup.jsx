import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import Onboarding from './onboarding';
import Navbar from './Navbar';

const Signup = () => {
    /* const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");                                        
    const [password,setPassword]=useState("");
    const [buttontext,setButtontext]=useState("Create an Account")
    const [text,setText]=useState(false);
    

    async function handleSubmit(e){
        e.preventDefault();
        setButtontext("Creating your account..")

        setTimeout(async () => {
            try {
                await navigate("/onboarding")
                const response=await axios.post("http://localhost:3001/signup",{name,email,password});
                console.log(response);
            } catch (error) {
                console.log(error);
            }    
        }, 2000);
    } */
    return (
        <>
        <div className="flex items-center gap-2 pt-[18px] pl-[24px] md:hidden">
                <img src="../Logo.png" alt="" width={"24.32px"} height={"24.32px"}/>
                <p className="font-poppins font-extrabold text-lg md:text-2xl">Lorem</p>
        </div>

        
        <div className="md:flex-row flex flex-col-reverse">
            <div className="bg-[#2F88FF] mt-[4rem] pb-[6rem] md:pt-[2rem] md:mt-[0rem] md:h-screen">
                
                <div className="hidden md:flex md:items-center md:gap-2 md:pt-[1px] md:pl-[24px]">
                <img src="../Logo.png" alt="" width={"24.32px"} height={"24.32px"}/>
                <p className="font-poppins font-extrabold text-lg md:text-2xl">Lorem</p>
                </div>
                <div className="flex flex-col justify-center text-center pt-[2.5rem] px-[2rem] md:text-left md:h-[32rem] md:pl-[2rem] md:pr-[8rem]">
                    <p className="text-[2.1rem] font-bold  text-white md:text-5xl ">Create your Account</p>
                    <p className="text-lg text-white pt-[12px] md:max-w-lg">Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic  </p>
                </div>
            </div>

            <div class="md:flex md:justify-center md:items-center md:h-[99vh] ">
    <div class="px-[2.5rem] pt-[4rem] md:pl-[11rem]">
        <div class="md:pt-[2rem]">
            <div class="flex flex-col justify-center text-center gap-6 px-[22px] pt-[16px] md:w-[31.25rem] md:gap-10"> 
                <input class="border py-[1rem] px-4 rounded-lg md:py-[1.2rem]" type="text" placeholder="Enter your name"/>
                <input class="border py-[1rem] px-4 rounded-lg md:py-[1.2rem]" type="email" placeholder="Enter your email"/>
                <input class="border py-[1rem] px-4 rounded-lg md:py-[1.2rem]" type="password" placeholder="Enter your password"/>

                <div class="pt-[32px]">
                    <a class="bg-[#2F88FF] text-white font-bold px-[28px] py-[16px] rounded-md" href="#">Create an account</a>
                </div>

                <div class="pt-[32px]">
                    <p class="text-nowrap">Already have an account?&nbsp;<span class="text-[#2F88FF] font-bold">Login</span></p>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
        </>
    );
}

export default Signup;
