import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-end p-4 text-gray-500">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <div className="px-4 py-1 hover:text-white ">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/saved">
            <div className="px-4 py-1 hover:text-white ">Saved</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
