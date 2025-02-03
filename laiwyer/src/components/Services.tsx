"use client";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";

const bokor = Oswald({ weight: "400" });

const Services = () => {
  return (
    <div className="p-4 bg-gradient-to-b from-black to-white">
      <div className={`${bokor.className} text-4xl font-bold mb-6 text-center`}>
        Services
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* First Card (Large - Spans 2 cols on larger screens) */}
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 relative group">
          <motion.div
            className="h-[25rem] bg-cover bg-center rounded-2xl border-2 border-[#2E2E2E] group-hover:opacity-90 cursor-pointer group-hover:scale-105 transition-all duration-300"
            style={{ backgroundImage: "url('/images/serv1.png')" }}
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {/* Default Text (Visible initially) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 group-hover:translate-y-10 transition-all duration-500">
              <span className="text-white text-2xl font-serif">
                Voice-Powered Legal Queries
              </span>
            </div>

            {/* Hover Text (Visible on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-white text-xl font-serif">
                Speak your legal doubts, get instant insights.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Second Card (Small) */}
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 relative group">
          <motion.div
            className="h-[25rem] bg-cover bg-center rounded-2xl border-2 border-[#2E2E2E] group-hover:opacity-90 cursor-pointer group-hover:scale-105 transition-all duration-300"
            style={{ backgroundImage: "url('/images/serv2.jpg')" }}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {/* Default Text (Visible initially) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 group-hover:translate-y-10 transition-all duration-500">
              <span className="text-white text-2xl font-serif">
                Scan & Analyze Documents
              </span>
            </div>

            {/* Hover Text (Visible on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-white text-xl font-serif">
                Upload case files, get simplified summaries.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Third Card (Small) */}
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 relative group">
          <motion.div
            className="h-[25rem] bg-cover bg-center rounded-2xl border-2 border-[#2E2E2E] group-hover:opacity-90 cursor-pointer group-hover:scale-105 transition-all duration-300"
            style={{ backgroundImage: "url('/images/serv3.jpg')" }}
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            {/* Default Text (Visible initially) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 group-hover:translate-y-10 transition-all duration-500">
              <span className="text-white text-2xl font-serif">
                NLP-Powered Case Research
              </span>
            </div>

            {/* Hover Text (Visible on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-white text-xl font-serif">
                Understand IPC sections, case precedents in seconds.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Fourth Card (Large - Spans 2 cols on larger screens) */}
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 relative group">
          <motion.div
            className="h-[25rem] bg-cover bg-center rounded-2xl border-2 border-[#2E2E2E] group-hover:opacity-90 cursor-pointer group-hover:scale-105 transition-all duration-300"
            style={{ backgroundImage: "url('/images/serv4.jpg')" }}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            {/* Default Text (Visible initially) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 group-hover:translate-y-10 transition-all duration-500">
              <span className="text-white text-2xl font-serif">
                Al-Generated Video Summaries
              </span>
            </div>

            {/* Hover Text (Visible on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-white text-xl font-serif">
                No more long PDFs—get legal insights in an engaging way.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
