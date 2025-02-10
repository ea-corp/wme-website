"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown, ChevronUp, MessagesSquare } from "lucide-react";
import { Grid } from "@mui/material";
import Image from "next/image";

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
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      if (newExpanded) {
        setExpanded((prev) => [...prev, panel]);
      } else {
        setExpanded((prev) => prev.filter((x) => x !== panel));
      }
    };

  // Vérifie si un panel est ouvert
  const isExpanded = (panel: string) => expanded.includes(panel);

  return (
    <div className="mb-4 md:mb-32">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel1")}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="h-16"
            >
              {" "}
              <Image
                src="/images/apps/auto-increment-numbers.png"
                alt="Auto-Increments Numbers"
                width={35}
                height={35}
              />
              <Typography>Auto-Increments Numbers</Typography>
              {expanded.includes("panel1") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This app lets you define a text column that will be
                automatically filled with an incremented number using a
                customized format. You can also configure the number of digits
                and starting number.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.b-lab.app/apps/auto-increment-numbers/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel2")}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/autofillgroupname.png"
                alt="Autofill Group Name icon"
                width={35}
                height={35}
              />
              <Typography className="ml-2">Autofill Group Name</Typography>

              {expanded.includes("panel2") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Autofill Group Name is an app for monday.com that automates the
                updating of dropdown columns with the group name based on
                various triggers like item movement, creation, status change, or
                name alteration.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.b-lab.app/apps/autofill-group-name/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel3")}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/approvalfeedback.png"
                alt="Approval and feedback icon"
                width={35}
                height={35}
              />
              <Typography>Approval & Feedback</Typography>
              {expanded.includes("panel3") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Approval & Feedback App is a versatile tool for monday.com
                users, designed to streamline the approval and feedback process
                through customized forms. It enables users to set up detailed
                submission interfaces with options for field visibility,
                editability, and requirement settings, along with features for
                file sharing and signature collection. The app also supports the
                creation of multiple forms per board, each with customizable
                settings and permissions, enhancing collaborative efficiency.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.b-lab.app/apps/approval-and-feedback/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel4")}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/copypastemaster.png"
                alt="Copy paste master icon"
                width={35}
                height={35}
              />
              <Typography>Copy Paste Master</Typography>
              {expanded.includes("panel4") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Copy Paste Master is an app for monday.com that enables users to
                automate the copying and combining of data from various columns,
                and pasting it into another column, streamlining data management
                and customization.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.b-lab.app/apps/copy-paste-master/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel5")}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/docugen.png"
                alt="Docugen logo"
                width={35}
                height={35}
              />
              <Typography>Docugen</Typography>
              {expanded.includes("panel5") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                DocuGen is a document automation tool that generates custom
                documents using data from Monday.com boards. When integrated
                with Monday.com, it automates the creation of reports, invoices,
                letters, and other documents based on the data and triggers set
                within Monday.com projects and tasks. This integration
                streamlines document creation, saving time and ensuring accuracy
                by directly utilizing project data.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://docugen.io/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel6")}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/getsign.png"
                alt="GetSign logo"
                width={50}
                height={50}
              />
              <Typography>GetSign</Typography>
              {expanded.includes("panel6") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GetSign is a digital signature tool that enables the secure and
                efficient signing of documents online. Integrating Op Sign with
                Monday.com allows users to seamlessly send documents from
                Monday.com boards for e-signature, track the signing process,
                and receive completed documents back into their Monday.com
                workflow. This integration streamlines the document signing
                process, enhancing efficiency and reducing the turnaround time
                for approvals and agreements within project management tasks.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://getsign.io/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel7")}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/subitemprotemplates.png"
                alt="Subitem Pro templates icon"
                width={35}
                height={35}
              />
              <Typography>Subitem Pro Templates</Typography>
              {expanded.includes("panel7") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Subitem Pro Templates is an app for monday.com that simplifies
                managing items and subitems by enabling users to create,
                reorder, and deploy customized subitem templates across their
                boards, enhancing efficiency through automation and custom
                integrations.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.b-lab.app/apps/subitem-pro-templates/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel8")}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/timelinetodate.png"
                alt="Timeline to date icon"
                width={35}
                height={35}
              />
              <Typography>Timeline to Date</Typography>
              {expanded.includes("panel8") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Timeline to Date is an automation app for monday.com that
                synchronizes timeline data with start and end date columns,
                enabling users to seamlessly update their project schedules and
                deadlines within their boards. It offers customizable recipes
                for automatic updates, ensuring that timeline and date columns
                are always aligned and up-to-date.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.b-lab.app/apps/timeline-to-date/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel9")}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/tagtoaction.png"
                alt="Tag to action icon"
                width={35}
                height={35}
              />
              <Typography>Tag to Action</Typography>
              {expanded.includes("panel9") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Tag to Action is a dynamic productivity tool for monday.com,
                enabling users to automate and efficiently manage their tasks
                and boards with custom actions. It streamlines workflows by
                allowing bulk updates through tags and triggering specific
                actions based on keywords, significantly enhancing productivity.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.b-lab.app/apps/tag-to-action/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <div className="py-2 md:py-8">
        <h3 className="text-2xl font-semibold mt-16">
          Other Tools that can integrate with Monday.com
        </h3>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel10")}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel10d-content"
              id="panel10d-header"
              className="h-16"
            >
              <MessagesSquare className="text-blue-600" size={35} />
              <Typography>Click send</Typography>
              {expanded.includes("panel10") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ClickSend SMS is a cloud-based service that enables sending and
                receiving of SMS messages globally. When integrated with
                Monday.com, it allows for automated text message notifications
                triggered by updates or changes in Monday.com tasks and
                projects. This integration enhances communication efficiency,
                ensuring timely updates and alerts are sent directly to mobile
                phones, facilitating better team coordination and project
                tracking.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://dashboard.clicksend.com/signup/step1?u=148668"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel12")}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel12d-content"
              id="panel12d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/make.png"
                alt="Make.com logo"
                width={35}
                height={35}
              />
              <Typography>Make.com</Typography>
              {expanded.includes("panel12") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Make.com integrates with Monday.com to automate tasks and
                workflows, enabling seamless data synchronization and real-time
                updates between Monday.com and various apps and services. 1,000
                free Operations per month.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://www.make.com/en/register?pc=newacc"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel13")}
            onChange={handleChange("panel13")}
          >
            <AccordionSummary
              aria-controls="panel13d-content"
              id="panel13d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/todoist.png"
                alt="Todoist logo"
                width={35}
                height={35}
              />
              <Typography>Todoist</Typography>
              {expanded.includes("panel13") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Todoist is ideal for on-the-go use, providing a mobile-optimized
                platform for managing tasks, setting reminders, and tracking
                progress, ensuring productivity and organization anytime,
                anywhere.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://get.todoist.io/1ydhizchxmab"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Accordion
            expanded={isExpanded("panel14")}
            onChange={handleChange("panel14")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
              className="h-16"
            >
              <Image
                src="/images/apps/vlookup.png"
                alt="Vlookup logo"
                width={35}
                height={35}
              />
              <Typography>VLOOKUP Auto-link</Typography>
              {expanded.includes("panel14") ? <ChevronUp /> : <ChevronDown />}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                VLOOKUP Auto-Link is an advanced alternative to monday.com's connected boards. It allows you to automatically link multiple boards and match items while maintaining monday's native reporting, automation, and permissions. With its one-to-many and many-to-one Auto-link builder, VLOOKUP ensures data alignment across boards and reduces human error. Simply install the app, integrate it, and start mapping columns to auto-link.
              </Typography>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://jetpackapps.co/monday-com-vlookup-auto-links-connect-boards-mirror/"
                  className="bg-yellow-400 px-8 py-2 rounded-lg my-2"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}
