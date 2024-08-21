import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex justify-end mt-9 p-4">
      <div className="flex space-x-4">
        <div>
          <Link href="/">
            <div className="px-4 py-1">Home</div>
          </Link>
        </div>
        <div>
          <Link href="/saved">
            <div className="px-4 py-1">Saved</div>
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
