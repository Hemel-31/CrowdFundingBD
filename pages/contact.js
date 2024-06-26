import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-[#051725] p-8 rounded shadow-md w-full max-w-4xl text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Our Office</h2>
          <p className="text-gray-300">
            <strong>Address:</strong> 123 Amchotor Bus Tarminal, Rajshahi, Bangladesh
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong> +8801300000000
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> hemel@crowdfundingbd.com
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
