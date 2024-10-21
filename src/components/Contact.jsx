import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="Contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      {/* Container for form and contact details */}
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-16 mt-8">
        
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-4">
            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-gray-500 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Pulitha"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-gray-500 font-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Message input */}
            <div>
              <label htmlFor="message" className="block text-gray-500 font-semibold">
                Message or Query
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <p className="text-gray-700 mb-4">
              For further queries, please reach us at{" "}
              <a href="mailto:researchcoco@gmail.com" className="text-green-500 underline">
                researchlineaflex@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              Hope this project helped you in some manner. Thank you!
            </p>
            <p className="mt-4 font-semibold">- Team LineaFlex</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
