import Landing from "@/components/sections/Landing";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    // md:w-[1200px]
    <main className=" mx-auto md:min-w-1200 ">
      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center md:w-[1200px]"
        id="Home"
      >
        <Landing />
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center md:w-[1200px]"
        id="About"
      >
        <About />
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center md:w-[1200px]"
        id="Projects"
      >
        <Projects />
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center md:w-[1200px]"
        id="Blog"
      >
        Blog
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center md:w-[1200px]"
        id="Contact"
      >
        Contact
      </section>
    </main>
  );
}
