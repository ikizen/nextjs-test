import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex justify-end p-4 text-gray-700">
      <div className="flex space-x-4 dark:text-cyan-500 ">
        <div>
          <Link href="/">
            <div className="px-4 py-1   hover:text-white ">Home</div>
          </Link>
        </div>
        <div>
          <Link href="/saved">
            <div className="px-4 py-1 hover:text-white ">Saved</div>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
