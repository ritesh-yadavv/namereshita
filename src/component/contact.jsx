import React from "react";
import Contactemail from "../email/contactemail";


const Contact = () => {


  return (


    <section className="text-gray-600 body-font justify-center xl:pl-14 bg-[#4b5563] mt-10">
      <div className="container montserrat justify-around  py-24 mx-auto flex max-md:flex-wrap xl:max-w-7xl gap-5  ">
        <div className="lg:w-1/2 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0 md:ml-10">
        <Contactemail />
        </div>
        

        <div className="lg:w-1/2 md:w-1/2 bg-gray-300  rounded-lg overflow-hidden flex items-end justify-start relative sm:mr-8 mt-8 h-auto md:h-[530px] lg:h-[570px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.2427914005366!2d85.11089357539602!3d25.630066277434867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed598429fcedc3%3A0x244c09a2e216fa41!2sMangaldeep%20Apartment!5e0!3m2!1sen!2sin!4v1719557355710!5m2!1sen!2sin"
            width="100%"
            height="600"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 mx-5 my-5 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1 text-sm">Flat no.33 Managaldeep Apartment, Patliputra Colony, Patna, 800013</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:info@reshita.in" className="text-red-500 leading-relaxed">info@reshita.in</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">0612-4061095</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Contact;
