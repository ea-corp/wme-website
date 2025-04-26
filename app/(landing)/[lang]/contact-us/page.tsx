import { getDictionary } from "@/lib/dictionaries";
import ContactUsClient from "./components/ContactUsClient";

export default async function ContactUsPage({ params }: any) {

  const lang = params.lang
  const dict = await getDictionary(lang);

  return (
    <div>
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">{dict.contactUs.title}</h2>
      </div>
      <div className="text-center flex justify-center flex-col items-center h-full">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-2xl md:text-4xl mb-4 mt-16 ">
            {dict.contactUs.desc1}
          </h3>
          {dict.contactUs.desc2}
        </div>
        <ContactUsClient />
      </div>
    </div>
  );
}
