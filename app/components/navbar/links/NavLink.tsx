import React from "react";
import Link from "next/link";

interface Navlink {
  item: {
    name: string;
    href: string;
  };
}

function NavLink({ item }: Navlink) {
  return (
    <>
      <Link className="md:block hidden" href={item.href}>
        <div className="px-4 py-1">{item.name}</div>
      </Link>
    </>
  );
}

export default NavLink;
