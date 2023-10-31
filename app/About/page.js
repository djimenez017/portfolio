import CareerAccordion from "@/components/ui/CareerAccordion";

export default function page() {
  return (
    <div className="flex flex-col lg:flex-row ">
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
          Javascript, React.
        </p>
        <br />
        <br />
        <CareerAccordion />
      </div>
    </div>
  );
}
