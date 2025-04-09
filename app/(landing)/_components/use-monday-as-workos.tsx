import React from "react";
import Image from "next/image";

// Define the type for each solution
type Solution = {
  icon: string;
  title: string;
  description: string;
};

type SolutionCardProps = {
  icon: string;
  title: string;
  description: string;
};

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center justify-center p-4 text-center mb-12">
    <Image
      src={icon}
      alt={`${title} icon`}
      width={60}
      height={60}
      className="rounded-lg"
    />
    <h3 className="mt-2 text-lg font-bold">{title}</h3>
    <p className="hidden md:block">{description}</p>
  </div>
);

type MondayWorkOSProps = {
  dictionary: {
    title: string;
    solutions: Solution[];
  };
};

const MondayWorkOS: React.FC<MondayWorkOSProps> = ({ dictionary }) => {
  const { solutions } = dictionary;
  const topSolutions = solutions.slice(0, 4);
  const bottomSolutions = solutions.slice(4, 7);

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-center my-4 md:px-32 mb-8 md:mb-16">
        {dictionary.title}
      </h1>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Grid de 4 en haut */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {topSolutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        {/* Grid de 3 en bas */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 justify-center mt-8 md:mx-32">
          {bottomSolutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MondayWorkOS;
