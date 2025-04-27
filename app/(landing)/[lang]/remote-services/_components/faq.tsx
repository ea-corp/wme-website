import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDown, ChevronUp } from "lucide-react";

const ClientFaqComponent = ({ dict }: { dict: any }) => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange = (panel: number) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  const { faq } = dict;

  return (
    <div className="px-8 md:px-60 pb-16">
      <h2>{faq.title}</h2>
      <h3 className="text-3xl mb-16 font-semibold">
        {faq.subtitle}
      </h3>

      {faq.sections.map((section: any, index: number) => (
        <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
          >
            <span>{section.title}</span>
            {expanded === index ? <ChevronUp /> : <ChevronDown />}
          </AccordionSummary>
          <AccordionDetails>
            {index === 1 ? ( // Vérifie si c'est la deuxième section (index 1)
              <div>
                <p className="mb-4">{section.content[0]}</p>
                <ol style={{ paddingLeft: '1.5rem', listStyleType: 'decimal' }}>
                  {section.content.slice(1, 4).map((item: string, idx: number) => (
                    <li key={idx}>
                      {item}
                    </li>
                  ))}
                </ol>
                <div style={{ marginTop: '2.5rem' }} /> {/* Ajoute un espacement supplémentaire entre les deux listes */}
                <ol start={1} style={{ paddingLeft: '1.5rem', listStyleType: 'decimal' }}>
                  {section.content.slice(4).map((item: string, idx: number) => (
                    <li key={idx} style={{ marginBottom: '1rem' }}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            ) : Array.isArray(section.content) ? (
              <ol style={{ paddingLeft: '1.5rem', listStyleType: 'decimal' }}>
                {section.content.map((item: string, idx: number) => (
                  <li key={idx} style={{ marginBottom: '1rem' }}>
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <div>{section.content}</div>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ClientFaqComponent;
