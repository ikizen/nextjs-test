import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="flex justify-end p-6">
      <div className="flex space-x-4">
        <Link className="md:block hidden" href="/">
          <div className="px-4 py-1">Home</div>
        </Link>
        <Link className="md:block hidden" href="/saved">
          <div className="px-4 py-1">Saved</div>
        </Link>
        <div className="flex justify-center items-center">
          <ThemeSwitch />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link className="" href="/">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="" href="/saved">
                Saved
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
