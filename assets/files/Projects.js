import Expense from "@/assets/images/Projects/expenses.gif";
import Lemon from "@/assets/images/Projects/LittleLemon.png";

const projects = [
  {
    title: "Expense App",
    image: "Expense",
    id: 1,
    url: "https://expenses.jimenez.tech/",
    github: "https://github.com/djimenez017/expenseapp-fe",
    github2: "https://github.com/djimenez017/expenseapp-be",
    tech: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "ApolloJS",
      "GraphQL",
      "PrismaJS",
      "PostgreSQL",
      "Railway",
    ],
    description:
      "A CRUD application to track expenses. I wanted a way to track my expenses and wanted experience with back-end development, so naturally u built one.",
  },
  {
    title: "Little Lemon",
    image: "Little",
    id: 2,
    url: "",
    github: "https://github.com/djimenez017/react-capstone-project",
    github2: "",
    tech: ["ReactJS", "CSS"],
    description:
      "Final project for the Meta Front-End Developer Professional Certificate. This was a Website for the the ficticious restaurant Little Lemon.  ",
  },
];

export default projects;
