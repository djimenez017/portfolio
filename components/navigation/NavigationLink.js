import Link from "next/link";

export default function NavigationLink({
  href,
  children,
  onClick,
  className = "",
  scrolled = false,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        px-2 py-1
        font-bold
        transition-all
        duration-300
        uppercase
        tracking-wide
        text-orange
        hover:text-black hover:bg-orange
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
