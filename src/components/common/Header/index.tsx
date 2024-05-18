import HeaderItemType from "./types";
import styles from "./Header.module.css";
export default function Header() {
  const headerData: HeaderItemType[] = [
    {
      id: 0,
      name: "HOME",
      link: "./",
    },
    {
      id: 1,
      name: "ABOUT",
      link: "./",
    },
    {
      id: 2,
      name: "EXPERIENCE",
      link: "./",
    },
    {
      id: 3,
      name: "CONTACT ME",
      link: "./",
    },
  ];

  function headerItemMapper(item: HeaderItemType) {
    return (
      <a
        key={item.id}
        className="text-[32px] text-palette-primary-yellow font-bold font-palette-bold"
      >
        {item.name}
      </a>
    );
  }

  return (
    <nav className="flex flex-row lg:space-x-20 p-10 z-10">
      {headerData.map(headerItemMapper)}
    </nav>
  );
}
