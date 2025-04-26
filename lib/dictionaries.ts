import "server-only";

interface Dictionary {
  navbar: any;
  portfolio: any;
  ourTeam: any;
  clientSuccessStory: {
    successStory: string;
    contactUs: string;
    wmeSolutions: string;
    similarEfficiency: string;
  };
  storiesWorthTelling: any;
  incitationbutton: {
    title: string;
    subtitle: string;
    description: string;
    cta: { text: string; url: string };
    image: string;
  };
  ourservices: {
    title: string;
    description: string;
    services: any;
    packages: any;
    choosepackage: string;
    choosepackagedesc: string;
  };
  organizationusingmonday: any;
  herovideo: {
    title: string;
    description: string;
    videoId: string;
    cta: {
      startTrial: { text: string; url: string };
      requestDemo: { text: string; url: string };
    };
  };
  mondayworkos: any;
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Utiliser 'en' par défaut si la locale n'existe pas
  return (dictionaries[locale] || dictionaries.en)();
};
