import Landing from "@/components/sections/Landing";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
// import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="mx-auto">
      <section
        className="max-w-screen-xl mx-auto h-screen flex items-center justify-center lg:w-5/6"
        id="Home"
      >
        <Landing />
      </section>

      <section
        className="max-w-screen-xl mx-auto h-screen flex items-center justify-center lg:w-5/6"
        id="About"
      >
        <About />
      </section>

      <section
        className="max-w-screen-xl mx-auto h-screen flex items-center justify-center lg:w-5/6"
        id="Projects"
      >
        <Projects />
      </section>

      {/* <section className="max-w-screen-xl mx-auto h-screen flex items-center justify-center lg:w-5/6" id="Blog">
        <Blog />
      </section> */}

      <section
        className="max-w-screen-xl mx-auto h-screen flex items-center justify-center lg:w-5/6"
        id="Contact"
      >
        <Contact />
      </section>
    </main>
  );
}
