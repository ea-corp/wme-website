import { HandHelping, ScreenShare, Settings, UserCog } from "lucide-react";

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
      "Custom Development using Zapier/Make.com or by leveraging Monday's API",
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
    <div className="bg-gray-100 flex flex-col items-center py-8 md:py-16">
      <h2 className="font-semibold text-2xl md:text-3xl text-center px-4">Our Services</h2>
      <p className="py-6 md:py-8 px-4 md:px-8 lg:px-8 text-sm md:text-base text-justify">
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
      <div className="w-full max-w-7xl px-4 md:px-5 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-center">
                <service.icon size={48} className="text-[#f4d752] md:w-16 md:h-16" />
              </div>
              <h3 className="text-lg md:text-xl text-center font-semibold mt-4 mb-3">
                {service.title}
              </h3>
              <ul className="text-sm md:text-base space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 pt-8">
          <a
            href="/remote-services"
            className="bg-[#f4d752] text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-colors duration-300 inline-block text-sm md:text-base"
          >
            See our packages
          </a>
        </div>
      </div>
    </div>
  );
}