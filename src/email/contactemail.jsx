import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contactemail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    info: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    // Validate fields
    if (!formData.name || !formData.email || !formData.contact || !formData.service) {
      setError("All fields are required!");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Validate contact number (10 digits)
    if (!/^\d{10}$/.test(formData.contact)) {
      setError("Please enter a valid 10-digit contact number.");
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_9dasy8p", // Replace with your EmailJS Service ID
        "template_8jbkwt9", // Replace with your EmailJS Template ID
        formData,
        "cAgDWrgTA6uVFDq6y" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess("Your request has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            contact: "",
            service: "",
            info: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          setError("Failed to send your request. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="text-white p-6 rounded-lg bg-[#D9D9D933] backdrop-blur-lg w-full lg:w-[472px] h-auto lg:h-[570px] font-PlusJakartaSans">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
        Get In Touch
      </h3>
      <form className="space-y-4 xl:ml-3" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 block text-black font-semibold w-full lg:w-[400px] h-[45px] lg:h-[50px] rounded-md bg-[#D9D9D933] border border-white shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-sm"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 text-black font-semibold block w-full lg:w-[400px] h-[45px] lg:h-[50px] rounded-md bg-[#D9D9D933] border border-white shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-sm"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <input
            type="tel"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            className="p-4 text-black font-semibold block w-full lg:w-[400px] h-[45px] lg:h-[50px] rounded-md bg-[#D9D9D933] border border-white shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-sm"
            placeholder="Your Contact Number"
            required
          />
        </div>

        {/* Service Needed */}
        <div>
          <input
            type="text"
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="p-4 text-black font-semibold block w-full lg:w-[400px] h-[45px] lg:h-[50px] rounded-md bg-[#D9D9D933] border border-white shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-sm"
            placeholder="Service Needed"
            required
          />
        </div>

        {/* More Info */}
        <div>
          <textarea
            id="info"
            value={formData.info}
            onChange={handleChange}
            rows="3"
            className="p-4 text-black font-semibold w-full lg:w-[400px] h-[104px] rounded-md bg-[#D9D9D933] border border-white shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-sm"
            placeholder="Additional Information"
          ></textarea>
        </div>


        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full lg:w-[400px] h-[50px] py-2  px-4 font-medium rounded-full transition text-sm lg:text-base ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#14509F] text-white hover:bg-[#42689C]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Request a Quote"}
          </button>
          {error && <p className="text-red-500 text-sm" aria-live="polite">{error}</p>}
        {success && <p className="text-green-500 text-sm" aria-live="polite">{success}</p>}
        </div>
      </form>
    </div>
  );
};

export default Contactemail;
