import { Separator } from "@/components/ui/separator";
import { getDatabase } from "@/lib/notion";
import { Building, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Site Consulting - Workflow Made Easy",
  description:
    "Discover our on-site consulting services tailored to optimize your business operations. Our expert consultants work closely with your team to analyze, strategize, and implement tailored solutions that drive efficiency and success.",
};
async function getPosts() {
  const database = await getDatabase();
  // Filtrer les données pour ne prendre que celles avec certains titres
  const filteredPosts = database.filter((post: any) => {
    // Ajoutez ici vos conditions pour filtrer selon les titres
    return (
      post.properties &&
      post.properties.Title &&
      post.properties.Title.title &&
      post.properties.Title.title[0] &&
      post.properties.Title.title[0].text &&
      post.properties.Title.title[0].text.content &&
      (post.properties.Title.title[0].text.content.includes(
        "A Week of Innovation and Collaboration: On-Site Consulting in the Heart of London",
      ) ||
        post.properties.Title.title[0].text.content.includes(
          "A Week of Transformative Collaboration in Oranmore",
        ))
    );
  });
  return filteredPosts;
}

export default async function ServicePage() {
  let posts: any = await getPosts();

  posts.sort((a: any, b: any) => {
    const dateStringA = a.properties.Date.rich_text[0].text.content;
    const dateStringB = b.properties.Date.rich_text[0].text.content;

    const [monthA, yearA] = dateStringA.split(" ");
    const [monthB, yearB] = dateStringB.split(" ");

    const dateA = new Date(`${monthA} 1, ${yearA}`);
    const dateB = new Date(`${monthB} 1, ${yearB}`);

    return dateB.getTime() - dateA.getTime();
  });

  const packages = [
    {
      name: "Fast Track Package",
      price: "1 week on-site*",
      description:
        "Get up and running with Monday.com in no time. Ideal for small to medium-sized companies.",
      features: [
        "Meeting with the different stakeholders(Managers, CEO, teams, etc.)",
        "Review of the actual system and tools in use",
        "Map processes in place and identify bottlenecks",
        "Assessment on your current setup compared to monday.com capability & features",
        "A comprehensive walkthrough of Monday.com exposing the various capabilities with a demo of real use cases that can/has been applied to your business",
        "Discuss about possible integrations about some of your system in place",
        "Questions and Answers",
        "Define the best setup possible for your company using Monday.com and how to start implementing the ideal system would work and how Monday will be set in order to achieve the target",
        "Building & sharing some real case scenarios that can be used to build your system on Monday.com. Please note that some company will have a dedicated person handling the setup of Monday.com but WME provide also full implementation services based on the diagnostic made.",
      ],
    },
    {
      name: "Enterprise Package",
      price: "2 to 3 weeks on-site*",
      description:
        "Ideal for companies where the implementation of Monday.com is required in several divisions (e.g Sales, Operation, HR, Marketing, etc...)",
      features: [
        "Same as the discovery package",
        "1 to 2 senior consultant of WME",
        "Time will be shared between meeting with the stakeholders and creation/implementation of the solution on Monday.com as needed.",
        "Full remote support of our office based team if required",
        "Enablement of our $2,000 package containing apps & plugins that we have developed and that we will enable in your Monday account for a lifetime",
        "Creation of interactive user guides for the solution implemented.",
      ],
    },
  ];

  return (
    <div>
      <div className="bg-gray-100 text-center pt-16 pb-6 md:py-16">
        <h2 className="text-4xl font-semibold">Services</h2>
      </div>
      <div className="flex items-center justify-center py-12">
        <h2 className="text-2xl font-medium flex items-center">
          <Building size={35} className="text-yellow-400" />
          &nbsp; On-Site Consulting
        </h2>
      </div>
      <p className="px-8 md:px-64 py-8">
        We travel worldwide to implement Monday.com at your premises. <br />{" "}
        <br />
        On-site implementations are very efficient as we will be able to
        interact easily with your team and understand your work environment and
        its challenges. <br /> <br />
        We will map your processes and implement a Monday.com solution working
        closely with your team. You will be able to test the solution stage by
        stage, share your feedback and we can together build a tailor-made
        workflow.
        <br /> <br /> This type of collaborative building has proven to have the
        highest adoption success rate. On-Site Implementation usually
        facilitates meetings with the different stakeholders (Managers, CEO,
        Teams, etc.), creating a unique collaborative working experience.
      </p>
      <div className="flex justify-center flex-wrap">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
          >
            <div className="flex justify-between flex-col items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {pkg.name}
              </h3>
              <br />
              <div className="text-right">
                <p className="text-gray-500 text-sm text-center">{pkg.price}</p>
              </div>
            </div>
            <br />
            <p className="text-sm text-center text-gray-500">
              {pkg.description}
            </p>
            <Separator className="my-4" />

            <div className="mt-2 mb-4"></div>
            <ul className="mb-4">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center py-2">
                  <Check className="flex-shrink-0 h-6 w-6 text-[#f4d752] mr-4" />
                  <p className="text-medium text-gray-700 flex-1">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 20).map((post: any, index: number) => (
          <a
            key={index}
            href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div>
              {post.properties &&
                post.properties.BannerImage &&
                post.properties.BannerImage.url && (
                  <img
                    src={post.properties.BannerImage.url}
                    alt={post.properties.Title.title[0].text.content}
                    className="w-full h-[350px] object-cover"
                  />
                )}
            </div>
            <div className="p-6">
              {post.properties &&
                post.properties.Title &&
                post.properties.Title.title &&
                post.properties.Title.title[0] &&
                post.properties.Title.title[0].text &&
                post.properties.Title.title[0].text.content && (
                  <h3 className="text-xl font-semibold mb-4">
                    {post.properties.Title.title[0].text.content}
                  </h3>
                )}
              {post.properties &&
                post.properties.Location &&
                post.properties.Location.rich_text &&
                post.properties.Location.rich_text[0] &&
                post.properties.Location.rich_text[0].text &&
                post.properties.Location.rich_text[0].text.content && (
                  <p className="text-lg font-medium">
                    {post.properties.Location.rich_text[0].text.content}
                  </p>
                )}
              {post.properties &&
                post.properties.Date &&
                post.properties.Date.rich_text &&
                post.properties.Date.rich_text[0] &&
                post.properties.Date.rich_text[0].text &&
                post.properties.Date.rich_text[0].text.content && (
                  <p className="text-lg font-medium">
                    {post.properties.Date.rich_text[0].text.content}
                  </p>
                )}
            </div>
          </a>
        ))}
      </div>
      <div className="bg-gray-100 pt-4 pb-8 md:py-12 flex items-center justify-center flex-col mt-16">
        <h3 className="text-xl md:text-2xl font-medium py-8 text-center mx-2">
          Pricing varies depending on the location and the duration <br /> of
          each on-site implementation. Get in touch with us for more <br />{" "}
          details and to receive a proposal.
        </h3>
        <div className="flex w-full ml-4 mt-0 md:mt-4 justify-center">
          <a
            href="contact-us"
            className="bg-[#f4d752] text-black py-4 px-6 rounded-xl flex"
          >
            <p className="font-bold text-sm">Get in touch</p>
          </a>
        </div>
      </div>
    </div>
  );
}
