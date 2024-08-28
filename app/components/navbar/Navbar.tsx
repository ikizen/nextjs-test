import ThemeSwitch from "../ThemeSwitcher";
import { auth } from "@/lib/auth";
import MobileNavbar from "./MobileNavbar";
import Links from "./links/Links";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <nav className="flex justify-end p-6">
      <div className="flex space-x-4">
        <Links session={session} />
        <div className="flex justify-center items-center">
          <ThemeSwitch />
        </div>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
