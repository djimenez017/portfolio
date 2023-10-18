import Link from "next/link";

function Button(props) {
  const flexClasses = props.flexDirection === "row" ? "flex-row" : "flex-col";
  const customClasses = props.customClasses || "";

  return (
    <Link href={props.href} target={props.target}>
      <button
        className={`w-48 border-2 px-8 py-3 border-orange flex justify-around items-center text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out font-custom lg:text-xl ${flexClasses} ${customClasses}`}
      >
        <span>{props.children} </span>
        <p>{props.text}</p>
      </button>
    </Link>
  );
}

export default Button;
