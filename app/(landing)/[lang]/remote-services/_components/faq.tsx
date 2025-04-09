"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDown, ChevronUp } from "lucide-react"; 

export default function Faq() {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange = (panel: number) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="px-8 md:px-60 pb-16">
      <h2>FAQ</h2>
      <h3 className="text-3xl mb-16 font-semibold">
        Frequently asked questions
      </h3>

      <Accordion expanded={expanded === 1} onChange={handleChange(1)}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>I&apos;m interested, how do we get started?</span>
          {expanded === 1 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          1-Schedule a Free Discovery call We’ll discuss your business needs,
          pain points, goals and see how we can support you and your team to get
          the most out of monday.com! <br />
          2-Purchase a package Based on our initial discussion in the discovery
          call you can chose the the package that fits you best. <br />
          3- Email confirmation You will then receive a confirmation email with
          the details of the next steps and a unique scheduling link that you
          can use at any time to schedule some time with us.
        </AccordionDetails>
      </Accordion>

      {/* Répétez ce modèle pour chaque accordéon */}

      <Accordion expanded={expanded === 2} onChange={handleChange(2)}>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>How can the hours proposed in your package be used?</span>
          {expanded === 2 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          The hours can be used on the following: <br /> <br /> 1. Offline
          implementation time by Workflow Made Easy <br />
          2. Collaborative build sessions with Workflow Made Easy (Video calls
          with screen sharing) <br /> 3.Importing Data from your current system
          to monday.com when needed <br /> <br /> 1. Group training sessions on
          monday.com features and the workflow that has been built <br /> 2.
          Maintenance & Support after the workflow is built Once a package
          purchased, you will received a unique link where you can track the
          time balance remaining in your package. The details are live and you
          can download at anytime a report. Workflow Made Easy will record time
          when working on your project for events such as collaborative build
          sessions, offline build by Workflow Made Easy, etc..
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 3} onChange={handleChange(3)}>
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>Why is there a validity period in the packages you offer?</span>
          {expanded === 3 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          The main purpose of having a validity period is to get things done.
          While things are fresh in our minds, it is important to keep things
          going and not let the clock run out without any action. <br /> <br />{" "}
          Let’s put it this way, we all value our time and and if we were to
          pause working on a project multiple times or for a long period of
          time, it would be very time consuming to get all stakeholders on the
          same page we were when we paused the project. Even if we have notes
          and mapped your entire process this is not ideal. <br /> <br /> This
          is part of the Workflow Made Easy success method for all the
          implementations we have made. We just need a bit of your time each
          week to review what we have build, participate in collaborative build
          sessions. Most of our client enjoy it very much as they fill empowered
          with the platform and solution that is being built. This method will
          benefit you in the long run, increase adoption rate. <br /> <br />{" "}
          Exception to the Rule: <br /> <br /> With the Comprehensive and
          Ultimate package, you are allowed to pause the validity once and up to
          1 month- This can come useful for events occurring such as a company
          audit to prepare, key stakeholder on holidays, or any unexpected
          events that could justify pausing the work we have started.
        </AccordionDetails>
      </Accordion>

      {/* Répétez ce modèle pour chaque accordéon */}

      <Accordion expanded={expanded === 4} onChange={handleChange(4)}>
        <AccordionSummary
          aria-controls="panel4-content"
          id="panel4-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>How long will it take you to build my workflow on monday.com?</span>
          {expanded === 4 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          The timeframe will depend of the complexity of your workflow, the
          number of boards, dashboards and automations that are involved. <br />{" "}
          <br /> In average we spend 40 to 50 hours per client building advanced
          workflows but this can vary significantly depending on your
          requirements. Some simple workflow will take less than 20 hours’ time
          while some very advanced ones can take over 100 hours. <br />
          <br />
          Book a free Discovery Call so that we can give you a more accurate
          estimate
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 5} onChange={handleChange(5)}>
        <AccordionSummary
          aria-controls="panel5-content"
          id="panel5-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>What if I do not use all the hours in my package, can I get a refund?</span>
          {expanded === 5 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          Unused hours in your package are non refundable but can be used for
          support & maintenance, workflow review or training sessions. <br />{" "}
          <br /> Once your workflow built, this is the exiting part, your team
          can start using it but having a regular review of how the workflow is
          used by your team by one of our expert consultant is an important part
          of the adoption part. You can convert your unused hours to Ongoing
          Support on the basis of 4 hours = 1 month of Review & Support package.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 6} onChange={handleChange(6)}>
        <AccordionSummary
          aria-controls="panel6-content"
          id="panel6-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>How do I know which package to choose?</span>
          {expanded === 6 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          Get in touch with us now, schedule your free discovery call. We’ll
          discuss your business needs, pain points, and goals and see how we can
          support you to get the most out of monday.com!
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 7} onChange={handleChange(7)}>
        <AccordionSummary
          aria-controls="panel7-content"
          id="panel7-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>Where are you located and what is your availability?</span>
          {expanded === 7 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          Workflow Made Easy is a company based in Vietnam with consultants
          spanning Europe and Asia. We cater to global clients and for real-time
          collaboration, we’ve established dedicated time slots for our clients
          in North America, Europe, Asia, and Oceania
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 8} onChange={handleChange(8)}>
        <AccordionSummary
          aria-controls="panel8-content"
          id="panel8-header"
          className="text-medium font-semibold hover:bg-gray-200 bg-gray-100 py-2 flex items-center justify-between"
        >
          <span>Do you have fixed price projects?</span>
          {expanded === 8 ? <ChevronUp /> : <ChevronDown />}
        </AccordionSummary>
        <AccordionDetails>
          Currently not. <br /> <br /> We find the fixed price model to be rigid
          when building a custom made solution on monday.com. Great ideas often
          emerge during our collaborative building session and you might want to
          make some changes on what was agreed initially. <br /> <br /> This is
          why we prefer the hourly model as it gives more flexibility to our
          clients and you can see in full transparency where out time is spent
          building your solution.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
