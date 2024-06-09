"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef(null);

  emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="min-h-screen text-white w-[81%] mx-auto">
      <h1 className="text-3xl ">Contact me</h1>
      <div className="flex flex-col gap-10  lg:flex-row pt-10 ">
        <div className="flex flex-col gap-4 flex-1 text-black">
          <h1 className="text-white">For Inquiry</h1>
          <form
            onSubmit={sendEmail}
            ref={form}
            className="flex flex-col gap-4  text-black"
          >
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your name"
              required
              name="from_name"
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone/WhatsApp"
              required
              name="phone"
            />
            <textarea
              id="message"
              rows="4"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1">
          <h1>Contact Details</h1>
          <label htmlFor="">Email</label>
          <p>yadavbivek@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
