import { getDictionary } from "@/lib/dictionaries";
import React from "react";

const FulfillmentPolicy = async ({ params }: any) => {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  const {
    title,
    introduction,
    sections,
  } = dict.fullfillmentPolicy;

  return (
    <div className="max-w-4xl mx-auto p-6 py-12">
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      <p className="mb-6">{introduction}</p>

      {sections.map((section: any, index: any) => (
        <section key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-2">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="list-disc pl-6 space-y-2">
              {section.content.map((item: any, idx: any) =>
                typeof item === "string" ? (
                  <li key={idx}>{item}</li>
                ) : (
                  <li key={idx}>
                    <strong>{item.subtitle}:</strong> {item.details}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p>{section.content}</p>
          )}
        </section>
      ))}
    </div>
  );
};

export default FulfillmentPolicy;
