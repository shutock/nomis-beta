import Link from "next/link";

export default function Button({
  href = "#",
  className,
  target = "_blank",
  children,
}) {
  return (
    <Link
      href={href}
      className={className ? `button ${className}` : "button"}
      target={target}
    >
      {children}
    </Link>
  );
}
