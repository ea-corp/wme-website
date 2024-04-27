import Image from "next/image";

export default function IncitationButton() {
  return (
    <div>
      <div className="flex py-20 md:py-36 flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center flex-col">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold md:font-semibold text-[#2d2d2d] text-left px-4 md:px-0">
              Get the most out of
              <span className="flex items-center">
                <Image
                  src="/images/monday-logo.png"
                  width={280}
                  height={54}
                  alt="Monday.com logo"
                  quality={100}
                  className="py-2 md:py-6"
                />{" "}
                <span className="ml-4">for </span>
              </span>
              your business
            </h2>
            <div className="hidden md:flex">
              <a
                href="https://try.monday.com/wme"
                target="_blank"
                className="bg-[#5949d5] text-white py-2 px-4 mt-8 rounded-xl flex items-center text-sm md:py-4 md:px-6 md:text-md"
              >
                <p className="font-bold pr-2 text-sm md:text-md">Try</p>
                <Image
                  src="images/monday-com_only_logo.svg"
                  alt="monday.com logo"
                  width={35}
                  height={35}
                />
                <p className="font-bold pl-2 text-sm md:text-md">monday.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-16 md:mt-0">
          <Image
            src="/images/landing-image.png"
            width={450}
            height={54}
            alt="Dashboards in Monday.com"
            quality={100}
          />
        </div>
      </div>
      <div className="bg-gray-100 px-4 md:px-32">
        <h2 className="text-2xl py-8 text-gray-800 font-semibold text-center">
          Overwhelmed trying to figure out monday.com ?
        </h2>
        <p className="text-lg px-4 md:px-16 pb-8">
          When you get started with Monday.com, figuring out how to structure
          your company workflow can be overwhelming. Monday.com is such a
          versatile tool, how do you know where to start and what features to
          use? <br /> <br /> You probably have a basic understanding of
          Monday.com and now you’re ready to learn more; you want to make
          Monday.com the main hub for your work and have everything in one place
          but don’t have time to figure it out on your own. <br /> <br />{" "}
          Workflow Made easy have helped over 100 customers to streamline their
          business processes using &nbsp;
          <a
            href="https://try.monday.com/wme"
            target="_blank"
            className="text-blue-400 font-semibold"
          >
            monday.com
          </a>
        </p>
      </div>
    </div>
  );
}
