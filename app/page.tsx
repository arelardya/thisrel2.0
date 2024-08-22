"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useState } from "react";
import Head from "next/head";
import Typewriter from 'typewriter-effect'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Add custom CSS for carousel indicators
const carouselStyles = `
  .carousel .control-dots .dot {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  
  .carousel .control-dots .dot.selected {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Its Rel!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white dark:bg-black">
        <div className="min-h-screen flex flex-col">
          <nav className="py-10 mb-12 flex justify-between items-center px-10 bg-white dark:bg-black">
          <h1 className="text-xl text-black dark:text-white">thisrel2.0</h1>
            <ul className="flex items-center space-x-4">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl text-black dark:text-white" />
              </li>
            </ul>
          </nav>

          <div className="flex flex-col md:flex-row items-center justify-between p-10 py-10 relative flex-grow">
            <div className="text-left mb-8 md:mb-0">
              <h2 className="text-3xl py-2 text-black dark:text-white font-medium">Welcome! They call me</h2>
              <h2 className="text-teal-600 text-5xl font-serif dark:text-orange-700">
                <Typewriter
                  options={{
                    strings: ['rel', 'farrel', 'lele', 'arel', 'farrelelellel'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <div className="flex py-6 gap-6 mt-6">
                <AiFillTwitterCircle className="text-3xl text-gray-600 dark:text-white cursor-pointer" />
                <AiFillLinkedin className="text-3xl text-gray-600 dark:text-white cursor-pointer" />
                <AiFillGithub className="text-3xl text-gray-600 dark:text-white cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-center items-center">
              {darkMode ? (
                <Image src="/sketch-white.png" alt="Sketch in white mode" width={300} height={300} className="rounded-xl" />
              ) : (
                <Image src="/sketch-black.png" alt="Sketch in black mode" width={300} height={300} className="rounded-xl" />
              )}
            </div>
          </div>

          {/* ---------------About---------------*/}
          <h2 className="text-black dark:text-white text-3xl font-bold text-center mb-6 pt-36">About me.</h2>
          <div className="flex flex-col md:flex-row justify-between gap-6 px-4">
            <div className="shadow-lg p-10 rounded-xl flex-1 bg-white dark:bg-gray-800">
              <div className="text-black dark:text-white">
                <p>
                  Im currently a telecommunication major striving to learn more about the world of computer. Learning things like linux environment, web development, and cyber security. Cant wait to learn more and explore with all of you!
                </p>
              </div>
            </div>
            <div className="shadow-lg p-10 rounded-xl flex-1 bg-white dark:bg-gray-800">
              <div>
                <p className="text-black dark:text-white"><span className="text-yellow-500">Novice</span> C Language</p>
                <p className="text-black dark:text-white"><span className="text-yellow-500">Student</span> Frontend</p>
                <p className="text-black dark:text-white"><span className="text-yellow-500">Student</span> Linux</p>
              </div>
            </div>
            <div className="shadow-lg p-10 rounded-xl flex-1 bg-white dark:bg-gray-800 flex justify-center items-center">
              <Image src="/me.jpg" alt="A picture of me" width={200} height={200} className="rounded-xl" />
            </div>
          </div>

          {/* ---------------Experience---------------*/}
          <div className="my-10">
            <style jsx global>{carouselStyles}</style>
            <h2 className="text-black dark:text-white text-3xl font-bold text-center mb-6">Experience!</h2>
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
            >
              <div className="relative">
               <Image src="/turkey2.jpg" alt="Turkey Exchange" width={800} height={320} className="w-full h-80 object-cover mx-auto" />
               <p className="legend absolute bottom-0 left-0 bg-gray-800 text-white p-2">
                  Turkey Bilateral Exchange during Highschool. Learned the Turkish culture and explored Turkey&apos;s decarbonization programs
                </p>

              </div>
              <div className="relative">
               <Image src="/km2.jpg" alt="Internship at PT. Kirana Megatara" width={800} height={320} className="w-full h-80 object-cover mx-auto" />
                <p className="legend absolute bottom-0 left-0 bg-gray-800 text-white p-2">
                  Internship at PT. Kirana Megatara
                </p>
              </div>
              <div className="relative">
               <Image src="/rdv1.jpg" alt="Highschool Concert" width={800} height={320} className="w-full h-80 object-cover mx-auto" />
                <p className="legend absolute bottom-0 left-0 bg-gray-800 text-white p-2">
                  As a secretary, fully participated in making a large-scale Highschool Concert
                </p>
              </div>
            </Carousel>
          </div>

          {/* ---------------Projects---------------*/}
          <div className="my-10">
            <div className="w-full max-w-6xl mx-auto px-4 py-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-black dark:text-white text-3xl font-bold text-center mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://arelardya.github.io/thisrel/" target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <Image src="/thisrel.png" alt="First Porto Website" width={1000} height={500} className="w-full h-48 object-cover" />
                  <div className="p-6">
                  <h3 className="text-black dark:text-white text-xl font-semibold mb-2">thisrel</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      This was a portfolio website I made in August 2024.
                    </p>
                  </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <Image src="/dasmart.png" alt="Dasmart" width={1000} height={500} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-black dark:text-white text-xl font-semibold mb-2">Dasmart</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      A website project for Daskom Academy 2024.
                    </p>
                  </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <Image src="/white.png" alt="" width={1000} height={500} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-black dark:text-white text-xl font-semibold mb-2">More to come!</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Stay tuned for more projects.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------Footer---------------*/}
        <footer className="w-full bg-gray-800 text-white py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Farrel Ardya | Check my socials at home ;)</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
