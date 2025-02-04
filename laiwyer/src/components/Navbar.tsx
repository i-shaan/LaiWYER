import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent absolute top-0 backdrop-blur-md z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-white">
        <div className="text-offWhite">lAIwyer</div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-4">
        <Button variant="ghost" className="text-white">
          Log In
        </Button>
        <Button variant="ghost" className=" text-offWhite ">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
