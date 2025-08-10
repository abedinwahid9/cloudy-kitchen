import Image from "next/image";
import logo from "@/assets/cklogo.png";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { RiSearch2Fill } from "react-icons/ri";
import { ThemeBtn } from "../theme/ThemeBtn";

const MainNav = () => {
  return (
    <nav className="fixed top-0 bg-linear-to-t from-border/50 to-primary-foreground/50 rounded-full mt-2  w-full md:h-16 md:block h-12 flex items-center">
      <div className="rounded-full bg-background w-full md:h-16 h-12 ">
        <div className="flex justify-between px-8 py-1 md:h-16 h-12 items-center bg-linear-to-t from-primary-foreground/50 to-border/50 rounded-full  ">
          <Link href="/">
            <Image
              className="md:w-14 md:h-14 w-10 h-10"
              src={logo}
              width={0}
              height={0}
              alt="logo"
            />
          </Link>
          <div>
            <ul className="flex gap-5 items-center text-primary text-shadow-ring text-shadow-xs ">
              <li className="hidden md:block">
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href="/"
                >
                  home
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href="/products"
                >
                  products
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  contact us
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  <RiSearch2Fill />
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  <FaHeart />
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  <FaShoppingCart />
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  className="text-xl font-semibold capitalize text-shadow-ring text-shadow-xs hover:text-ring"
                  href=""
                >
                  <FaUser />
                </Link>
              </li>
              <li>
                <ThemeBtn />
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
