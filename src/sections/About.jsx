import react from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TitleHead from "../components/TitleHead";
import GradientSpheres from "../components/GradientSpheres";
import { Alien } from "../components/models/Alien";
import { bentoSocialLinks } from "../constants";

// import gsap from "gsap";
// import {useGSAP}  from "@gsap/react";
// import { ScrollTrigger } from "@gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const About = () => {

//   useGSAP(() => {
//     gsap.from("#card" ,{
//         opacity: 0,
//         y:50,
//         stagger: 0.2,
//         duration: 0.8,
//         ease: "power3.inOut",
//         scrollTrigger:{
//             trigger:"#about",
//             start:"top top",
//             markers: false,
//         },
//     });

//     // Text Animation
//     gsap.from(".animate-text", {
//         opacity: 0,
//         y:20,
//         stagger: 0.15,
//         duration: 0.6,
//         ease: "power3.inOut",
//         scrollTrigger:{
//             trigger:"#about",
//             start:"top top",
//             markers: false,
//         },
//     });
//   }, []);

  return (
    <section id='about' className='flex-center relative md:p-0 px-5'>
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
                     {/* HEDGEHOG */}
                    <div className="md:col-span-5 col-span-12 row-span-5">
                       <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                        <div className='w-full h-full'>
                            <Canvas>
                                <OrbitControls enableZoom={false} />
                                <Alien scale={2} position={[0, -5.5, 0]} rotation={[0, -0.5, 0]} />
                            </Canvas>
                        </div>
                       </div>
                    </div>
                    {/* Web Design card */}
                    <div id="card" className="md:col-span-6 col-span-12 row-span-3">
                        <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                            <div className="flex flex-col h-full justify-center gap-2">
                            <h1 className="gradient-title md:text-3xl text-2xl font-medium animate-text">
                                Web Design & Dev
                            </h1>
                            <p className="md:text-2xl max-w-96 animate-text">
                                Cleanly Designed, Conversion-focused, and build for easy
                                updates.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div id="card" className="md:col-span-6 col-span-12 row-span-3">
                    <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                        <div className="flex flex-col h-full justify-center gap-2">
                        <h1 className="gradient-title md:text-3xl text-2xl font-medium animate-text">
                            UX UI Design
                        </h1>
                        <p className="md:text-2xl max-w-96 animate-text">
                            Seamless web or mobile app design to wow your users.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div id="card" className="md:col-span-4 col-span-12 row-span-4">
                    <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                        <div className="flex flex-col justify-between h-full">
                            {
                                [
                                    "BE YOURSELF!",
                                    "BE DIFFERENT!",
                                    "BUILD DIFFERENT!"
                                ].map(
                                    (text, index) => (
                                        <h1 className="gradient-title text-3xl md:text-5xl font-bold animate-text" key={index}>
                                            {text}
                                        </h1>
                                    )
                                )
                            }
                        </div>
                    </div>
                    </div>
                    {/* Social Link */}
                      {bentoSocialLinks.map((item, index) => (
                        <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                                <div className="flex justify-between items-center h-full">
                                    <div className="flex items-center md:gap-5">
                                        <img src={item.icon} alt={item.icon} />
                                        <h1 className="gradient-title md:text-3xl text-xl 
                                        md:m-0 ms-5 font-medium">
                                            {item.name}
                                        </h1>
                                    </div>
                                    <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                                        <i class='bx bxs-right-top-arrow-circle md:text-5xl text-3xl'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>

    </section>
  )
}

export default About