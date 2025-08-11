import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex-center'>
        <form className="w-full text-[#a7a7a7] flex flex-col gap-7">
            <div className="">
                <label  className="block text-white md:text-2xl font-semibold mb-2"
                        htmlFor="name">Name</label>
                <input type="text"
                       id="name"
                       placeholder="Enter your name"
                       className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"/>
            </div>
            <div className="">
                <label  className="block text-white md:text-2xl font-semibold mb-2"
                        htmlFor="name">Email Address</label>
                <input type="text"
                       id="name"
                       placeholder="Enter your email"
                       className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"/>
            </div>
            <div className="">
                <label  className="block text-white md:text-2xl font-semibold mb-2"
                        htmlFor="name">Subject</label>
                <input type="text"
                       id="name"
                       placeholder="Enter your subject"
                       className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"/>
            </div>
            <div className="">
                <label  className="block text-white md:text-2xl font-semibold mb-2"
                        htmlFor="name">Message</label>
                <textarea type="text"
                       id="name"
                       placeholder="Enter your message"
                       rows={"5"}
                       className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm