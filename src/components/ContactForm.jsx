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
                       placeholder="Tommy"
                       className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm