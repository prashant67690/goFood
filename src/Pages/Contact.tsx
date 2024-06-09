import React from "react";
import "../index.css";
import image1 from "../assets/contact-image.png";

const Contact = () => {
  return (
    <section className="grid grid-cols-5">
      <div className="col-span-3 custom-padding h-screen bg-zinc-100">
        <div className="text-2xl font-semibold ml-6 ">
          <a href="/">
            {" "}
            GO <strong className="font-bold">FOOD</strong>
          </a>
        </div>
        <div className="max-w-md ml-6">
          <h1 className="text-xl font-semibold mt-6 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Fill out the form below to get in touch.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <button className="mt-4 px-5 py-2 bg-green-900 text-white rounded-3xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="col-span-2 bg-green-900 flex items-center justify-center">
        <img
          src={image1}
          alt="Contact Us"
          className="custom-width-100 custom-img-2 p-0 m-0"
        />
      </div>
    </section>
  );
};

export default Contact;
