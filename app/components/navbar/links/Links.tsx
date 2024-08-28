import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { handleLogin, handleLogout } from "@/lib/action";

function Links({ session }: any) {
  const isAdmin = true;
  return (
    <>
      <NavLink item={{ name: "Home", href: "/" }} />
      <NavLink item={{ name: "Saved", href: "/saved" }} />

      {session ? (
        <>
          {session.user?.isAdmin && (
            <NavLink item={{ name: "Admin", href: "/admin" }} />
          )}
          <form className="" action={handleLogout} method="">
            <button>Log out</button>
          </form>
        </>
      ) : (
        <NavLink item={{ name: "Login", href: "/login" }} />
      )}
    </>
  );
}

export default Links;
