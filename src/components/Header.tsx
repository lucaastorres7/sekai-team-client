import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const loggedIn = false;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 w-full">
      <div className="container flex items-center justify-between h-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 w-44">
          <Image src={"/mizuki.jpg"} width={40} height={40} alt="Mizuki logo" />
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Project SEKAI
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Team builder</p>
          </div>
        </div>

        <nav className="flex gap-12 text-gray-600 w-64">
          <Link className="hover:text-teal-600" href={"/characters"}>
            Characters
          </Link>
          <Link className="hover:text-teal-600" href={"/cards"}>
            Cards
          </Link>
          <Link className="hover:text-teal-600" href={"/teams"}>
            Teams
          </Link>
        </nav>

        <div className="w-28 text-gray-600">
          {loggedIn ? (
            <Link className="hover:text-teal-600" href={"/profile"}>
              Profile
            </Link>
          ) : (
            <Link className="hover:text-teal-600" href={"/login"}>
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
