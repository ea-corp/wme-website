"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string[];
  description: string[];
  image: string;
  imagesCarousel: string[][];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imagesCarousel,
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="w-[320px] md:w-[400px] p-4 cursor-pointer">
            <img
              src={image}
              alt={title[0]}
              className="w-full h-48 object-cover"
            />
            <h3 className="font-semibold text-lg mt-2">{title[0]}</h3>
            <p className="text-sm md:text-medium">{description[0]}</p>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-screen-sm">
          <Carousel className="w-screen md:w-full">
            <CarouselContent className="w-96 md:w-full">
              {imagesCarousel.map((imgs, projIndex) =>
                imgs.map((img, imgIndex) => (
                  <CarouselItem key={`${projIndex}-${imgIndex}`}>
                    <h3 className="font-semibold text-2xl">{title[projIndex]}</h3>
                    <img
                      src={img}
                      className="object-cover w-full h-48 md:h-auto"
                      alt={`${title[projIndex]} image ${imgIndex}`}
                    />
                    <p className="font-medium text-lg">{description[projIndex]}</p>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="ml-16 md:ml-28">Previous</CarouselPrevious>
            <CarouselNext className="mr-28 md:mr-20">Next</CarouselNext>
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default function ConstructionPage() {
  const projects = [

    {
      section: "Employee's Management",

      title: [
        "Employee's Directory Overview",
        "Employee Profile Interface",
        "Employee Type Distribution Map",
      ],
      description: [
        "A detailed screenshot of an employee directory interface, displaying sections for office staff, operation staff, and former employees. The interface includes columns for employee details such as onboarding status, position, contract type, department, supervisor, contract dates, and email addresses.",
        "A comprehensive view of an employee's profile page, featuring sections for personal information, employment details, and paid time off (PTO). The interface includes fields for name, contact details, employment position, salary, and leave balance.",
        "An interactive map displaying the geographic distribution of employees, with colored pins indicating different types of employees. This visualization helps in understanding the regional placement of various employee categories across the United States"
      ],
      image:
        "images/portfolio/hr/image-14.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-14.png"],
        ["images/portfolio/hr/image-15.png"],
        ["images/portfolio/hr/image-16.png"],
      ]
    },
    {
      section: "Employee's Management",

      title: [

        "Employee Profile Interface",
        "Employee Type Distribution Map",
        "Employee's Directory Overview",
      ],
      description: [
        "A comprehensive view of an employee's profile page, featuring sections for personal information, employment details, and paid time off (PTO). The interface includes fields for name, contact details, employment position, salary, and leave balance.",
        "An interactive map displaying the geographic distribution of employees, with colored pins indicating different types of employees. This visualization helps in understanding the regional placement of various employee categories across the United States"
        , "A detailed screenshot of an employee directory interface, displaying sections for office staff, operation staff, and former employees. The interface includes columns for employee details such as onboarding status, position, contract type, department, supervisor, contract dates, and email addresses.",

      ],
      image:
        "images/portfolio/hr/image-15.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-15.png"],
        ["images/portfolio/hr/image-16.png"],
        ["images/portfolio/hr/image-14.png"],

      ]
    },

    {
      section: "Employee's Management",

      title: [
        "Employee Type Distribution Map",
        "Employee's Directory Overview",
        "Employee Profile Interface",
      ],
      description: [
        "An interactive map displaying the geographic distribution of employees, with colored pins indicating different types of employees. This visualization helps in understanding the regional placement of various employee categories across the United States",

        "A detailed screenshot of an employee directory interface, displaying sections for office staff, operation staff, and former employees. The interface includes columns for employee details such as onboarding status, position, contract type, department, supervisor, contract dates, and email addresses.",
        "A comprehensive view of an employee's profile page, featuring sections for personal information, employment details, and paid time off (PTO). The interface includes fields for name, contact details, employment position, salary, and leave balance.",
      ],
      image:
        "images/portfolio/hr/image-16.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-16.png"],
        ["images/portfolio/hr/image-14.png"],
        ["images/portfolio/hr/image-15.png"],

      ]
    },






    {
      section: "Employee's Survey",
      title: [
        "Detailed Employee Survey Analysis Dashboard",
        "Weekly Pulse Review Interface",
        "Simple Weekly Check-In Form",
        "Comprehensive Employee Feedback Form"
      ],
      description: [
        "A comprehensive dashboard presenting various metrics from an employee survey, including job satisfaction trends, communication satisfaction rates, benefits satisfaction levels, and manager relationship ratings across departments. This visualization aids in identifying areas of employee contentment and areas needing improvement.",
        "A screenshot displaying a 'Weekly Pulse Review' from an organizational feedback platform. The interface is segmented into categories such as 'New Reviews (Anonymous)', 'This month's Reviews', and 'Past Reviews', each listing reviews with details on productivity and emotional sentiment, along with star ratings and additional comments.",
        "A straightforward digital form titled \"Weekly Check In – You Are Our Priority (Simple Version)\" designed for employees to rate their week's productivity and emotional state using a star system, with space for open-ended responses and additional comments.",
        "A detailed digital form titled \"Employee Surveys and Feedback (Detailed Version)\" designed for in-depth employee feedback. It includes multiple sections asking for personal details, job satisfaction, communication effectiveness, managerial support, team dynamics, and personal suggestions for improving the workplace."
      ],
      image:
        "images/portfolio/hr/image-17.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-17.png"],
        ["images/portfolio/hr/image-18.png"],
        ["images/portfolio/hr/image-19.png"],
        ["images/portfolio/hr/image-20.png"],
      ]
    },

    {
      section: "Employee's Survey",

      title: [
        "Weekly Pulse Review Interface",
        "Simple Weekly Check-In Form",
        "Comprehensive Employee Feedback Form",
        "Detailed Employee Survey Analysis Dashboard",

      ],
      description: [
        "A screenshot displaying a 'Weekly Pulse Review' from an organizational feedback platform. The interface is segmented into categories such as 'New Reviews (Anonymous)', 'This month's Reviews', and 'Past Reviews', each listing reviews with details on productivity and emotional sentiment, along with star ratings and additional comments.",
        "A straightforward digital form titled \"Weekly Check In – You Are Our Priority (Simple Version)\" designed for employees to rate their week's productivity and emotional state using a star system, with space for open-ended responses and additional comments.",
        "A detailed digital form titled \"Employee Surveys and Feedback (Detailed Version)\" designed for in-depth employee feedback. It includes multiple sections asking for personal details, job satisfaction, communication effectiveness, managerial support, team dynamics, and personal suggestions for improving the workplace.",
        "A comprehensive dashboard presenting various metrics from an employee survey, including job satisfaction trends, communication satisfaction rates, benefits satisfaction levels, and manager relationship ratings across departments. This visualization aids in identifying areas of employee contentment and areas needing improvement.",

      ],
      image:
        "images/portfolio/hr/image-18.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-18.png"],
        ["images/portfolio/hr/image-19.png"],
        ["images/portfolio/hr/image-20.png"],
        ["images/portfolio/hr/image-17.png"],
      ]
    },
    {
      section: "Employee's Survey",
      title: [
        "Simple Weekly Check-In Form",
        "Comprehensive Employee Feedback Form",
        "Detailed Employee Survey Analysis Dashboard",
        "Weekly Pulse Review Interface",
      ],
      description: [

        "A straightforward digital form titled \"Weekly Check In – You Are Our Priority (Simple Version)\" designed for employees to rate their week's productivity and emotional state using a star system, with space for open-ended responses and additional comments.",
        "A detailed digital form titled \"Employee Surveys and Feedback (Detailed Version)\" designed for in-depth employee feedback. It includes multiple sections asking for personal details, job satisfaction, communication effectiveness, managerial support, team dynamics, and personal suggestions for improving the workplace.",
        "A comprehensive dashboard presenting various metrics from an employee survey, including job satisfaction trends, communication satisfaction rates, benefits satisfaction levels, and manager relationship ratings across departments. This visualization aids in identifying areas of employee contentment and areas needing improvement.",
        "A screenshot displaying a 'Weekly Pulse Review' from an organizational feedback platform. The interface is segmented into categories such as 'New Reviews (Anonymous)', 'This month's Reviews', and 'Past Reviews', each listing reviews with details on productivity and emotional sentiment, along with star ratings and additional comments.",
      ],
      image:
        "images/portfolio/hr/image-19.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-19.png"],
        ["images/portfolio/hr/image-20.png"],
        ["images/portfolio/hr/image-17.png"],
        ["images/portfolio/hr/image-18.png"],
      ]
    },

    {
      section: "Employee's Survey",
      title: [
        "Comprehensive Employee Feedback Form",
        "Detailed Employee Survey Analysis Dashboard",
        "Weekly Pulse Review Interface",
        "Simple Weekly Check-In Form",
      ],
      description: [

        "A detailed digital form titled \"Employee Surveys and Feedback (Detailed Version)\" designed for in-depth employee feedback. It includes multiple sections asking for personal details, job satisfaction, communication effectiveness, managerial support, team dynamics, and personal suggestions for improving the workplace.",
        "A comprehensive dashboard presenting various metrics from an employee survey, including job satisfaction trends, communication satisfaction rates, benefits satisfaction levels, and manager relationship ratings across departments. This visualization aids in identifying areas of employee contentment and areas needing improvement.",
        "A screenshot displaying a 'Weekly Pulse Review' from an organizational feedback platform. The interface is segmented into categories such as 'New Reviews (Anonymous)', 'This month's Reviews', and 'Past Reviews', each listing reviews with details on productivity and emotional sentiment, along with star ratings and additional comments.",
        "A straightforward digital form titled \"Weekly Check In – You Are Our Priority (Simple Version)\" designed for employees to rate their week's productivity and emotional state using a star system, with space for open-ended responses and additional comments.",
      ],
      image:
        "images/portfolio/hr/image-20.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-20.png"],
        ["images/portfolio/hr/image-17.png"],
        ["images/portfolio/hr/image-18.png"],
        ["images/portfolio/hr/image-19.png"],
      ]
    },













    {
      section: "Leave Management",
      title: [
        "Analyzing Employee Leave Patterns",
        "Organized Leave Schedule",
        "Scheduled Holidays Overview",
        "Employee Leave Management Dashboard",
        "Leave Request Management System",
        "Employee Leave Form Submission Interface",
      ],
      description: [
        "A detailed corporate dashboard displays various metrics including top leave takers, types of leave taken, and declined requests per employee, effectively visualizing human resources data to aid in management decisions. The dashboard uses bar graphs and a pie chart to break down leave statistics by individual and category.",
        "detailed calendar display of employee leave requests for a month, marking out individual time-offs and holidays, ensuring a clear visual representation of staff availability and planned absences. The layout provides an efficient overview for management and team coordination.",
        "A detailed list of upcoming public holidays presented in an organized format, showing the specific dates and days of the week for each holiday, facilitating advanced planning and scheduling.",
        "A comprehensive interface displaying various sections related to employee leave management, including pending approval requests, leave allowances, and a summary of remaining leaves per employee, which supports efficient tracking and decision-making for HR departments.",
        "An organized leave request platform showcasing different sections for 'Leave Requests Pending Approval by Management', 'Approved', and 'Request Declined'. This system details each request with information such as requester, type of leave, period, and approval status, providing a clear view of employee leave management.",
        "An intuitive leave request form designed for employees to submit requests for annual, business, or sick leave. The form includes fields for company ID, employee name, email, type of leave, date range, number of days off, and additional details to ensure comprehensive leave planning."

      ],
      image:
        "images/portfolio/hr/image-8.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-8.png"],
        ["images/portfolio/hr/image-9.png"],
        ["images/portfolio/hr/image-10.png"],
        ["images/portfolio/hr/image-11.png"],
        ["images/portfolio/hr/image-22.png"],
        ["images/portfolio/hr/image-23.png"],
      ]
    },

    {
      section: "Leave Management",
      title: [
        "Organized Leave Schedule",
        "Scheduled Holidays Overview",
        "Employee Leave Management Dashboard",
        "Leave Request Management System",
        "Employee Leave Form Submission Interface",
        "Analyzing Employee Leave Patterns",

      ],
      description: [
        "detailed calendar display of employee leave requests for a month, marking out individual time-offs and holidays, ensuring a clear visual representation of staff availability and planned absences. The layout provides an efficient overview for management and team coordination.",
        "A detailed list of upcoming public holidays presented in an organized format, showing the specific dates and days of the week for each holiday, facilitating advanced planning and scheduling.",
        "A comprehensive interface displaying various sections related to employee leave management, including pending approval requests, leave allowances, and a summary of remaining leaves per employee, which supports efficient tracking and decision-making for HR departments.",
        "An organized leave request platform showcasing different sections for 'Leave Requests Pending Approval by Management', 'Approved', and 'Request Declined'. This system details each request with information such as requester, type of leave, period, and approval status, providing a clear view of employee leave management.",
        "An intuitive leave request form designed for employees to submit requests for annual, business, or sick leave. The form includes fields for company ID, employee name, email, type of leave, date range, number of days off, and additional details to ensure comprehensive leave planning.",
        "A detailed corporate dashboard displays various metrics including top leave takers, types of leave taken, and declined requests per employee, effectively visualizing human resources data to aid in management decisions. The dashboard uses bar graphs and a pie chart to break down leave statistics by individual and category.",

      ],
      image:
        "images/portfolio/hr/image-9.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-9.png"],
        ["images/portfolio/hr/image-10.png"],
        ["images/portfolio/hr/image-11.png"],
        ["images/portfolio/hr/image-22.png"],
        ["images/portfolio/hr/image-23.png"],
        ["images/portfolio/hr/image-8.png"],
      ]
    },
    {
      section: "Leave Management",
      title: [

        "Scheduled Holidays Overview",
        "Employee Leave Management Dashboard",
        "Leave Request Management System",
        "Employee Leave Form Submission Interface",
        "Analyzing Employee Leave Patterns",
        "Organized Leave Schedule",
      ],
      description: [

        "A detailed list of upcoming public holidays presented in an organized format, showing the specific dates and days of the week for each holiday, facilitating advanced planning and scheduling.",
        "A comprehensive interface displaying various sections related to employee leave management, including pending approval requests, leave allowances, and a summary of remaining leaves per employee, which supports efficient tracking and decision-making for HR departments.",
        "An organized leave request platform showcasing different sections for 'Leave Requests Pending Approval by Management', 'Approved', and 'Request Declined'. This system details each request with information such as requester, type of leave, period, and approval status, providing a clear view of employee leave management.",
        "An intuitive leave request form designed for employees to submit requests for annual, business, or sick leave. The form includes fields for company ID, employee name, email, type of leave, date range, number of days off, and additional details to ensure comprehensive leave planning.",
        "A detailed corporate dashboard displays various metrics including top leave takers, types of leave taken, and declined requests per employee, effectively visualizing human resources data to aid in management decisions. The dashboard uses bar graphs and a pie chart to break down leave statistics by individual and category.",
        "detailed calendar display of employee leave requests for a month, marking out individual time-offs and holidays, ensuring a clear visual representation of staff availability and planned absences. The layout provides an efficient overview for management and team coordination.",
      ],
      image:
        "images/portfolio/hr/image-10.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-10.png"],
        ["images/portfolio/hr/image-11.png"],
        ["images/portfolio/hr/image-22.png"],
        ["images/portfolio/hr/image-23.png"],
        ["images/portfolio/hr/image-8.png"],
        ["images/portfolio/hr/image-9.png"],
      ]
    },
    {
      section: "Leave Management",
      title: [
        "Employee Leave Management Dashboard",
        "Leave Request Management System",
        "Employee Leave Form Submission Interface",
        "Analyzing Employee Leave Patterns",
        "Organized Leave Schedule",
        "Scheduled Holidays Overview",
      ],
      description: [

        "A comprehensive interface displaying various sections related to employee leave management, including pending approval requests, leave allowances, and a summary of remaining leaves per employee, which supports efficient tracking and decision-making for HR departments.",
        "An organized leave request platform showcasing different sections for 'Leave Requests Pending Approval by Management', 'Approved', and 'Request Declined'. This system details each request with information such as requester, type of leave, period, and approval status, providing a clear view of employee leave management.",
        "An intuitive leave request form designed for employees to submit requests for annual, business, or sick leave. The form includes fields for company ID, employee name, email, type of leave, date range, number of days off, and additional details to ensure comprehensive leave planning.",
        "A detailed corporate dashboard displays various metrics including top leave takers, types of leave taken, and declined requests per employee, effectively visualizing human resources data to aid in management decisions. The dashboard uses bar graphs and a pie chart to break down leave statistics by individual and category.",
        "detailed calendar display of employee leave requests for a month, marking out individual time-offs and holidays, ensuring a clear visual representation of staff availability and planned absences. The layout provides an efficient overview for management and team coordination.",
        "A detailed list of upcoming public holidays presented in an organized format, showing the specific dates and days of the week for each holiday, facilitating advanced planning and scheduling.",

      ],
      image:
        "images/portfolio/hr/image-11.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-11.png"],
        ["images/portfolio/hr/image-22.png"],
        ["images/portfolio/hr/image-23.png"],
        ["images/portfolio/hr/image-8.png"],
        ["images/portfolio/hr/image-9.png"],
        ["images/portfolio/hr/image-10.png"],
      ]
    },
    {
      section: "Leave Management",
      title: [
        "Leave Request Management System",
        "Employee Leave Form Submission Interface",
        "Analyzing Employee Leave Patterns",
        "Organized Leave Schedule",
        "Scheduled Holidays Overview",
        "Employee Leave Management Dashboard",
      ],
      description: [

        "An organized leave request platform showcasing different sections for 'Leave Requests Pending Approval by Management', 'Approved', and 'Request Declined'. This system details each request with information such as requester, type of leave, period, and approval status, providing a clear view of employee leave management.",
        "An intuitive leave request form designed for employees to submit requests for annual, business, or sick leave. The form includes fields for company ID, employee name, email, type of leave, date range, number of days off, and additional details to ensure comprehensive leave planning.",
        "A detailed corporate dashboard displays various metrics including top leave takers, types of leave taken, and declined requests per employee, effectively visualizing human resources data to aid in management decisions. The dashboard uses bar graphs and a pie chart to break down leave statistics by individual and category.",
        "detailed calendar display of employee leave requests for a month, marking out individual time-offs and holidays, ensuring a clear visual representation of staff availability and planned absences. The layout provides an efficient overview for management and team coordination.",
        "A detailed list of upcoming public holidays presented in an organized format, showing the specific dates and days of the week for each holiday, facilitating advanced planning and scheduling.",
        "A comprehensive interface displaying various sections related to employee leave management, including pending approval requests, leave allowances, and a summary of remaining leaves per employee, which supports efficient tracking and decision-making for HR departments.",

      ],
      image:
        "images/portfolio/hr/image-22.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-22.png"],
        ["images/portfolio/hr/image-23.png"],
        ["images/portfolio/hr/image-8.png"],
        ["images/portfolio/hr/image-9.png"],
        ["images/portfolio/hr/image-10.png"],
        ["images/portfolio/hr/image-11.png"],
      ]
    },
    {
      section: "Leave Management",
      title: [
        "Employee Leave Form Submission Interface",
        "Analyzing Employee Leave Patterns",
        "Organized Leave Schedule",
        "Scheduled Holidays Overview",
        "Employee Leave Management Dashboard",
        "Leave Request Management System",
      ],
      description: [
        "An intuitive leave request form designed for employees to submit requests for annual, business, or sick leave. The form includes fields for company ID, employee name, email, type of leave, date range, number of days off, and additional details to ensure comprehensive leave planning.",
        "A detailed corporate dashboard displays various metrics including top leave takers, types of leave taken, and declined requests per employee, effectively visualizing human resources data to aid in management decisions. The dashboard uses bar graphs and a pie chart to break down leave statistics by individual and category.",
        "detailed calendar display of employee leave requests for a month, marking out individual time-offs and holidays, ensuring a clear visual representation of staff availability and planned absences. The layout provides an efficient overview for management and team coordination.",
        "A detailed list of upcoming public holidays presented in an organized format, showing the specific dates and days of the week for each holiday, facilitating advanced planning and scheduling.",
        "A comprehensive interface displaying various sections related to employee leave management, including pending approval requests, leave allowances, and a summary of remaining leaves per employee, which supports efficient tracking and decision-making for HR departments.",
        "An organized leave request platform showcasing different sections for 'Leave Requests Pending Approval by Management', 'Approved', and 'Request Declined'. This system details each request with information such as requester, type of leave, period, and approval status, providing a clear view of employee leave management.",
      ],
      image:
        "images/portfolio/hr/image-23.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-23.png"],
        ["images/portfolio/hr/image-8.png"],
        ["images/portfolio/hr/image-9.png"],
        ["images/portfolio/hr/image-10.png"],
        ["images/portfolio/hr/image-11.png"],
        ["images/portfolio/hr/image-22.png"],
      ]
    },


    {
      section: "Onboarding/Offboarding",
      title: [
        "Employee Onboarding Status Dashboard",
      ],
      description: [
        "A detailed view of an employee onboarding dashboard, illustrating various employees' onboarding stages, start dates, progress bars, positions, departments, and status of essential documents such as offer letters, contracts, and company policies. This interface helps track the onboarding progress effectively.",

      ],
      image:
        "images/portfolio/hr/image-24.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-24.png"],

      ]
    },



    {
      section: "Performance Indicators",
      title: [
        "HR Key Performance Indicators Dashboard",
      ],
      description: [
        "An extensive HR KPI dashboard for tracking and evaluating various performance metrics for 2023. This interface displays KPIs such as employee turnover, satisfaction, recruitment costs, time-to-fill positions, and more, each with a status update indicating if they are on track, need attention, or exceed targets.",

      ],
      image:
        "images/portfolio/hr/image-21.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-21.png"],

      ]
    },







    {
      section: "Recruitment",
      title: [
        "Candidate overview",
        "Navigating Talent: An Applicant Tracking System",
        "Contract Management Workflow",
        "Employee Contract Detail View",
      ],
      description: [
        "A digital interface displays the profile of a job applicant, highlighting their application for a Social Media Manager position, sourced from LinkedIn, with detailed sections including contact details, application status, CV insights, and interview notes. The page also features AI-driven results evaluating their strengths and suitability for the role.",
        "A screenshot of an applicant tracking board, displaying various stages of the recruitment process such as new applications, review, interviews, and hiring outcomes. The board meticulously categorizes candidates by job titles, sources, and application dates, enhancing the recruitment workflow.",
        "An interactive dashboard showing the contract management process across different stages, including new requests, contracts sent, and signed agreements. This dashboard also provides detailed insights into each employee’s position, department, salary details, and contract start dates.",
        "A detailed profile view of an employee, showcasing contract information such as start date, salary, job duties, and supervisory details, alongside options to generate and manage the contract status.",

      ],
      image:
        "images/portfolio/hr/image-7.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-7.png"],
        ["images/portfolio/hr/image-6.png"],
        ["images/portfolio/hr/image-12.png"],
        ["images/portfolio/hr/image-13.png"],

      ]
    },

    {
      section: "Recruitment",
      title: [

        "Navigating Talent: An Applicant Tracking System",
        "Contract Management Workflow",
        "Employee Contract Detail View",
        "Candidate overview",
      ],
      description: [

        "A screenshot of an applicant tracking board, displaying various stages of the recruitment process such as new applications, review, interviews, and hiring outcomes. The board meticulously categorizes candidates by job titles, sources, and application dates, enhancing the recruitment workflow.",
        "An interactive dashboard showing the contract management process across different stages, including new requests, contracts sent, and signed agreements. This dashboard also provides detailed insights into each employee’s position, department, salary details, and contract start dates.",
        "A detailed profile view of an employee, showcasing contract information such as start date, salary, job duties, and supervisory details, alongside options to generate and manage the contract status.",
        "A digital interface displays the profile of a job applicant, highlighting their application for a Social Media Manager position, sourced from LinkedIn, with detailed sections including contact details, application status, CV insights, and interview notes. The page also features AI-driven results evaluating their strengths and suitability for the role.",
      ],
      image:
        "images/portfolio/hr/image-6.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-6.png"],
        ["images/portfolio/hr/image-12.png"],
        ["images/portfolio/hr/image-13.png"],
        ["images/portfolio/hr/image-7.png"],

      ]
    },

    {
      section: "Recruitment",
      title: [

        "Contract Management Workflow",
        "Employee Contract Detail View",
        "Candidate overview",
        "Navigating Talent: An Applicant Tracking System",
      ],
      description: [

        "An interactive dashboard showing the contract management process across different stages, including new requests, contracts sent, and signed agreements. This dashboard also provides detailed insights into each employee’s position, department, salary details, and contract start dates.",
        "A detailed profile view of an employee, showcasing contract information such as start date, salary, job duties, and supervisory details, alongside options to generate and manage the contract status.",
        "A digital interface displays the profile of a job applicant, highlighting their application for a Social Media Manager position, sourced from LinkedIn, with detailed sections including contact details, application status, CV insights, and interview notes. The page also features AI-driven results evaluating their strengths and suitability for the role.",
        "A screenshot of an applicant tracking board, displaying various stages of the recruitment process such as new applications, review, interviews, and hiring outcomes. The board meticulously categorizes candidates by job titles, sources, and application dates, enhancing the recruitment workflow.",
      ],
      image:
        "images/portfolio/hr/image-12.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-12.png"],
        ["images/portfolio/hr/image-13.png"],
        ["images/portfolio/hr/image-7.png"],
        ["images/portfolio/hr/image-6.png"],

      ]
    },

    {
      section: "Recruitment",
      title: [
        "Employee Contract Detail View",
        "Candidate overview",
        "Navigating Talent: An Applicant Tracking System",
        "Contract Management Workflow",
      ],
      description: [

        "A detailed profile view of an employee, showcasing contract information such as start date, salary, job duties, and supervisory details, alongside options to generate and manage the contract status.",
        "A digital interface displays the profile of a job applicant, highlighting their application for a Social Media Manager position, sourced from LinkedIn, with detailed sections including contact details, application status, CV insights, and interview notes. The page also features AI-driven results evaluating their strengths and suitability for the role.",
        "A screenshot of an applicant tracking board, displaying various stages of the recruitment process such as new applications, review, interviews, and hiring outcomes. The board meticulously categorizes candidates by job titles, sources, and application dates, enhancing the recruitment workflow.",
        "An interactive dashboard showing the contract management process across different stages, including new requests, contracts sent, and signed agreements. This dashboard also provides detailed insights into each employee’s position, department, salary details, and contract start dates.",
      ],
      image:
        "images/portfolio/hr/image-13.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-13.png"],
        ["images/portfolio/hr/image-7.png"],
        ["images/portfolio/hr/image-6.png"],
        ["images/portfolio/hr/image-12.png"],

      ]
    },









    {
      section: "Others",
      title: [
        "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3"
      ],
      description: [
        "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees."
      ],
      image:
        "images/portfolio/hr/image-1.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"]
      ]
    },
    {
      section: "Others",

      title: [

        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3", "Dashboard 2- Resource Allocation Management 1",
      ],
      description: [
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees.",
        "Analysis of the time spent by each team members on specific projects and the combined effort.",

      ],
      image:
        "images/portfolio/hr/image-2.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"],
        ["images/portfolio/hr/image-1.png"]
      ]
    },
    {
      section: "Others",

      title: [

        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3", "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
      ],
      description: [

        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees."
        , "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",],
      image:
        "images/portfolio/hr/image-3.png",

      imagesCarousel: [

        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"], ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
      ]
    },
    {
      section: "Others",

      title: [

        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3", "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
      ],
      description: [

        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees."
        , "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",],
      image:
        "images/portfolio/hr/image-4.png",

      imagesCarousel: [

        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"], ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
      ]
    },
    {
      section: "Others",

      title: ["Resource Allocation Management 3",
        "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",

      ],
      description: ["Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees.",

        "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
      ],
      image:
        "images/portfolio/hr/image-5.png",

      imagesCarousel: [
        ["images/portfolio/hr/image-5.png"],
        ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
      ]
    },








  ];
  const determineLabel = (titles: string[]) => {
    const firstTitle = titles[0]; // Récupérer le premier titre
    if (firstTitle.includes("Employee")) {
      return "Employee's Management";
    } else if (firstTitle.includes("Survey")) {
      return "Employee's Surveys";
    } else if (firstTitle.includes("ok")) {
      return "ok";
    } else if (firstTitle.includes("test")) {
      return "test";
    } else {
      return "Other";
    }
  };


  const groupProjectsBySection = (projects: any[]) => {
    const projectsBySection: { [key: string]: any[] } = {};
    projects.forEach(project => {
      const section = project.section;
      if (!projectsBySection[section]) {
        projectsBySection[section] = [];
      }
      projectsBySection[section].push(project);
    });
    return projectsBySection;
  };
  const projectsBySection = groupProjectsBySection(projects);

  return (
    <div className="p-4">
      {Object.entries(projectsBySection).map(([section, projects]) => (
        <div key={section}>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 mt-8 ml-8 md:ml-32">{section}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}