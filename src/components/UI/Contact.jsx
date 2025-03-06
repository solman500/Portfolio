
import React, { useState } from "react";
import db from "../../firebasse/firebassse";
import { addDoc, collection } from 'firebase/firestore';
import toast,{ Toaster } from 'react-hot-toast';


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submissionsRef = collection(db, "formSubmissions");
      await addDoc(submissionsRef, formData);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      toast.success("Form submitted successfully!"); // Display success toast message

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Message failed to send");
    }
  };






  return (
    <section id="contact" className="pb-16 ">
      <div className="continer">
        <h2 className="text-headingColor  font-[700] text-[2rem] mb-8">
          Get in Touch
        </h2>
        <div className="md:flex justify-between items-center ms-10 me-10">
          <div className="w-full md:w-1/2  h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.190925142252!2d32.8092951!3d25.9945624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14494c826f89a555%3A0x436535998fd7ae7!2z2YPZiNio2LHZiiDYp9mE2YXYsdmI2LHYjCDZhdiv2YrZhtipINmC2YHYt9iMINmC2YHYt9iMINmF2K3Yp9mB2LjYqSDZgtmG2Kc!5e0!3m2!1sar!2seg!4v1702846038661!5m2!1sar!2seg"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4  py-8">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="w-full border border-solid border-gray-300 rounded-[8px] py-2 px-4 focus:outline-none focus:border-primaryColor transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="mb-5">
                <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full border border-solid border-gray-300 rounded-[8px] py-2 px-4 focus:outline-none focus:border-primaryColor transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="mb-5">
                <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                  type="text"
                  placeholder="Supject"
                  className="w-full border border-solid border-gray-300 rounded-[8px] py-2 px-4 focus:outline-none focus:border-primaryColor transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="mb-5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  className="w-full border border-solid border-gray-300 rounded-[8px] py-2 px-4 focus:outline-none focus:border-primaryColor transition-all duration-300 ease-in-out"
                ></textarea>
              </div>
              <button type="submit" className="w-full p-3 foucs:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster  position ="top-center" /> 

    </section>
    
  );
};

export default Contact;
