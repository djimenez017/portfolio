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
        <h2 className="text-2xl lg:text-5xl font-bold py-6 text-orange ">
          About
        </h2>
        <p>
          I earned my Bachelor of Science degree in Computer Information
          Technology with a Minor in Graphic Design from California State
          University, Northridge. My journey into the world of development
          commenced during my senior year of college when I enrolled in a web
          development course. It was during this time that I realized my passion
          for this field, prompting me to consider a career change.
          <br />
          <br />
          Upon graduating, my first job was in an IT Helpdesk position. While it
          wasn not directly related to web development, I actively supported the
          Web Developer on various projects. This hands-on experience
          significantly bolstered my proficiency with technologies like
          JavaScript and ReactJS, solidifying my commitment to the field of web
          development.
        </p>
        <div>
          <br />
          <h3 className="text-xl lg:text-3xl font-bold py-6 text-orange ">
            Credentials
          </h3>
        </div>
        <div>
          <div className="flex justify-between items-center ">
            <h3 className="text-xl lg:text-2xl font-bold py-6  ">
              California State University, Northridge
            </h3>
            <p className="text-xl">May 2012 - May 2018</p>
          </div>
          <p>Bachelor of Science, Computer Information Technology</p>
        </div>
        <div>
          <br />
          <div className="flex justify-between items-center ">
            <h3 className="text-xl lg:text-2xl font-bold py-6 ">Coursera</h3>
            <p className="text-xl"> Jan 2023 - Sep 2023</p>
          </div>
          <p>Meta Front-End Developer Specialization</p>
        </div>
        <br />
        <br />
        <h3 className="text-xl lg:text-3xl font-bold py-6 text-orange ">
          Work History
        </h3>
        <CareerAccordion />
      </div>
    </div>
  );
}
