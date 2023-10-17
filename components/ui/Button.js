import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.href} target={props.target}>
      <button className="border-2 border-orange px-8 py-2 mr-3 mb-3 text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out font-custom lg:text-xl">
        {props.children}
      </button>
    </Link>
  );
}

export default Button;
