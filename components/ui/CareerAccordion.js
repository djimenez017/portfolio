import React from "react";

export default function CareerAccordion() {
  return (
    <div>
      <details>
        <summary className="flex justify-between">
          <p className="text-orange text-xl">
            MedPOINT Management - Project Coordinator
          </p>
          <span>04/2022 - Present</span>
        </summary>{" "}
        <br />
        <ul>
          <li>
            {" "}
            • Leading and managing IT project teams to ensure successful
            delivery of projects within scope and timeline, while maintaining
            compliance with HIPAA regulations resulting in a 15% operational
            efficiency.{" "}
          </li>
          <li>
            {" "}
            • Worked closely with project stakeholders, including team members,
            vendors, and customers, to identify project requirements and manage
            expectations.{" "}
          </li>
          <li>
            {" "}
            • Created and maintained project plans, status reports, company
            policies, and other project-related documentation.
          </li>
          <li>
            {" "}
            • Conducted regular project team meetings to review project
            progress, address issues and risks, and assign action items
            resulting in an increase in project transparency and accuracy.
          </li>
          <li>
            {" "}
            • Collaborating with compliance and legal teams to ensure that all
            HIPAA-related policies and procedures are in place and being
            followed.
          </li>
        </ul>
      </details>
      <br />
      <details>
        <summary className="flex justify-between">
          <p className="text-orange text-xl">Exact Staff - Web Developer</p>
          <span>03/2020 - 04/22</span>
        </summary>
        <br />
        <ul>
          <li>
            {" "}
            • Designed and developed the front-end of a job board utilizing
            NextJS and GraphQL, resulting in increased engagement with
            associates and improved matching of candidates with employers.
          </li>
          <li>
            {" "}
            • Ensured compliance with California-required training and
            simplified onboarding for over 3,000 associates by maintaining and
            updating a training web portal using ReactJS, Typescript, and
            GraphQL.
          </li>
          <li>
            {" "}
            • Developed an Electron and React-based signage system to deliver
            daily updates on open positions across 20 offices.
          </li>
          <li>
            {" "}
            • Performed regular maintenance tasks, including bug fixes, updates,
            and security patches, on various websites and web applications,
            ensuring smooth functionality and optimal performance.
          </li>
          <li>
            {" "}
            • Maintained and updated the Exact Staff corporate website built
            with WordPress, achieving a 26% increase in conversion rate.
          </li>
        </ul>
      </details>{" "}
    </div>
  );
}
