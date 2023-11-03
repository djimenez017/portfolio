import Link from "next/link";

function Button(props) {
  const flexClasses = props.flexDirection === "row" ? "flex-row" : "flex-col";
  const customClasses = props.customClasses || "";

  return (
    <Link href={props.href} target={props.target} download>
      <button
        className={`w-48 border-2 px-6 py-3 border-orange flex justify-around items-center text-orange cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out lg:text-lg ${flexClasses} ${customClasses}`}
      >
        <span>{props.children} </span>
        <p>{props.text}</p>
      </button>
    </Link>
  );
}

export default Button;
