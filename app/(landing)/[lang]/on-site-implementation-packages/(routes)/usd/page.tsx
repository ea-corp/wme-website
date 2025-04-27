import { ReviewCard } from "@/app/(landing)/_components/reviews";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { getDatabase } from "@/lib/notion";
import { Building, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Site Consulting - WME Solutions",
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
        )) ||
      post.properties.Title.title[0].text.content.includes(
        "Bridging Business and Technology: A Pivotal Week in Bangkok",
      )
    );
  });
  return filteredPosts;
}

export default async function ServicePage({ params }: any) {
  const lang = params.lang

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


  const reviews = [
    // MONDAY.COM
    {
      projectName: "Consulting & Strategy, Integrations, Data Services, Training & Enablement, Platform Configuration, Workflow Optimization",
      rating: 5,
      reviewText: "WME Solutions transformed our real estate management system in Phuket. Eddy, Kessi, and Chan provided outstanding support, flying in on short notice to help us maximize Monday.com. Their expertise in customized workflows and hands-on guidance was invaluable. I highly recommend WME Solutions for their dedication, client success, and ability to deliver under tight deadlines.",
      sourceLogo: "/images/monday-experts-logo.png",
    },
    {
      projectName: "Consulting & Strategy",
      rating: 5,
      reviewText: "Excellent accompaniment.",
      sourceLogo: "/images/monday-experts-logo.png",
    },
    {
      projectName: "Consulting & Strategy",
      rating: 5,
      reviewText: "Eddy and the team took the time to truly understand our tutoring center’s needs and delivered an outstanding customized solution. They integrated Monday.com with platforms like Make.com and Excel, rebuilding our operations from the ground up. Their professionalism, technical expertise, and ability to streamline processes have been invaluable. If you need a results-driven team, WME Solutions is the way to go.",
      sourceLogo: "/images/monday-experts-logo.png",
    },
    {
      projectName: "Consulting & Strategy...",
      rating: 5,
      reviewText: "Everything was clear and easy to work with. The team quickly resolved my workflow and CRM issues with great communication. I highly recommend Eddy and his team.",
      sourceLogo: "/images/monday-experts-logo.png",
    },
    {
      projectName: "Consulting & Strategy",
      rating: 5,
      reviewText: "Travailler avec Eddy a été un véritable atout pour notre équipe. Grâce à son expertise sur Monday, il a optimisé notre gestion de projet et amélioré notre productivité. Toujours à l'écoute, il partage des conseils précieux. Je le recommande sans hésiter !",
      sourceLogo: "/images/monday-experts-logo.png",
    },
    {
      projectName: "Consulting & Strategy",
      rating: 5,
      reviewText: " Eddy was very efficient, understood our needs, and provided video summaries that helped us a lot. Despite timezone differences, he was easy to reach and communicated perfectly with our team in French. We highly recommend him and are very happy with his work.",
      sourceLogo: "/images/monday-experts-logo.png",
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
        "I hired Eddy to set up Monday.com. He was super helpful, a great hire, and I highly recommend him. Eddy is very knowledgeable about Monday.com and up-to-date on features. He was easy to work with, patient, and a great communicator. He answered all my questions and showed me things I didn’t know I needed. I’m glad I hired him, as it saved me hours. I look forward to working with him again.", sourceLogo: "/images/upwork-logo.png",
    },
    {
      projectName: "Project: monday.com expert needed for growing agency",
      rating: 5,
      reviewText:
        "Excellent work and highly recommend Eddy! He was extremely knowledgeable about monday.com, very responsive with excellent communication. He understood our needs and quickly revamped our workflow. We will definitely continue an ongoing relationship with him. Thank you, Eddy - GREAT JOB!",
      sourceLogo: "/images/upwork-logo.png",
    },
  ];


  const packages = [
    {
      name: "Fast Track Package",
      price: "1 week on-site - $12,000 + Travel expenses*",
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
        "Building & sharing some real case scenarios that can be used to build your system on Monday.com. Please note that some company will have a dedicated person handling the setup of Monday.com but WME Solutions provide also full implementation services based on the diagnostic made.",
      ],
    },
    {
      name: "Enterprise Package",
      price: "2 to 3 weeks on-site - $10,000/week + Travel Expenses*",
      description:
        "Ideal for companies where the implementation of Monday.com is required in several divisions (e.g Sales, Operation, HR, Marketing, etc...)",
      features: [
        "Same as the discovery package",
        "1 to 2 senior consultant of WME Solutions",
        "Time will be shared between meeting with the stakeholders and creation/implementation of the solution on Monday.com as needed",
        "Full remote support of our office based team if required",
        "Enablement of our $2,000 package containing apps & plugins that we have developed and that we will enable in your Monday account for a lifetime",
        "Creation of interactive user guides for the solution implemented",
      ],
    },
  ];



  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">Services</h2>
      </div>
      <div className="flex items-center justify-center py-12">
        <h2 className="text-2xl font-medium flex items-center">
          <Building size={35} className="text-yellow-400" />
          &nbsp; On-Site Consulting
        </h2>
      </div>
      <p className="px-8 md:px-20 py-8">
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

      <div className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 20).map((post: any, index: number) => (
          <a
            key={index}
            href={`/${lang}/blog/${post.properties.Slug.rich_text[0].plain_text}`}
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

      <div className="flex items-center justify-center mt-16 mb-12">
        <Carousel className="w-10/12">
          <CarouselContent>
            {Array.from({ length: Math.ceil(reviews.length / 4) }).map((_, groupIndex) => (
              <CarouselItem key={groupIndex} className="grid grid-cols-2 grid-rows-2 gap-4">
                {reviews.slice(groupIndex * 4, groupIndex * 4 + 4).map((review, index) => (
                  <div key={index} className="p-1 h-full">
                    <ReviewCard {...review} />
                  </div>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous review" className="-left-20" />
          <CarouselNext aria-label="Next review" className="-right-20" />
        </Carousel>
      </div>


      <div className="py-16 flex items-center justify-center flex-col mt-16">
        <h3 className="text-2xl font-medium py-8 text-center">
          *Price Quoted is indicative estimate only. In order to get an accurate{" "}
          <br /> quotation, contact us now.
        </h3>
        <div className="flex w-full ml-4 mt-4 justify-center">
          <a
            href="/contact-us"
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
