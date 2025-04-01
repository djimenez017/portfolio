import Link from "next/link";

export default function NavigationLink(props) {
  return (
    <Link
      href={props.href}
      className="hover:text-orange transition"
      onClick={props.onClick}
      classes={props.className}
    >
      {props.children}
    </Link>
  );
}
