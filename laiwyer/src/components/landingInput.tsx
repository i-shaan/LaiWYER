"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Image from 'next/image';
import { Open } from "next/font/google";
import "../styles/landing.css";

const LandingInput = () => {
   const router = useRouter();
   const placeholders = [
     'What is the statute of limitations?',
     'Define mens rea in criminal law',
     'Explain fair use doctrine',
     'What constitutes breach of contract?',
     'Rights of Miranda warning explained',
     'Define habeas corpus principle',
     'What is tort liability?',
     'Explain legal precedent',
     'What are intellectual property rights?',
     'Define reasonable doubt standard'
   ];

   const [placeholderText, setPlaceholderText] = useState('');
   const [placeholderIndex, setPlaceholderIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
   const [input, setInput] = useState('');

   useEffect(() => {
     const current = placeholders[placeholderIndex];
     const typingSpeed = 100;
     const deletingSpeed = 50;
     const pauseBetween = 2000;

     const handleTyping = () => {
       if (isDeleting) {
         if (placeholderText.length > 0) {
           setPlaceholderText(current.substring(0, placeholderText.length - 1));
         } else {
           setIsDeleting(false);
           setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
         }
       } else {
         if (placeholderText.length < current.length) {
           setPlaceholderText(current.substring(0, placeholderText.length + 1));
         } else {
           setTimeout(() => setIsDeleting(true), pauseBetween);
         }
       }
     };

     const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
     return () => clearTimeout(timer);
   }, [placeholderText, placeholderIndex, isDeleting]);

   const handleClick = () => {
     if (input.trim()) {
       router.push(`/search?query=${encodeURIComponent(input.trim())}`);
     }
   };

   const handleKeyPress = (e) => {
     if (e.key === 'Enter' && input.trim()) {
       router.push(`/search?query=${encodeURIComponent(input.trim())}`);
     }
   };

   return (
     <div className="relative h-screen flex flex-col items-center justify-center">
     
       <div className="relative grid place-content-center bg-cover h-[100vh] w-[100vw] bg-black">
         <div className="text-center h-[100vh] grid place-content-center ">

           <div className="mx-[10]  ">
             <div className="flex w-full items-center">
               <div className="w-3/4 pr-8">
               <h1 className="text-3xl md:text-5xl font-bold text-white font-sauce">Your Virtual Legal Assistant, Anytime, Anywhere</h1>
           <h2 className="text-xl md:text-3xl my-4 text-[#737373] font-sauce">Ask, listen, and understand complex laws with ease.</h2>
                 <input
                   type="text"
                   className="w-full  pr-10 pl-3 py-2 border rounded-xl focus:outline-none bg-white focus:ring-2 focus:bg-white text-[#737373]"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyPress={handleKeyPress}
                   placeholder={placeholderText}
                 />
                 <button
                   className="mt-2  px-4 py-2 rounded-md bg-gray-100 text-[#737373] hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
                   onClick={handleClick}
                 >
                   Search
                 </button>
               </div>
               <div className="w-1/4 ">
                 <Image className=" rounded-xl" src="/images/home2.avif" alt="Search Illustration" width={400} height={500} />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default LandingInput;