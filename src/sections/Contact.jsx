import React from 'react'
import TitleHead from "../components/TitleHead";

const Contact = () => {
  return (
    <section id='contact' className="flex-center relative md:p-0 px-5">
        <div className="container w-full h-full my-20 md:my-40">
           <TitleHead 
           title={"Contact Me"} 
           text={"Let's collaborate on tailored, sustainable solutions"} 
           number={'04'} />
        </div>
    </section>
  )
}

export default Contact