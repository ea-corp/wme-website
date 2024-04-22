import { Separator } from "@/components/ui/separator";
import { Check, Package, ScreenShare } from "lucide-react";
import { Metadata } from "next";
import Faq from "../../_components/faq";

export const metadata: Metadata = {
  title: "Services - Workflow Made Easy",
  description: "Reach out to us today and schedule your complimentary discovery call. We'll delve into your business needs, pain points, and objectives, exploring how we can maximize your use of monday.com!",
};


export default function ServicePage() {
  const packages = [
    {
      name: "Starter-Kit",
      price: "$2,750",
      description: "Most Popular",
      validity: "6 weeks",
      features: ["1 Advanced workflow", "25 hours package"],
    },
    {
      name: "Comprehensive",
      price: "$5,000",
      description: "Recommended",
      validity: "3 months",
      features: ["1 to 2 Advanced Workflows", "50 hours package"],
    },
    {
      name: "Ultimate",
      price: "$9,000",
      description: "Best value",
      validity: "6 months",
      features: ["3 to 4 Advanced workflows", "100 Hours Package"],
    },
  ];

  const otherPackages = [
    {
      name: "Ongoing Support",
      price: "$390",
      time: "month",
      validity: "6 weeks",
      features: [
        "4 hours per month",
        "Review of the built solution",
        "Small Fixes when required",
        "Q&A from your team",
        "Optimization suggestions based on new features available or any changes in your business.",
        "Assessment and full reporting on the usage of the built workflow",
        "Free Cancellation at any time",
      ],
    },
    {
      name: "Ad Hoc Consultation",
      price: "$150",
      time: "hour",
      validity: "3 months",
      features: [
        "Session(s) of 60 mins with Monday Expert",
        "Video calls & Screensharing",
        "Determine if Monday.com is the right tool",
        "Quick Fixes",
        "Assessment on your current set-up",
        "Q&A",
      ],
    },
  ];

  return (
    <div>
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">Remote services</h2>
      </div>
      <div className="flex items-center justify-center py-12">
        <h2 className="text-2xl font-medium flex items-center">
          <ScreenShare size={35} className="text-yellow-400" />
          &nbsp; Remote Implementation
        </h2>
      </div>
      <div className="flex justify-center flex-wrap">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
          >
            <div className="flex justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {pkg.name}
                <p className="text-sm text-gray-500">{pkg.description}</p>
              </h3>
              <div className="text-right">
                <p className="text-sm text-gray-400">Starts at</p>
                <p className="text-xl font-semibold">{pkg.price}</p>
                <p className="text-sm text-gray-400">
                  Validity: {pkg.validity}
                </p>
              </div>
            </div>
            <Separator className="my-2" />

            <div className="mt-2 mb-4"></div>
            <ul className="mb-4">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center py-2">
                  <Check className="flex-shrink-0 h-6 w-6 text-green-500 mr-4" />
                  <p className="text-medium text-gray-700 flex-1">{feature}</p>
                </li>
              ))}
            </ul>
            <a
              href="https://forms.monday.com/forms/096ad93b812843c5fb105813a01755d6?r=use1"
              target="_blank"
              className="mt-4 w-full inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f4d752] hover:bg-[#f4d752] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Buy Package
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-12">
        <h2 className="text-2xl font-medium flex items-center">
          <Package size={35} className="text-[#f4d752]" />
          &nbsp; Others Packages
        </h2>
      </div>
      <div className="flex justify-center flex-wrap">
        {otherPackages.map((pkg) => (
          <div
            key={pkg.name}
            className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
          >
            <div className="flex justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {pkg.name}
              </h3>
              <div className="text-right">
                <p className="text-xl font-semibold">{pkg.price}</p>
                <p className="text-sm text-gray-400">/{pkg.time}</p>
              </div>
            </div>
            <Separator className="my-2" />

            <ul className="mb-4">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center py-2">
                  <Check className="flex-shrink-0 h-6 w-6 text-green-500 mr-4" />
                  <p className="text-medium text-gray-700 flex-1">{feature}</p>
                </li>
              ))}
            </ul>
            <a
              href="https://forms.monday.com/forms/096ad93b812843c5fb105813a01755d6?r=use1"
              target="_blank"
              className="mt-4 w-full inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-400 hover:bg-[#f4d752] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Buy Package
            </a>
          </div>
        ))}
      </div>
      <Faq />
      <div className="bg-gray-100 py-16 flex items-center justify-center flex-col">
        <h3 className="text-2xl font-medium py-4">
          Contact us now to find out which package suits you best
        </h3>
        <div className="flex w-full ml-4 mt-4 justify-center">
          <a
            href="contact-us"
            target="_blank"
            className="bg-[#f4d752] text-black py-4 px-6 rounded-xl flex"
          >
            <p className="font-bold text-sm">Book a Free Call</p>
          </a>
        </div>
      </div>
    </div>
  );
}
