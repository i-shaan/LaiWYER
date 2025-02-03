"use client";
import React, { useState, useEffect } from 'react';

const LandingInput = () => {
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
           setPlaceholderIndex((prevIndex) => 
             (prevIndex + 1) % placeholders.length
           );
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

   return (
     <div className="relative w-full ">
       <div className="relative">
         <input
            type="text"
            className="w-full text-black pr-10 pl-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder={placeholderText}
         />
         <button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 
            bg-gradient-to-br from-purple-400 to-purple-600 
            text-white px-3 py-1 rounded-md 
            hover:from-purple-500 hover:to-purple-700 
            transition-all duration-300 
            shadow-md hover:shadow-lg"
         >
           Search
         </button>
       </div>
     </div>
   );
};

export default LandingInput;