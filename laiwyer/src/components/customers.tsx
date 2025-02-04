import React from "react";
import { Roboto } from "next/font/google";

const font = Roboto({ weight: "400" });

const Customers = () => {
  return (
    <div>
      <div
        className={`${font.className} bg-gradient-to-br from-[#2b2930] to-[#18161c] rounded-xl  w-[90vw] md:w-[70vw] lg:w-[60vw] mx-auto my-10 flex flex-col justify-between p-4`}
      >
        <div className="text-xl md:text-3xl text-center font-semibold">
          Who is lAIwyer for ?
        </div>
        <div className="w-[60%] mx-auto text-center mt-2 mb-12 text-lg text-[#868589] leading-1">
          Supercharge your legal work with AI-powered research and automation—so
          you can focus on what matters most.
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-around text-left">
          <div className="flex flex-col bg-[#18151b] p-4 rounded-xl h-48 w-56">
            <div className="text-2xl font-light">For law students</div>

            <div className="text-sm text-[#868589]">
              Aids law students with quick legal insights and case summaries.
            </div>
          </div>
          <div className="flex flex-col bg-[#18151b] p-4 rounded-xl h-48 w-56">
            <div className="text-2xl font-light">For lawyers</div>

            <div className="text-sm text-[#868589]">
              Helps lawyers with research, precedents, and strategy suggestions.
            </div>
          </div>
          <div className="flex flex-col bg-[#18151b] p-4 rounded-xl h-48 w-56">
            <div className="text-2xl font-light">For legal consumers</div>

            <div className="text-sm text-[#868589]">
              Simplifies legal advice and clarifies complex terms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
