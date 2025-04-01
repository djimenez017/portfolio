import React from "react";

export default function CareerAccordion() {
  return (
    <div>
      <details open>
        <summary className="flex flex-col md:flex-row md:justify-between md:items-center ">
          <p className=" text-xl">
            MedPOINT Management - System Administrator I
          </p>
          <span>04/2022 - Present</span>
        </summary>{" "}
        <br />
        <ul className="list-disc">
          <li className="marker:text-orange">
            Manage and maintain ESXi and vCenter infrastructure supporting
            1,000+ users in a highly available environment.
          </li>
          <li className="marker:text-orange">
            Implement and monitor Veeam backup solutions, ensuring secure,
            reliable data protection and disaster recovery.
          </li>
          <li className="marker:text-orange">
            Administer Microsoft 365 tenant, including Exchange, OneDrive,
            Intune, and Azure AD, improving collaboration and security.
          </li>
          <li className="marker:text-orange">
            Deploy and manage software for on-premises and remote environments
            using tools like PDQ Deploy and NinjaOne.
          </li>
          <li className="marker:text-orange">
            Maintain documentation supporting SOC 1/2 and HITRUST compliance
            audits.
          </li>
          <li className="marker:text-orange">
            Automate repetitive tasks using PowerShell to streamline user
            provisioning, device management, and reporting.
          </li>
        </ul>
      </details>
      <br />
      <details open>
        <summary className="flex flex-col md:flex-row md:justify-between md:items-center ">
          <p className="text-xl">Exact Staff - Web Developer</p>
          <span>03/2020 - 04/22</span>
        </summary>
        <br />
        <ul className="list-disc">
          <li className="marker:text-orange">
            Developed and maintained a job board front end using Next.js,
            enhancing user experience and engagement.
          </li>
          <li className="marker:text-orange">
            Built and supported a ReactJS-based employee training portal with
            TypeScript and GraphQL.
          </li>
          <li className="marker:text-orange">
            Writing SQL queries for generating reports and data insights used by
            executives and HR teams.
          </li>
          <li className="marker:text-orange">
            Supported IT operations including AD user account management,
            endpoint configuration, and basic networking.
          </li>
          <li className="marker:text-orange">
            Created internal tools and scripts to automate tasks, reducing
            manual workload and support requests.
          </li>
        </ul>
      </details>{" "}
    </div>
  );
}
