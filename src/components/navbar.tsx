import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="justify-center flex gap-x-6 p-4">
      <Link
        href="/"
        className="p-2 rounded-md bg-blue-500 hover:bg-gray-600 text-white"
      >
        Flex + VisActor
      </Link>
      <Link
        href="/no-visactor"
        className="p-2 rounded-md bg-blue-500 hover:bg-gray-600 text-white"
      >
        Flex + No VisActor
      </Link>
      <Link
        href="/grid"
        className="p-2 rounded-md bg-blue-500 hover:bg-gray-600 text-white"
      >
        Grid + VisActor
      </Link>
    </nav>
  );
}
