import React from 'react';

function Card (props){
    return (
       <>
       <div className="border-2 border-[#74EEDF] rounded-lg bg-[#72F5E5] bg-opacity-15 w-md ">
            <div className="flex flex-col p-10">

                <div className="flex justify-between">
                    <p className="text-[#74EEDF] text-3xl font-bold ">{props.text}</p>
                </div>

                <p className="text-xl pt-2 text-white">This is a dummy text of this page ncbd bdb mkvdv mbkvhd bkvd</p>

                <div className="flex justify-end mt-8">
                    <a className="bg-black border-2 border-[#74EEDF] text-white font-bold hover:bg-[#74EEDF] hover:text-black bg-opacity-25 rounded-full px-10 py-2" href="">Next</a>
                </div> 

            </div>
       </div>
       </>
    );
}

export default Card;
