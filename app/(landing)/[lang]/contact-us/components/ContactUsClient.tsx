"use client";
import React, { useEffect } from "react";

const ContactUsClient = () => {
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
        <div className="mt-8">
            <iframe
                src="https://forms.monday.com/forms/embed/158a679e3264a56ba460b3f022dc56e4?r=use1"
                className="w-screen md:w-[650px] h-[1800px]"
            ></iframe>
        </div>
    );
};

export default ContactUsClient;
