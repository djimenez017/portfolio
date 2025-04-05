import CareerAccordion from "@/components/ui/CareerAccordion";

export const metadata = {
  title: "About Daniel Jimenez",
  description:
    "Web Developer with a passion for creating stunning and functional web applications",
};

export default function page() {
  return (
    <div className="flex flex-col lg:flex-row mt-5 ">
      <div className="w-10/12 lg:w-1/2 flex flex-col mx-auto ">
        <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange font-blackhawk">
          About
        </h2>

        <p>
          Im Daniel Jimenez a web developer with a background in IT systems,
          front-end development, and automation. I earned a Bachelor of Science
          in Computer Information Technology with a Minor in Graphic Design from
          California State University, Northridge. My passion for development
          began in my senior year during a web development course, where I
          discovered the joy of turning ideas into interactive, user-focused
          applications.
          <br />
          <br />
          After graduating, I started my career in IT support at Exact Staff.
          While my initial role was in Helpdesk, my knowledge of HTML and
          JavaScript quickly opened doors to collaborate with the companys Web
          Developer. I contributed to front-end projects and was eventually
          promoted to a dedicated Web Developer position — where I worked with
          technologies like React, TypeScript, and GraphQL to build tools that
          improved onboarding and operations.
        </p>
        <div>
          <br />
          <h3 className="text-xl lg:text-3xl font-bold py-6 text-orange font-blackhawk">
            Degrees and Certifications
          </h3>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
            <h3 className="text-xl lg:text-2xl font-bold py-2">
              California State University, Northridge
            </h3>
            <p className="text-xl">May 2012 - May 2018</p>
          </div>
          <br />
          <p>Bachelor of Science, Computer Information Technology</p>
        </div>
        <div>
          <br />
          <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
            <h3 className="text-xl lg:text-2xl font-bold py-2">Coursera</h3>
            <p className="text-xl"> Jan 2023 - Sep 2023</p>
          </div>
          <br />
          <p>Meta Front-End Developer Specialization</p>
        </div>
        <br />
        <br />
        <h3 className="text-xl lg:text-3xl font-bold py-6 text-orange font-blackhawk">
          Professional Experience
        </h3>
        <CareerAccordion />
      </div>
    </div>
  );
}
