import React from 'react'
import Image from 'next/image'
import LandingInput from './landingInput'
// import bg from '@/images/website-background.jpg'

const Info = () => {
  return (
    <div className="relative grid place-content-center bg-cover h-[100vh] w-[100vw] bg-center bg-[url('/website-background.jpg')]">
        {/* <Image src={bg} className="relative"/> */}
        <div className="text-center h-[100vh] grid place-content-center">
            <h1 className="text-5xl font-bold">Your Virtual Legal Assistant, Anytime, Anywhere</h1>
            <h2 className="text-3xl my-4">Ask, listen, and understand complex laws with ease.</h2>
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