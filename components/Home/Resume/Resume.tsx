import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact,FaGraduationCap, FaUniversity } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'



const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK PART  */}
        <div>
            <h1 className='
            text-3xl sm:text-4xl  font-bold text-white'>
                My Work <span className='text-cyan-200'>Experience</span>
            </h1>

            <div className="mt-10">
                <ResumeCard Icon={FaCodepen} role="Full-Stack Developer"
                Para='MERN Stack developer experienced in building scalable
                 full-stack applications with secure authentication and REST APIs.'/>
                <ResumeCard Icon={FaReact} role="Front-End Developer"
                 Para='React, Next.js & TypeScript developer specializing in responsive, 
                 SEO-friendly, and high-performance web applications with 
                 seamless API integration.'/>
                <ResumeCard Icon={BsDatabase} role="Backend Developer"
                 Para='Node.js & Express developer skilled in REST APIs,
                  JWT authentication, and database management'/>
            </div>
        </div>
        {/* Experince PART  */}
        <div>
             <h1 className='
            text-3xl sm:text-4xl  font-bold text-white'>
               My  <span className='text-cyan-200'>Education</span>
            </h1>
             <div className="mt-10">
                <ResumeCard 
                Icon={FaGraduationCap}
                 role="Master of Computer Application (MCA)"
                 date='Aug 2022 – May 2024'
                 Para={`Specialized in Computer Applications 
                       Strong foundation in MERN Stack & DSA
                       Worked on real-world full stack projects`}
                 subH='Chaudhary Charan Singh University, Meerut'     
                  />    

                <ResumeCard
                 Icon={FaUniversity }
                  role="Bachelor of Arts"
                  date='Aug 2018 – Nov 2021'
                  Para='Built strong communication & analytical skills'
                  subH='Veer Bahadur Singh Purvanchal University' 
                  />

                
                
            </div>
         </div>
      </div>
    </div>
  )
}

export default Resume
