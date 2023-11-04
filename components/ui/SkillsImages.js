import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoGraphql,
} from "react-icons/bi";
import { SiNextdotjs, SiApollographql, SiPrisma } from "react-icons/si";

export default function SkillsImages() {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-3 md:gap-9 gap-8 text-5xl md:text-8xl">
        <IconWithHoverHighlight icon={<FaHtml5 />} title="HTML" />
        <IconWithHoverHighlight icon={<FaCss3Alt />} title="CSS" />
        <IconWithHoverHighlight
          icon={<BiLogoTailwindCss />}
          title="TailwindCSS"
        />
        <IconWithHoverHighlight
          icon={<BiLogoJavascript />}
          title="Javascript"
        />
        <IconWithHoverHighlight icon={<FaReact />} title="ReactJS" />
        <IconWithHoverHighlight icon={<SiNextdotjs />} title="NextJS" />
        <IconWithHoverHighlight icon={<BiLogoGraphql />} title="GraphQL" />
        <IconWithHoverHighlight icon={<SiApollographql />} title="Apollo" />
        <IconWithHoverHighlight icon={<SiPrisma />} title="Prisma" />
      </div>
    </div>
  );
}

function IconWithHoverHighlight({ icon, title }) {
  return (
    <div
      className="group text-lightGrey hover:text-orange transition duration-300 ease-in-out"
      title={title}
    >
      {icon}
    </div>
  );
}
