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
        <Navbar/>

        <div className="flex flex-col">

            <div>
            <div className="flex flex-col text-center justify-center px-[4rem] py-[3rem] gap-10">
                <input className="text-[#000000] text-opacity-25 px-[1rem] py-[1rem] border border-[#000000] border-opacity-15 rounded-lg" type="text" name="name" placeholder="Enter your name"/>
                <input className="text-[#000000] text-opacity-25 px-[1rem] py-[1rem] border border-[#000000] border-opacity-15 rounded-lg" type="text" name="name" placeholder="Enter your name"/>
                <input className="text-[#000000] text-opacity-25 px-[1rem] py-[1rem] border border-[#000000] border-opacity-15 rounded-lg" type="text" name="name" placeholder="Enter your name"/>
            </div>

            <div className="flex justify-center">
                <button className="text-center px-[2.3rem] bg-[#1379F2] py-[1rem] rounded-lg text-white font-bold">Create an account</button>
            </div>

            <div className="place-items-center text-center py-[3rem]">
                <p className="text-lg text-[#000000] text-opacity-40">Already have an account ? <span className="text-[#1379F2] font-bold">Login</span></p>
            </div>
            </div>

            <div className="bg-[#1379F2]">
                <div className="flex flex-col gap-6 justify-center text-center px-[2.5rem] pt-[2rem] pb-[6rem]">
                    <p className="font-poppins text-white text-3xl font-bold" >Create Your Account</p>
                    <p className="font-poppins text-white text-lg text-opacity-85" >Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic  </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Signup;
