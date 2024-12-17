import React, { useState } from "react";
import emailjs from "emailjs-com";

const Careerform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    role: "",
    portfolioLink: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setFileName(uploadedFile ? uploadedFile.name : "");
  };

  const validateFields = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.email) validationErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Invalid email format.";
    if (!formData.contactNumber)
      validationErrors.contactNumber = "Contact number is required.";
    else if (!/^\d{10}$/.test(formData.contactNumber))
      validationErrors.contactNumber =
        "Invalid contact number. Must be 10 digits.";
    if (!formData.role) validationErrors.role = "Role is required.";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");
    setIsSubmitting(true);

    // Validate fields
    if (!validateFields()) {
      setIsSubmitting(false);
      return;
    }

    // Convert file to Base64
    let base64File = null;
    if (file) {
      try {
        base64File = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.onerror = () => reject("File read error");
          reader.readAsDataURL(file);
        });
      } catch (error) {
        console.error("File Error:", error);
        setErrors({ form: "File upload failed. Please try again with a smaller file." });
        setIsSubmitting(false);
        return;
      }
    }

    // Prepare EmailJS payload
    const templateParams = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      role: formData.role,
      portfolioLink: formData.portfolioLink || "Not provided",
      fileName: fileName || "No file uploaded",
      fileContent: base64File, // Attach the Base64 content here
    };

    // Send Email via EmailJS
    try {
      await emailjs.send(
        "service_bghpy3p", // Replace with your EmailJS Service ID
        "template_rvfko4h", // Replace with your EmailJS Template ID
        templateParams,
        "ISEKbBs-SeXrOMPcW" // Replace with your EmailJS Public Key
      );
      setSuccess("Your application has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        role: "",
        portfolioLink: "",
      });
      setFile(null);
      setFileName("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({
        form: "Failed to submit your application. Please try again. If the issue persists, contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#D9D9D933] shadow-lg rounded-lg relative w-full xl:w-[700px] xl:h-[350px] h-auto p-6 xl:ml-32 sm:p-12">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 xl:grid-cols-2 gap-4"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`p-3 w-full rounded-lg backdrop-blur-2xl shadow-lg bg-[#D9D9D933] border-2 text-[#FFFFFFCC] focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""
              }`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleInputChange}
            className={`p-3 w-full rounded-lg backdrop-blur-2xl shadow-lg bg-[#D9D9D933] border-2 text-[#FFFFFFCC] focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : ""
              }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className={`p-3 w-full rounded-lg backdrop-blur-2xl shadow-lg bg-[#D9D9D933] border-2 text-[#FFFFFFCC] focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.contactNumber ? "border-red-500" : ""
              }`}
            required
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="role"
            placeholder="Mention Role"
            value={formData.role}
            onChange={handleInputChange}
            className={`p-3 w-full rounded-lg backdrop-blur-2xl shadow-lg bg-[#D9D9D933] border-2 text-[#FFFFFFCC] focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.role ? "border-red-500" : ""
              }`}
            required
          />
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role}</p>
          )}
        </div>
        <input
          type="url"
          name="portfolioLink"
          placeholder="Portfolio Link"
          value={formData.portfolioLink}
          onChange={handleInputChange}
          className="p-3 rounded-lg backdrop-blur-2xl shadow-lg bg-[#D9D9D933] border-2 text-[#FFFFFFCC] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className=" flex justify-center ">
          <input
            type="file"
            onChange={handleFileUpload}
            id="file-upload"
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="w-full  h-[50px] text-sm cursor-pointer py-2 px-4 rounded-lg border-2 inset-2 backdrop-blur-2xl shadow-lg bg-[#D9D9D933] border- text-[#FFFFFFCC]  flex items-center  justify-between"
          >
            <span>{fileName ? fileName : 'Upload Resume'}</span>

            {/* Conditionally render the icon */}
            {!fileName && (
              <i className="fas fa-upload"></i>
            )}
          </label>
        </div>
        <div className="relative text-center justify-center mt-4 xl:mt-0 xl:col-span-2">
          {errors.form && <p className="text-red-500 mb-2">{errors.form}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-[154px] h-[48px] bg-[#14509F] text-white font-medium rounded-full transition text-sm sm:text-base ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "hover:bg-[#42689C]"
              }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Careerform;
