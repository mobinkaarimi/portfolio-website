import HeaderItemType from "./types";
import logo from "@assets/icons/logo.svg";
export default function Header() {
  const headerData: HeaderItemType[] = [
    {
      id: 0,
      name: "HOME",
      link: "#",
    },
    {
      id: 1,
      name: "SKILLS",
      link: "#skills",
    },
    {
      id: 2,
      name: "EXPERIENCE",
      link: "#experience",
    },
    {
      id: 3,
      name: "TALK TO ME",
      link: "#contact-me",
    },
  ];

  function headerItemMapper(item: HeaderItemType) {
    return (
      <a
        key={item.id}
        href={item.link}
        className="text-sm lg:text-[18px] text-palette-primary-yellow font-medium font-palette-bold"
      >
        {item.name == "HOME" ? (
          <img className="w-auto h-6 object-cover" src={logo} />
        ) : (
          item.name
        )}
      </a>
    );
  }

  return (
    <head className="flex flex-row justify-center md:justify-start py-5  bg-palette-primary-gray z-30  border-b border-b-palette-primary-yellow sticky top-0">
      <nav className="flex flex-row  space-x-4 lg:space-x-10 justify-start items-center  relative px-10">
        {headerData.map(headerItemMapper)}
      </nav>
    </head>
  );
}
