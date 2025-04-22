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
const Tool = ({ tool }: any) => {
  const { id, title, description, imageSrc, imageAlt, link, icon } = tool;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary aria-controls={`${id}-content`} id={`${id}-header`} className="h-16">
        {icon ? icon : <Image src={imageSrc} alt={imageAlt} width={35} height={35} />}
        <Typography>{title}</Typography>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-justify">{description}</Typography>
        <div className="w-full flex items-center justify-center">
          <a href={link} className="bg-yellow-400 px-8 py-2 rounded-lg my-2" target="_blank" rel="noopener noreferrer">
            Visit website
          </a>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

// Données des outils
const mondayTools = [
  {
    id: "auto-increment-numbers",
    title: "Auto-Increments Numbers",
    description: "Discover the power of Monday.com apps, a suite of add-ons designed to effortlessly enhance the Monday.com platform. These apps expand the platform’s capabilities, offering new functionalities without the need for custom development. Each app is a ready-to-use, and available on Monday marketplace. Explore these apps to streamline your processes, increase productivity, and elevate your project management experience with the convenience of out-of-the-box solutions.",
    imageSrc: "/images/apps/auto-increment-numbers.png",
    imageAlt: "Auto-Increments Numbers",
    link: "https://monday.com/marketplace/listing/10000104/auto-increment-numbers",
  },
  {
    id: "autofill-group-name",
    title: "Autofill Group Name",
    description: "Autofill Group Name is an app for monday.com that automates the updating of dropdown columns with the group name based on various triggers like item movement, creation, status change, or name alteration.",
    imageSrc: "/images/apps/autofillgroupname.png",
    imageAlt: "Autofill Group Name icon",
    link: "https://monday.com/marketplace/listing/10000092/autofill-group-name",
  },
  {
    id: "approval-feedback",
    title: "Approval & Feedback",
    description: "The Approval & Feedback App is a versatile tool for monday.com users, designed to streamline the approval and feedback process through customized forms.",
    imageSrc: "/images/apps/approvalfeedback.png",
    imageAlt: "Approval and feedback icon",
    link: "https://monday.com/marketplace/listing/10000230/approval--feedback",
  },
  {
    id: "copy-paste-master",
    title: "Copy Paste Master",
    description: "Copy Paste Master is an app for monday.com that enables users to automate the copying and combining of data from various columns, and pasting it into another column, streamlining data management and customization.",
    imageSrc: "/images/apps/copypastemaster.png",
    imageAlt: "Copy paste master icon",
    link: "https://monday.com/marketplace/listing/10000151/copy-paste-master",
  },
  {
    id: "docugen",
    title: "Docugen",
    description: "DocuGen is a document automation tool that generates custom documents using data from Monday.com boards.",
    imageSrc: "/images/apps/docugen.png",
    imageAlt: "Docugen logo",
    link: "https://monday.com/marketplace/listing/12/docugen",
  },
  {
    id: "getsign",
    title: "GetSign",
    description: 
    "GetSign is a digital signature tool that enables the secure and efficient signing of documents online. Integrating GetSign with Monday.com allows users to seamlessly send documents from Monday.com boards for e-signature, track the signing process, and receive completed documents back into their Monday.com workflow. This integration streamlines the document signing process, enhancing efficiency and reducing the turnaround time for approvals and agreements within project management tasks.",
    imageSrc: "/images/apps/getsign.png",
    imageAlt: "GetSign logo",
    link: "https://monday.com/marketplace/listing/10000190/getsign---esignatures-pdf-generator--form-builder",
  },
  {
    id: "subitem-pro-templates",
    title: "Subitem Pro Templates",
    description: "Subitem Pro Templates is an app for monday.com that simplifies managing items and subitems by enabling users to create, reorder, and deploy customized subitem templates across their boards.",
    imageSrc: "/images/apps/subitemprotemplates.png",
    imageAlt: "Subitem Pro templates icon",
    link: "https://monday.com/marketplace/listing/10000172/subitem-pro-templates",
  },
  {
    id: "timeline-to-date",
    title: "Timeline to Date",
    description: "Timeline to Date is an automation app for monday.com that synchronizes timeline data with start and end date columns.",
    imageSrc: "/images/apps/timelinetodate.png",
    imageAlt: "Timeline to date icon",
    link: "https://monday.com/marketplace/listing/10000118/timeline-to-date",
  },
  {
    id: "tag-to-action",
    title: "Tag to Action",
    description: "Tag to Action is a dynamic productivity tool for monday.com, enabling users to automate and efficiently manage their tasks and boards with custom actions.",
    imageSrc: "/images/apps/tagtoaction.png",
    imageAlt: "Tag to action icon",
    link: "https://monday.com/marketplace/listing/10000207/tag-to-action",
  },
  {
    id: "vlookup-auto-link",
    title: "VLOOKUP Auto-link",
    description: "VLOOKUP Auto-Link is an advanced alternative to monday.com's connected boards. It allows you to automatically link multiple boards and match items while maintaining monday's native reporting, automation, and permissions.",
    imageSrc: "/images/apps/vlookup.png",
    imageAlt: "Vlookup logo",
    link: "https://monday.com/marketplace/listing/99/vlookup-auto-link-item-to-multiple-boards-",
  },
];

const otherTools = [
  {
    id: "clicksend-sms",
    title: "ClickSend SMS",
    description: "ClickSend SMS is a cloud-based service that enables sending and receiving of SMS messages globally.",
    imageSrc: "",
    imageAlt: "ClickSend SMS icon",
    link: "https://dashboard.clicksend.com/signup/step1?u=148668",
    icon: <MessagesSquare className="text-blue-600" size={35} />,
  },
  {
    id: "make-com",
    title: "Make.com",
    description: "Make.com integrates with Monday.com to automate tasks and workflows, enabling seamless data synchronization and real-time updates between Monday.com and various apps and services.",
    imageSrc: "/images/apps/make.png",
    imageAlt: "Make.com logo",
    link: "https://www.make.com/en/register?pc=newacc",
  },
  {
    id: "todoist",
    title: "Todoist",
    description: "Todoist is ideal for on-the-go use, providing a mobile-optimized platform for managing tasks, setting reminders, and tracking progress.",
    imageSrc: "/images/apps/todoist.png",
    imageAlt: "Todoist logo",
    link: "https://get.todoist.io/1ydhizchxmab",
  },
];

export default function CustomizedAccordions() {
  return (
    <div className="mb-4 md:mb-32">
      <Grid container spacing={2}>
        {mondayTools.map((tool) => (
          <Grid item xs={12} sm={4} key={tool.id}>
            <Tool tool={tool} />
          </Grid>
        ))}
      </Grid>
      <div className="py-2 md:py-8">
        <h3 className="text-2xl font-semibold mt-16">Other Tools that can integrate with Monday.com</h3>
      </div>
      <Grid container spacing={2}>
        {otherTools.map((tool) => (
          <Grid item xs={12} sm={4} key={tool.id}>
            <Tool tool={tool} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
