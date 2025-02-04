import React from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent absolute top-0 backdrop-blur-md z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-white">
        <div className="text-offWhite">lAIwyer</div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-4">

        <Link href="/login">
        <Button variant="ghost" className="text-white">
          Log In
        </Button>
        </Link>
       <Link href="/signup">
       
        <Button variant="ghost" className=" text-offWhite ">
          Sign Up
        </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
