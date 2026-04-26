import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header({className}: {className?: string}) {
  const navMenu = [
    {
      name: "Class",
      href: "/",
    },
    {
      name: "Timetable",
      href: "/timetable",
    },
    {
      name: "Space",
      href: "/space",
    },
    {
      name: "Membership",
      href: "/membership",
    },
    {
      name: "Locations",
      href: "/location",
    },
  ];

  return (
    <header className={`flex items-center justify-between bg-transparent absolute top-0 left-0 w-full z-10 ${className}`}>
      <div className="flex items-center">
        <Image
          src="/logo/logo.svg"
          alt="Fitlife GYM Logo"
          width={21}
          height={28}
        />
        <h1 className="text-xl font-bold text-white ml-2">FITLIFE GYM</h1>
      </div>
      <div>
        <nav className="mt-4">
          <ul className="flex space-x-6">
            {navMenu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="link"
          className="bg-none text-white py-5 px-5 rounded-full"
        >
          Login
        </Button>
        <Button className="bg-white text-black py-5 px-5 rounded-full">
          Start Free Trial
        </Button>
      </div>
    </header>
  );
}
