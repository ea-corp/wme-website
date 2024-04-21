import { Metadata } from "next";
import AddOns from "./_components/add-ons";


export const metadata: Metadata = {
  title: "Apps - Workflow Made Easy",
  description: "Explore our collection of powerful monday.com add-ons designed to enhance your workflow. Discover how these innovative tools can streamline your processes, boost productivity, and unlock new possibilities for your team. Elevate your monday.com experience with our curated selection of apps tailored to meet your unique needs."
};

export default function AppsPage() {
  return (
    <div className="px-8 md:px-32 py-16">
      <h3 className="font-semibold text-2xl">Our Selection of Monday.com Apps for Advanced Productivity</h3>
      <p className="mt-8 mb-16 text-lg">
        Discover the power of Monday.com apps, a suite of add-ons designed to
        effortlessly enhance the Monday.com platform. These apps expand the
        platform’s capabilities, offering new functionalities without the need
        for custom development. Each app is a ready-to-use, and available on
        Monday marketplace. Explore these apps to streamline your processes,
        increase productivity, and elevate your project management experience
        with the convenience of out-of-the-box solutions.
      </p>
      <AddOns />
    </div>
  );
}
