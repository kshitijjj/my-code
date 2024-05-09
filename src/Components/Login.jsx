import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
   /*  const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [btntext,setBtntext]=useState("Login");


    async function handleSubmit(e){
        e.preventDefault();
        setBtntext("Authenticating...");
        setTimeout(async () => {
            try {
                const response=await axios.post("http://localhost:3001/login",{email,password});
    
                if(response.status===200){
                   await navigate("/home");
                }
    
            } catch (error) {
                console.log(error);
            }
        }, 2000);
        
    } */

    return (
        <>

        <div className="flex items-center gap-2 pt-[18px] pl-[22px] md:pl-[3.4rem] md:pt-[1.5rem]">
                <img src="../Logo.png" alt="" width={"24.32px"} height={"24.32px"}/>
                <p className="font-poppins font-extrabold text-lg md:text-2xl">Lorem</p>
        </div>

        <div className="" >
            <div className="flex flex-col md:flex-row ml-[1.2rem] mt-[1rem] md:ml-[3rem] md:justify-between ">
                <div className="flex flex-col gap-2 md:gap-6 mt-[3.5rem] md:justify-center md:h-[30rem]" >
                    <div>
                    <p className="text-4xl md:text-[3.5rem] md:leading-[5rem] font-extrabold leading-7">Welcome to </p>
                    <p className="text-[#2F88FF] text-4xl md:text-[3.5rem] font-extrabold">Lorem Ipsum</p>
                    </div>
                    <p className="max-w-xs text-[#000000] text-opacity-45 md:max-w-2xl md:text-[1.3rem]">Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic  </p>
                </div>

                <div className="flex flex-col gap-8 pr-16 mt-[3rem] md:justify-center md:h-[35rem] md:items-center md:pr-0 md:mr-[12rem] md:gap-12 md:ml-[3rem]">
                    <input className="border py-[1.2rem] pl-2 rounded-lg md:w-[25.75rem]" type="text" placeholder='Enter your email' />
                    <input className="border py-[1.2rem] pl-2 rounded-lg md:w-[25.75rem]" type="text" name="" id="" placeholder="Enter your password" />

                    <div className="mt-[2rem]">
                        <a className="bg-[#2F88FF] text-white  font-bold px-[3rem] py-[1rem] md:px-[6.5rem] md:text-md rounded-md" href="">Login </a>
                    </div>

                    <div className="mt-[2rem]">
                        <p className="text-[#000000] text-opacity-45 text-lg">Don't have an account?&nbsp;<span className="text-[#2F88FF] font-bold text-lg">Sign Up</span></p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Login;
