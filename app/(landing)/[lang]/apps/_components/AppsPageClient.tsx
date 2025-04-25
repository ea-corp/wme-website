// components/AppsPageClient.tsx
"use client";

import React from "react";
import CustomizedAccordions from "./add-ons";

const AppsPageClient = ({ dict }: any) => {
    return (
        <div className="mx-auto max-w-7xl px-4 mt-24">
            <h3 className="font-semibold text-2xl">
                {dict.appsPage.title}
            </h3>
            <p className="mt-8 mb-16 text-lg">
                {dict.appsPage.description}
            </p>
            <CustomizedAccordions dict={dict} />
        </div>
    );
};

export default AppsPageClient;
