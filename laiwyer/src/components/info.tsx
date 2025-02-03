import React from 'react'
import Image from 'next/image'
import LandingInput from './landingInput'
import "../styles/landing.css"
// import bg from '@/images/website-background.jpg'

const Info = () => {
  return (
    <div className="relative grid place-content-center bg-cover h-[100vh] w-[100vw] bg-center bg-gradient-to-b from-white to-black">
        {/* <Image src={bg} className="relative"/> */}
        <div className="text-center h-[100vh] grid place-content-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gradient">Your Virtual Legal Assistant, Anytime, Anywhere</h1>
            <h2 className="text-xl md:text-3xl my-4 text-gradient">Ask, listen, and understand complex laws with ease.</h2>
            <div className="mx-auto w-[60%] mt-4">

            <LandingInput />
            </div>
            
        </div>
        <div>
        </div>
    </div>
    
  )
}

export default Info