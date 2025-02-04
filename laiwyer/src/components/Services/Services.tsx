"use client";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import Card from "../Cards/Card";
import { useState, useEffect } from "react";
import styles from './page.module.css';

const bokor = Oswald({ weight: "400" });

const projects = [
  {
    title: "Our Aim: Empowering Legal Accessibility",
    description: "We are committed to making legal information accessible, understandable, and actionable. Our services aim to simplify complex legal processes through innovative technology.",
    src: "home.jpg", // Use a relevant image for this card, maybe a logo or a symbol representing the mission
    link: "#", // This could link to a "more about us" page if necessary
    color: "#808080" // Professional, calm, and trust-inducing color
  },
  {
    title: "Voice-Powered Legal Queries",
    description: "Ask your legal doubts out loud and get instant, AI-powered responses. With voice recognition, getting legal insights has never been easier.",
    src: "serv1.png",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#818589 " // Professional blue
  },
  {
    title: "Scan & Analyze Documents",
    description: "Upload case files, and let our AI tool simplify and summarize them into actionable insights. Saving time and improving efficiency.",
    src: "serv2.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#71797E" // Crisp, clear blue
  },
  {
    title: "NLP-Powered Case Research",
    description: "Use Natural Language Processing to quickly understand IPC sections and relevant case precedents. Boost your research productivity in seconds.",
    src: "serv3.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#D3D3D3" // Green for growth, reliability
  },
  {
    title: "AI-Generated Video Summaries",
    description: "Convert lengthy legal PDFs into concise and engaging video summaries. Get key insights visually, saving time while staying informed.",
    src: "serv4.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#E5E4E2" // Vibrant and dynamic yellow
  }
];

const Services = () => {
  return (
    <div className="bg-black">
      <main className={styles.main} id="services-section">
        {/* Heading will stay fixed above the cards */}
   

        {/* Display cards */}
        {projects.map((project, i) => (
          <Card key={`p_${i}`} {...project} i={i} />
        ))}
      </main>
    </div>
  );
};

export default Services;
