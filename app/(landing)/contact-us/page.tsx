"use client";
import { Metadata } from "next";
import React, { useEffect } from "react";

const metadata: Metadata = {
  title: "Contact Us - Workflow Made Easy",
  description:
    "Contact us today to learn more about our services, schedule a consultation, or request a quote. Our team is here to help you optimize your workflow, boost productivity, and achieve your business goals. Reach out to us and discover how we can make your workflow easy!",
};

const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">Contact Us</h2>
      </div>
      <div className="text-center flex justify-center flex-col items-center h-full">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-2xl md:text-4xl mb-4 mt-16 ">
            Ready to get the most out of <br /> monday.com for your company ?
          </h3>
          Do not wait and get in touch with us now to discuss your needs 
          {/* <h3 className="text-2xl font-semibold text-[#f4d752] my-2">Contact us now</h3> */}
        </div>
         
         <div className="mt-8">
                  <iframe src="https://forms.monday.com/forms/embed/158a679e3264a56ba460b3f022dc56e4?r=use1" className="w-screen md:w-[650px] h-[1800px]"></iframe>
         </div>


{/*
        <div
          className="calendly-inline-widget w-full mt-0 md:mt-8 md:mt-0"
          data-url="https://calendly.com/w-m-e/discovery?hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
  ></div>
  */}
      </div>
    </div>
  );
};

export default ContactUs;
