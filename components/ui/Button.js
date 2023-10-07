import Link from "next/link";

function Button({ children }) {
  return (
    <button className="border-2 border-orange  px-8 py-2 text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out font-custom text-xl">
      <Link href="/"> {children}</Link>
    </button>
  );
}

export default Button;
