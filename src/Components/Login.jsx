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

        <div className="flex items-center gap-2 pt-[18px] pl-[24px] md:hidden">
                <img src="../Logo.png" alt="" width={"24.32px"} height={"24.32px"}/>
                <p className="font-poppins font-extrabold text-lg md:text-2xl">Lorem</p>
        </div>

        <div className="flex flex-col ml-[1.2rem] mt-[1rem]" >
            <div>
                <div className="flex flex-col gap-2 mt-[3.5rem]">
                    <p className="text-4xl font-extrabold leading-7">Welcome to </p>
                    <p className="text-[#2F88FF] text-4xl font-extrabold">Lorem Ipsum</p>
                    <p className="max-w-xs text-[#000000] text-opacity-45">Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic</p>
                </div>

                <div className="flex flex-col gap-8 pr-16 mt-[3rem]">
                    <input className="border py-[1.2rem] pl-2 rounded-lg" type="text" placeholder='Enter your email' />
                    <input className="border py-[1.2rem] pl-2 rounded-lg" type="text" name="" id="" placeholder="Enter your password" />

                    <div className="mt-[2rem]">
                        <a className="bg-[#2F88FF] text-white  font-bold px-[3rem] py-[1rem] rounded-md" href="">Login </a>
                    </div>

                    <div className="mt-[2rem]">
                        <p className="text-[#000000] text-opacity-45 text-lg">Don't have an account?&nbsp;<span className="text-[#2F88FF] font-bold text-lg">Sign Up</span></p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        
        </>
    );
}

export default Login;
