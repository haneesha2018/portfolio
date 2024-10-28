import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Hero = () => {
  return (
    <div className= "pb-20 pt-36">
        <div className='h-screen'>
        <ShootingStars />
        <StarsBackground />
            <Spotlight 
                className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' 
                fill="white"/>
            <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="white"
            />
            <Spotlight 
                className="left-80 top-28 h-[80vh] w-[50vw]" 
                fill="white" />
                <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'> 
                    Hello, I'm Haneesha Dushara
                </h2>

                <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Aspiring Software Engineer'/>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I'm Haneesha.
            </p>
            <a href="/resume/Haneesha_Dushara_Full_Time_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border borde</a>r-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Preview Resume
            </button>
            </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero