import React from 'react'
import GradientSpheres from '../components/GradientSpheres'
import TitleHead from '../components/TitleHead'

const About = () => {
  return (
    <section id='about' className='flex-center relative md:p-0 px-5 border border-red-500'>
        <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"}/>

        <div className='container w-full h-full my-20 md:my-40 relative z-10'>
            <TitleHead title={"About Me"} text={"Passionate Frontend Developer"} number={'01'} />

            <div className="mt-10 md:mt-20">
                <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
                    <div className="col-span-12 md:col-span-7 row-span-5">
                        <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                            <div className="">
                                <img src="/images/flower.svg" alt="flower" className='w-16 md:w-32 flower' />
                            </div>
                            <div className="mt-5"> 
                                <h1 className="text-blue-50 text-3xl md:text-5xl">Harinath</h1>
                                <p className="md:text-2xl mt-2">
                                    I’m a web developer who enjoys building clean, responsive websites using React, Tailwind CSS, and modern JavaScript. I like creating smooth and interactive user experiences, and I’m also familiar with backend tools like SQL Server and SAP Business One. I’m always looking to learn new things and improve my skills through creative projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About