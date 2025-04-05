import Expense from "@/assets/images/Projects/expenses.gif";
import Lemon from "@/assets/images/Projects/LittleLemon.png";
import JMG from "@/assets/images/Projects/jmg.png";

const projects = [
  {
    title: "Expense App",
    slug: "expense-app",
    image: Expense,
    id: 1,
    url: "https://expenses.jimenez.tech/",
    github: "https://github.com/djimenez017/expenseapp-fe",
    github2: "https://github.com/djimenez017/expenseapp-be",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Apollo Client",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "Railway",
    ],
    description:
      "A CRUD application to track expenses, built to gain experience with back-end development and GraphQL APIs.",
  },
  {
    title: "Little Lemon",
    slug: "little-lemon",
    image: Lemon,
    id: 2,
    url: null,
    github: "https://github.com/djimenez017/react-capstone-project",
    tech: ["React", "CSS", "Netlify"],
    description:
      "Final project for the Meta Front-End Developer Certificate. A responsive restaurant site for the fictitious brand Little Lemon.",
  },
  {
    title: "JMG Photography",
    slug: "jmg-photography",
    image: JMG,
    id: 3,
    url: "https://jmg13.com/",
    github: "https://github.com/djimenez017/JMGPhotography",
    tech: ["React", "Styled Components", "Gatsby", "Netlify"],
    description:
      "Final project for my college Web Design class. A business website for a real-world client in the photography space.",
  },
];

export default projects;
