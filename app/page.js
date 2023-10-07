import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="w-2/3 mx-auto  ">
      <section className="max-w-1280 h-screen max-h-[1080px] flex items-center justify-center mx-auto">
        <div className="w-1/2 flex flex-col items-start justify-center">
          <div className="mx-auto text-left">
            <p className="text-lightGrey text-lg">Hello there, my name is</p>
            <h1 className="text-7xl font-bold py-6 text-orange">
              Daniel Jimenez
            </h1>
            <p className="text-white text-xl">
              Front-end developer from Los Angeles, California
            </p>
            <br></br>
            <Button>Contact</Button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={Logo} width={350} height={350} alt="Daniel Jimenez" />
        </div>
      </section>
      <section className="h-screen max-h-[1080px] flex items-center" id="About">
        <About />
      </section>
      <section
        className="max-w-1280 h-screen max-h-[1080px] flex items-center justify-center mx-auto"
        id="Projects"
      >
        <Projects />
      </section>
      <section
        className="max-w-1280 h-screen max-h-[1080px] flex items-center justify-center mx-auto"
        id="Blog"
      >
        Blog
      </section>
      <section
        className="max-w-1280 h-screen max-h-[1080px] flex items-center justify-center mx-auto"
        id="Contact"
      >
        Contact
      </section>
    </main>
  );
}
