import { HandHelping, ScreenShare, Settings, UserCog } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: UserCog, 
    title: "Consulting",
    items: [
      "Review current infrastructure",
      "Mapping existing processes",
      "Identify the bottlenecks & propose solutions",
      "Discuss how Monday can be implemented according to your requirements",
      "List all apps that will be required and how they would interact with each others.",
    ],
  },
  {
    icon: Settings,
    title: "Implementation",
    items: [
      "Setting up account and boards permission",
      "Building & Customizing boards",
      "Setting up automations",
      "Setting up Monday apps or 3rd Party Integration",
      "Set dashboards for reporting",
      "Data Migration to Monday.com from other platforms",
      "Custom Development using Zapier/Make.com or by leveraging Monday’s API",
    ],
  },
  {
    icon: ScreenShare,
    title: "Training & User Adoption",
    items: [
      "Ensuring that your team is effectively trained is a critical part of a successful implementation.",
      "We provide different type of training On-Site or via Videoconferencing",
      "Training for managers or dedicated Monday.com admin in the company",
      "Group training with the concerned department",
      "To keep the training interactive and for maximum efficiency we suggest that the group do not exceed 15 persons",
    ],
  },
  {
    icon: HandHelping, 
    title: "Ongoing Support",
    items: [
      "Monthly review of the solution",
      "Support your team with any questions they might have, this will help for a successful adoption of the solution that was built",
      "Optimization suggestions based on new features available or any changes in your business operations.",
    ],
  },
];

export default function OurServices() {
  return (
    <div className="bg-gray-100 flex flex-col items-center py-16">
      <h2 className="font-semibold text-3xl">Our Services</h2>
      <p className="py-8 px-8 md:px-40 lg:px-72 text-justify">
        Because Monday.com is very easy to use some of us tend to jump into it
        too quickly and later on face limitations that cannot be solved and need
        to start all over again. We believe that your time is precious and tech
        challenges can get overwhelming. At WME, we have been implementing
        Monday.com for hundreds of clients in various industries and therefore
        we have the necessary experience to help your organization maximize the
        value of the platform. By partnering with WME, you will benefit from our
        experience, you will be able to focus on your business while we take
        care of building the perfect Monday.com solution for you.
      </p>
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center">
                <service.icon size={64} className="text-[#f4d752]" />
              </div>
              <h3 className="text-lg text-center font-semibold mt-5 mb-3">
                {service.title}
              </h3>
              <ul className="text-sm text-justify">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2 ml-2 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 py-8">
          <a
            href="/remote-services"
            className="bg-[#f4d752] text-white py-4 px-4 rounded transition-colors duration-300"
          >
            See our packages
          </a>
        </div>
      </div>
    </div>
  );
}
