"use client"

import { useEffect, useState } from "react"
import { HandHelping, ScreenShare, Settings, UserCog } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = [
  {
    icon: UserCog,
    title: "Consulting",
    description: "Review and optimize your infrastructure",
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
    description: "Set up and customize your Monday.com workspace",
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
    description: "Ensure your team is effectively trained",
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
    description: "Continuous assistance and optimization",
    items: [
      "Monthly review of the solution",
      "Support your team with any questions they might have, this will help for a successful adoption of the solution that was built",
      "Optimization suggestions based on new features available or any changes in your business operations.",
    ],
  },
]

const packages = [
  {
    title: "Remote Services",
    description: "Get expert assistance from anywhere in the world",
    image: "/images/remote-work.webp",
    link: "/remote-services",
  },
  {
    title: "On-site Consulting",
    description: "We travel worldwide to implement Monday.com at your premises.",
    image: "/images/onsite-consulting.png",
    link: "/on-site-implementation-packages",
  },
]

export default function OurServices() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-8">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Maximize the value of Monday.com with our expert services. We bring years of experience to help you build
            the perfect solution for your organization.
          </p>
        </motion.div>

        {isMobile ? (
          // Mobile: Stacked view (all content visible)
          <div className="space-y-6">
            {services.map((service, serviceIndex) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: serviceIndex * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <service.icon className="w-5 h-5 mr-2 text-primary shrink-0" />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="mr-2 mt-1 bg-[#f4d752] rounded-full p-1 shrink-0">
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          // Desktop: Tabs view
          <Tabs defaultValue={services[0].title.toLowerCase()} className="w-full">
            <TabsList className="flex w-full mb-6">
              {services.map((service) => (
                <TabsTrigger
                  key={service.title}
                  value={service.title.toLowerCase()}
                  className="flex items-center whitespace-nowrap py-2 px-4 text-sm flex-1"
                >
                  <service.icon className="w-4 h-4 mr-2 shrink-0" />
                  <span>{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.title} value={service.title.toLowerCase()}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <service.icon className="w-6 h-6 mr-2 text-primary shrink-0" />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="mr-2 mt-1 bg-[#f4d752] rounded-full p-1 shrink-0">
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-base">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mb-8 md:mb-12 mt-12"
        >
          <h3 className="text-xl md:text-3xl font-bold mb-2">Choose Your Package</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the service package that best fits your needs and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <img
                  src={pkg.image || "/placeholder.svg?height=400&width=600"}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center">
                    <h4 className="text-white text-lg md:text-2xl font-bold mb-2">{pkg.title}</h4>
                    <p className="text-white text-xs md:text-sm mb-4">{pkg.description}</p>
                    <Button asChild className="bg-[#f4d752] text-black hover:bg-[#f4d752]/90">
                      <a href={pkg.link}>Learn more</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

