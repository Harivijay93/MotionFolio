import React from 'react'
import { useForm } from "react-hook-form";


const ContactForm = () => {
  
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  };

  const {register, handleSubmit} =useForm({
    defaultValues: initialValues
  })

  return (
    <div className='flex-center'>
        <form 
         onSubmit={handleSubmit(onSubmit)}
         className="w-full text-[#a7a7a7] flex flex-col gap-7">
            <div className="">
                <label  className="label"
                        htmlFor="name">Name</label>
                <input 
                 {...register("name")}
                type="text"
                       id="name"
                       placeholder="Enter your name"
                       className="input"/>
            </div>
            <div className="">
                <label  className="label"
                        htmlFor="name">Email Address</label>
                <input 
                       {...register("email")}
                       type="email"
                       id="email"
                       placeholder="Enter your email"
                       className="input"/>
            </div>
            <div className="">
                <label  className="label"
                        htmlFor="name">Subject</label>
                <input 
                       {...register("subject")}
                       type="text"
                       id="subject"
                       placeholder="Enter your subject"
                       className="input"/>
            </div>
            <div className="">
                <label  className="label"
                        htmlFor="name">Message</label>
                <textarea 
                       {...register("message")}
                       type="text"
                       id="message"
                       placeholder="Enter your message"
                       rows={"5"}
                       className="input"/>
            </div>
            <button type='submit' className='cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-300 transition-all duration-300'>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm