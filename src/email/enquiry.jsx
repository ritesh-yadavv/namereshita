import React, { useState } from "react";
import emailjs from "emailjs-com";
import Smiling from "../assets/portrait-smiling.svg";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    doctorName: "",
    email: "",
    mobileNumber: "",
    contactNo: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Send the email using EmailJS
    emailjs
      .send(
        "service_togx5oh", // Replace with your EmailJS Service ID
        "template_rp0c06a", // Replace with your EmailJS Template ID
        formData,
        "OvH1UKHtuu9VAGgpJ" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          setFormData({
            doctorName: "",
            email: "",
            mobileNumber: "",
            contactNo: "",
            address: "",
            city: "",
            zipCode: "",
            state: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          setError("Failed to submit the form. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bg-[#E8E8E8] font-['Plus_Jakarta_Sans'] flex justify-normal  xl:justify-around h-full py-16    ">
      <div className= " bg-white shadow-2xl rounded-lg p-6 sm:p-12 mt-10 sm:mt-44   xl:mt-10 flex flex-col xl:flex-row xl:max-w-5xl w-full h-full relative xl:right-28 right-0">
        {/* Form Section */}
        <div className="relative z-10  text-center xl:text-left w-full xl:w-[72%]  mt-36 sm:mt-56 lg:mt-96 xl:mt-0">
          <h3 className="text-2xl sm:text-3xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#14509F] to-[#045F62]">
            Ready To Transform Your Practice!
          </h3>
          <p className="text-[#706F6F] mb-6 font-medium text-sm sm:text-lg">
            Fill in your details and we’ll have a Reshita representative get in
            touch with you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">


            {/* Doctor Name */}
            <input
              type="text"
              name="doctorName"
              placeholder="Doctor Name"
              value={formData.doctorName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Email and Mobile Number */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Address */}
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            ></textarea>

            {/* City, ZIP Code, and State */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full sm:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full sm:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full sm:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded-full font-normal transition duration-300 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#14509F] text-white hover:bg-[#42689C]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Schedule Demo"}
            </button>
            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </div>

        {/* Image Section */}
        <div className="absolute xl:relative -top-20 sm:-top-44 xl:top-0 left-[20%] md:left-[25%] xl:left-[25%] flex justify-center items-center">
          <div className="rounded-full overflow-hidden shadow-lg border-[8px]">
            <img
              src={Smiling}
              alt="Doctor"
              className="w-[200px] md:w-[400px]  lg:w-[500px] h-auto object-cover bg-[rgb(7,160,165)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
