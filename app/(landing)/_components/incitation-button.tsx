import Image from "next/image";

interface IncitationButtonProps {
  dictionary: {
    title: string;
    title2: string;
    subtitle: string;
    description: string;
    cta: {
      text: string;
      url: string;
    };
    image: string;
  };
}

export default function IncitationButton({ dictionary }: IncitationButtonProps) {
  return (
    <div>
      <div className="flex py-20 md:py-24 flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center flex-col">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold md:font-semibold text-[#2d2d2d] text-left">
              {dictionary.title}
            </h2>
            <p className="mt-8 text-xl">{dictionary.title2}</p>
            <div className="hidden md:flex">
              <a
                href="#choosepackage"
                className="bg-[#f4d752] text-black py-2 px-4 mt-8 rounded-xl flex items-center text-sm md:py-4 md:px-6 md:text-md"
              >
                <p className="font-bold pr-2 text-sm md:text-md">{dictionary.cta.text}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-16 md:mt-0">
          <Image
            src={dictionary.image}
            width={450}
            height={54}
            alt="Dashboards in Monday.com"
            quality={100}
          />
        </div>
      </div>
      <div className="bg-gray-100 px-4 md:px-12">
        <h2 className="text-2xl py-8 text-gray-800 font-semibold text-center">
          {dictionary.subtitle}
        </h2>
        <p className="text-lg px-4 md:px-16 pb-8">
          {dictionary.description}
          <br /> <br />{" "}
        </p>
      </div>
    </div>
  );
}