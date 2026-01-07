"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const pathname = usePathname().toLowerCase();
  const menuItems = [
    { page: "Home", link: "/", selected: pathname === "/" },
    {
      page: "About",
      link: "/about",
      selected: pathname === "/about",
    },
  ];

  return (
    <nav className="rounded-md flex">
      {menuItems.map((item) => (
        <Link
          href={item.link}
          key={item.page}
          prefetch={true}
          className="items-center flex gap-2 pl-2 pr-2 py-2 md:pl-4 md:pr-4 md:py-3 md:max-w-[340px] md:h-[40px] data-[selected=true]:text-[var(--purple-text)]"
          data-selected={item.selected}
        >
          {item.page}
        </Link>
      ))}
    </nav>
  );
};
