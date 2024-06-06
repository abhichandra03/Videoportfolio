import { FC } from 'react'

interface ContactProps {
  
}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div
      id="contact"
      className=" w-full h-screen flex justify-center items-center p-4 "
    >
      <form
        action="https://getform.io/f/0b392aeb-cef8-49f8-b38e-d8f83596ce26"
        method="POST"
        className="flex flex-col max-w-[600px]  w-full"
      >
        <div className="b-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400 bebas">
            Contact
          </p>
          <p className="py-8">
            Submit the form or send me an email - <b>gayatrisingh231@gmail.com</b>
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2 text-gray-700 rounded-lg my-2 placeholder-gray-600"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6] text-gray-700 rounded-lg placeholder-gray-600"
        />
        <textarea
          name="Message"
          rows={10}
          className="bg-[#ccd6f6] text-gray-700 p-2 rounded-lg my-2 placeholder-gray-600 scrollbar-hidden no-scrollbar"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 rounded-lg hover:bg-pink-400 hover:border-none px-4 py-3 my-8 mx-auto flex items-center">
          {`Let's Collaborate`}
        </button>
      </form>
    </div>
  )
}

export default Contact