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
          I Graduated from California State University, Northridge with a
          Bachelor of Science in Computer Information Technology with a Minor in
          Graphic Design. My passion for development began in my senior year in
          college, i took a web development class and i know at that point i
          wanted to change my career.
          <br />
          <br />
          My first job out of college was a IT Helpdesk position, but i was able
          to assist the Web Developer with many projects which increased and
          strenghtened my knowledge working with technologies such as
          Javascript, and ReactJS.
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
