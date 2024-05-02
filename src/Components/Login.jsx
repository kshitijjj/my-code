import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const navigate=useNavigate();
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
        
    }

    return (
        <div className="min-h-screen w-full bg-cover bg-center flex flex-col justify-center md:flex lg:flex-row lg:justify-between">
            
            <div className=" bg-black bg-opacity-25 md:p-40 max-h-screen sm:w-full lg:w-1/2">
                <div className="flex flex-col justify-center items-center  gap-y-16">
                    <form className="flex flex-col gap-y-12 " action="" method="post" onSubmit={handleSubmit}>
                        <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" className="align-middle text-center text-black py-3.5 rounded-md md:w-96 w-64"  type="email" name="username" id="" />
                        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" className="align-middle text-center text-black py-3.5 rounded-md md:w-96 w-64" type="password" name="username" id="" />
                        <button className="text-lg md:text-lg rounded-lg border-[#74EEDF] text-white border-[1.5px] hover:bg-[#74EEDF] hover:text-black px-12 py-2.5 whitespace-nowrap" >{btntext}</button>
                    </form>

                </div>

                <div className="flex justify-center mt-8 py-8">
                    <p className="text-white px-3 text-lg whitespace-nowrap">Already have an account ?</p>
                    <Link className="text-[#74EEDF] whitespace-nowrap text-lg" to="/signup">Sign up</Link>
                </div>
            </div>


            <div className="md:m-auto md:p-10  flex flex-col justify-center  gap-y-3 p-12" >
                <p className="text-4xl lg:text-6xl md:text-5xl text-center lg:text-left font-bold text-white">Lorem <span className="sm:text-3xl lg:text-6xl md:text-5xl font-bold text-[#74EEDF]">Ipsum</span></p>
                <p className="text-md text-center lg:text-left max-w-xl text-white px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque, soluta placeat eum suscipit beatae? Atque dolorum </p>
            </div>

            
        </div>
    );
}

export default Login;
