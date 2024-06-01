import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen text-white w-[81%] mx-auto">
      <h1>Contact me</h1>
      <div className="flex flex-col gap-10  lg:flex-row  ">
        <div className="flex flex-col gap-4 flex-1">
          <h1>For Inquiry</h1>
          <input type="text" placeholder="Your fullname" />
          <input type="text" placeholder="Your email" />
          <input type="text" placeholder="Phone/whatsApp" />
          <textarea type="text" placeholder="message for e" />
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
