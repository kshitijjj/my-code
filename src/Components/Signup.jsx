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
        <div className="flex items-center gap-2 pt-[18px] pl-[24px] ">
                <img src="../Logo.png" alt="" width={"24.32px"} height={"24.32px"}/>
                <p className="font-poppins font-extrabold text-lg md:text-2xl">Lorem</p>
        </div>
        <div className="flex flex-col-reverse">
            <div className="bg-[#2F88FF] mt-[4rem] pb-[6rem]">
                <div>

                </div>
                <div className="flex flex-col justify-center text-center pt-[2.5rem] px-[2rem]">
                    <p className="text-[2.1rem] font-bold  text-white ">Create your account</p>
                    <p className="text-lg text-white pt-[12px]">Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic Lorem ipsum is a dummy text which i don’t know what to right here so i am writing a random text here bjdcdchdic  </p>
                </div>
            </div>

            <div>
                <div className="px-[2.5rem] pt-[4rem]">
                    <div className="flex flex-col justify-center text-center gap-6 px-[22px] pt-[16px]"> 
                        <input className="border py-[1rem] pl-4 rounded-lg" type="text" placeholder="Enter your name" />
                        <input className="border py-[1rem] pl-4 rounded-lg" type="email" name="" id="" placeholder='Enter your email' />
                        <input className="border py-[1rem] pl-4 rounded-lg" type="password" name="" id="" placeholder="Enter your password"/>

                        <div className="pt-[32px]">
                            <a className="bg-[#2F88FF] text-white font-bold px-[28px] py-[16px] rounded-md" href="">Create an account</a>
                        </div>

                        <div className="pt-[32px]">
                            <p className="text-xl">Already have an account ?&nbsp;<span className="text-[#2F88FF] font-bold">Login</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Signup;
