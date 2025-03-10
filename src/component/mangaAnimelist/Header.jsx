import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="md:text-3xl text-xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-2xl text-blue-500 hover:text-blue-800 font-bold"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
