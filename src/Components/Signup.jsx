import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="bg-[url('../public/SignUp-bg.png')] min-h-screen w-full bg-cover bg-center flex flex-col-reverse justify-center md:flex lg:flex-row lg:justify-between">
            
            <div className="md:m-auto md:p-10  flex flex-col justify-center  gap-y-3 p-12" >
                <p className="text-4xl lg:text-6xl text-center lg:text-left font-bold text-white">Lorem <span className="sm:text-4xl lg:text-6xl md:text-5xl font-bold text-[#74EEDF]">Ipsum</span></p>
                <p className="text-md text-center lg:text-left max-w-xl text-white px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque, soluta placeat eum suscipit beatae? Atque dolorum </p>
            </div>

            <div className="bg-black backdrop-blur-2xl lg:p-40  max-h-screen sm:w-full lg:w-1/2">
                <div className="flex flex-col justify-center items-center  gap-y-16">
                    <form className="flex flex-col gap-y-12 " action="" method="post">
                        <input placeholder="username" className="align-middle text-center text-black py-3.5 rounded-md md:w-96 w-64"  type="text" name="username" id="" />
                        <input placeholder="password" className="align-middle text-center text-black py-3.5 rounded-md md:w-96 w-64" type="text" name="username" id="" />
                    </form>

                    <a className="text-lg md:text-lg rounded-lg border-[#74EEDF] text-white border-[1.5px] hover:bg-[#74EEDF] hover:text-black px-12 py-2.5 whitespace-nowrap" href="">Sign ups</a>
                </div>

                <div className="flex justify-center mt-8 py-8">
                    <p className="text-white px-3 text-lg whitespace-nowrap">Already have an account ?</p>
                    <a className="text-[#74EEDF] text-lg" href="">Login</a>
                </div>
            </div>
        </div>



    );
}

export default Signup;
