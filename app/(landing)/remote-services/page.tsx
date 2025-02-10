import { Separator } from "@/components/ui/separator";
import { Check, Package, ScreenShare } from "lucide-react";
import Faq from "./_components/faq";
import { Metadata } from "next";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewCard } from "../_components/reviews";

export const metadata: Metadata = {
  title: "Services - Workflow Made Easy",
  description:
    "Reach out to us today and schedule your complimentary discovery call. We'll delve into your business needs, pain points, and objectives, exploring how we can maximize your use of monday.com!",
};

export default function ServicePage() {
  const packages = [
    {
      name: "Starter-Kit",
      info: "Startup Essential",
      description: "Most Popular",
      validity: "Validity : 6 weeks",
      features: ["1 Advanced workflow", "25 hours package"],
    },
    {
      name: "Comprehensive",
      info: "Business Ready",
      description: "Recommended",
      validity: "Validity : 3 months",
      features: ["1 to 2 Advanced Workflows", "50 hours package"],
    },
    {
      name: "Ultimate",
      price: "$9,000",
      info: "Maximum Value",
      description: "Best value",
      validity: "Validity : 6 months",
      features: ["3 to 4 Advanced workflows", "100 Hours Package"],
    },
    {
      name: "Custom Enterprise Solutions",
      custom:
        "Bespoke Development: Tailor software or systems specifically to the complex requirements of a Medium to large organization, including integration with existing infrastructure.",
    },
  ];

  const otherPackages = [
    {
      name: "Ongoing Support",
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

  const reviews = [
    // MONDAY.COM
    {
      projectName: "Consulting & Strategy, Integrations, Data Services, Training & Enablement, Platform Configuration, Workflow Optimization",
      rating: 5,
      reviewText:
        "Workflow Made Easy Unlocked Our Workflow's Full Potential I wanted to take a moment to express my profound gratitude to Eddy, Kessi, and Chan from Workflow Made Easy for their outstanding support in transforming our real estate management system here in Phuket. Facing an urgent need for a robust and efficient solution, we reached out to them for assistance. To our amazement, they flew to our office on extremely short notice, ready to tackle our challenges head-on. Throughout the entire week, they provided hands-on guidance as we had been using Monday.com but not to its full potential. Their expertise was invaluable—they helped us create customized workflows that perfectly fit our needs. They patiently walked us through advanced features, ensuring we fully understood how to leverage the platform to optimize our operations. The on-site implementation was more than just enhancing our system; it was an educational experience that empowered our team. Their dedication and personalized approach not only met but exceeded our expectations. I highly recommend Workflow Made Easy to any organization looking to maximize their workflow management. Their commitment to client success and ability to deliver under tight deadlines is truly exceptional. — Silvain",
      sourceLogo: "/images/monday-logo.png",
    },
    {
      projectName: "Consulting & Strategy",
      rating: 5,
      reviewText:
        "I can't say enough great things about Eddy and the team at Workflow Made Easy. They took the time to truly understand our tutoring center’s needs and thoughtfully outlined the requirements for our project. Their diligence and expertise in creating a customized solution were outstanding. The project was no small task — it involved integrating Monday.com with multiple platforms like Make.com, Excel sheets, and more. They rebuilt our entire operational system from the ground up, including features for monitoring payments, tracking hours purchased, scheduling, and so much more. This wasn't my first project with them, and it certainly won't be my last. Their professionalism, technical expertise, and ability to streamline complex processes have been invaluable to our business. If you're looking for a team that delivers exceptional results, Workflow Made Easy is the way to go.",
      sourceLogo: "/images/monday-logo.png",
    },
    {
      projectName: "Consulting & Strategy...",
      rating: 5,
      reviewText:
        "Everything was clear and easy to work with. All the workflow and CRM issues I was having have been addressed after only a few meetings. The communication from the team was likewise really good. I highly recommend Eddy and his team to anyone and everyone.",
      sourceLogo: "/images/monday-logo.png",
    },
    {
      projectName: "Consulting & Strategy",
      rating: 5,
      reviewText:
        "Travailler avec Eddy a été un véritable atout pour notre équipe. Grâce à sa maîtrise de l'outil Monday, il a révolutionné notre gestion de projet en adaptant la plateforme à nos besoins. Son expertise a permis d'optimiser notre organisation et d'améliorer notre productivité. Eddy sait être à l'écoute et est toujours prêt à partager des conseils pour tirer le meilleur parti de cet outil. Je le recommande sans hésiter pour toute équipe souhaitant structurer efficacement ses projets.",
      sourceLogo: "/images/monday-logo.png",
    },
    {
      projectName: "Consulting & Strategy",
      rating: 5,
      reviewText:
        "We really liked working with Eddy on our project. He was very efficiant, understood our needs and resumed his work with videos which helped us a lot. Our business is in french and he spoke very well, he was able to communicate perfectly with our team. Eddy was very easy to reach either by video call or email, even with the timezone differences. We recommend Eddy, we are very happy with the work he did for our business.",
      sourceLogo: "/images/monday-logo.png",
    },
    // UPWORK
    {
      projectName: "Project: monday.com Work Flow optimization",
      rating: 5,
      reviewText:
        "Eddy has been integral to the growth of our business! His insight, dedication, and support on Monday.com have made Eddy a key part of our team. I wouldn’t hesitate to recommend him for any process-related projects. A++",
      sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName: "Project: monday Scorecard",
      rating: 5,
      reviewText:
        "Eddy is a Monday expert and an absolutely phenomenal partner to work with. I can't recommend him enough. He will execute any ideas/solutions you have beyond your best expectations.",
      sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName: "Project: monday.com setup",
      rating: 5,
      reviewText:
        "Eddy is a real monday.com master. Knows what he's doing, responsive and delivers. What more could we have asked for...",
      sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName:
        "Project: monday.com expert needed for fine tuning & training",
      rating: 5,
      reviewText:
        "Eddy is great! He is extremely knowledgeable in the monday.com software. He always made the effort to fit me in last minute, and took the time to explain each process with me when I didn't understand something. He has helped me build complicated automations and gave me suggestions to improve my current boards. I will be hiring Eddy again in the future whenever I need further help to develop my monday boards. Thanks Eddy!",
      sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName: "Project: monday.com Training For Small Business",
      rating: 5,
      reviewText:
        "Eddy did an amazing job at training our team on how to use Monday.com. He is extremely professional, knowledgeable and communicates really well. We will definitely be hiring him in the future for any further training. Thanks Eddy!",
      sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName:
        "Project: Monday.com expert need to automate, optimize and integrate platform",
      rating: 5,
      reviewText:
        "Eddy is a real monday.com master. Knows what he's doing, responsive and delivers. What more could we have asked for....",
      sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName: "Project: monday.com setup",
      rating: 5,
      reviewText:
        "I hired Eddy to help me out with setting up Monday.com. He was super helpful, and a really great hire. I highly recommend him. Eddy is exceptionally well informed about Monday.com, I was impressed by how up-to-date his knowledge is. He was even able to tell me what features are coming soon in updates. He was easy to work with, patient, and a very good communicator. He answered all my questions and showed me some things I didn't even know I needed to know. I'm very glad that I hired him, I feel that our brief time together saved me hours of trying to figure things out on my own. I do look forward to working with him again, as my Monday.com needs grow.",
      sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName: "Project: monday.com expert needed for growing agency",
      rating: 5,
      reviewText:
        "Excellent work and highly recommend Eddy! He was extremely knowledgeable about monday.com, very responsive with excellent communication. He understood our needs and quickly revamped our workflow. We will definitely continue an ongoing relationship with him. Thank you, Eddy - GREAT JOB!",
      sourceLogo: "/images/upwork-logo.png",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="bg-gray-100 text-center pt-16 pb-6  md:py-16 overflow-x-hidden">
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
              </h3>
              <div className="text-right">
                <p className="text-sm text-gray-400">{pkg.validity}</p>
              </div>
            </div>
            <div>
              <p className="py-2 text-sm">{pkg.info}</p>
            </div>
            <Separator className="my-2" />

            <div className="mt-2 mb-4"></div>
            <ul className="mb-4">
              {pkg.features &&
                pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center py-2">
                    <Check className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-4" />
                    <p className="text-medium text-gray-700 flex-1">
                      {feature}
                    </p>
                  </li>
                ))}
              <p>{pkg.custom}</p>
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center my-16">
        <Link
          href="contact-us"
          className="bg-[#f4d752] text-2xl py-4 px-4 rounded-lg font-medium"
        >
          Request a Quote
        </Link>
      </div>

      <div className="flex items-center justify-center py-4 md:py-12">
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
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                {pkg.name}
              </h3>
            </div>
            <Separator className="my-2" />

            <ul className="mb-4">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center py-2">
                  <Check className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-4" />
                  <p className="text-medium text-gray-700 flex-1">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-16 mb-12">
        <Carousel className="w-10/12">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ReviewCard {...review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous review" className="-left-20" />
          <CarouselNext aria-label="Next review" className="-right-20" />
        </Carousel>
      </div>

      <Faq />
      <div className="py-8 md:py-16 flex items-center justify-center flex-col ">
        <h3 className="text-2xl font-medium text-center pb-4">
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
