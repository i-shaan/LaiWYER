"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import "../styles/landing.css";

const LandingInput = () => {
   const router = useRouter();

   const handleTryClick = () => {
     router.push("https://your-streamlit-app-url.com"); // Replace with your actual Streamlit app URL
   };

   return (
     <div className="relative h-screen flex flex-col items-center justify-center">
       <div className="relative grid place-content-center bg-cover h-[100vh] w-[100vw] bg-black">
         <div className="text-center h-[100vh] grid place-content-center">
           <div className="mx-[10]">
             <div className="flex w-full items-center">
               <div className="w-3/4 pr-8">
                 <h1 className="text-3xl md:text-5xl font-bold text-white font-sauce">
                   Your Virtual Legal Assistant, Anytime, Anywhere
                 </h1>
                 <h2 className="text-xl md:text-3xl my-4 text-[#737373] font-sauce">
                   Ask, listen, and understand complex laws with ease.
                 </h2>
                 <button
                   className="mt-4 px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                   onClick={handleTryClick}
                 >
                   Try Now
                 </button>
               </div>
               <div className="w-1/4">
                 <Image className="rounded-xl" src="/images/home2.avif" alt="Search Illustration" width={400} height={500} />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default LandingInput;
