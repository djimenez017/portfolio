import Landing from "@/components/sections/Landing";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="md:w-[1200px] mx-auto md:min-w-1200 ">
      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center"
        id="Home"
      >
        <Landing />
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center "
        id="About"
      >
        <About />
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center "
        id="Projects"
      >
        <Projects />
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center "
        id="Blog"
      >
        Blog
      </section>

      <section
        className="max-w-1280 h-screen max-h-[1080px] flex mx-auto items-center justify-center "
        id="Contact"
      >
        Contact
      </section>
    </main>
  );
}
