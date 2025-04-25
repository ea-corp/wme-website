// components/_components/add-ons.tsx
"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown, ChevronUp, MessagesSquare } from "lucide-react";
import { Grid } from "@mui/material";
import Image from "next/image";

// Styles pour les composants
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Composant réutilisable pour chaque outil
const Tool = ({ tool, dict }: any) => {
  const { id, title, description, imageSrc, imageAlt, link, icon } = tool;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary aria-controls={`${id}-content`} id={`${id}-header`} className="h-16">
        {icon ? React.createElement(MessagesSquare, { className: "text-blue-600", size: 35 }) : <Image src={imageSrc} alt={imageAlt} width={35} height={35} />}
        <Typography>{title}</Typography>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-justify">{description}</Typography>
        <div className="w-full flex items-center justify-center">
          <a href={link} className="bg-yellow-400 px-8 py-2 rounded-lg my-2" target="_blank" rel="noopener noreferrer">
            {dict.appsPage.visitWebsite}
          </a>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const CustomizedAccordions = ({ dict }: any) => {
  return (
    <div className="mb-4 md:mb-32">
      <Grid container spacing={2}>
        {dict.mondayTools.map((tool: any) => (
          <Grid item xs={12} sm={4} key={tool.id}>
            <Tool tool={tool} dict={dict} />
          </Grid>
        ))}
      </Grid>
      <div className="py-2 md:py-8">
        <h3 className="text-2xl font-semibold mt-16">{dict.appsPage.otherToolsTitle}</h3>
      </div>
      <Grid container spacing={2}>
        {dict.otherTools.map((tool: any) => (
          <Grid item xs={12} sm={4} key={tool.id}>
            <Tool tool={tool} dict={dict} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CustomizedAccordions;
