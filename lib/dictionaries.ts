import "server-only";

interface Dictionary {
  mondayworkos: any;
}



const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default)
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Utiliser 'en' par défaut si la locale n'existe pas
  return (dictionaries[locale] || dictionaries.en)();
};
