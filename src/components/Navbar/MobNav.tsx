import Image from "next/image";
import logo from "@/assets/cklogo.png";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { RiSearch2Fill } from "react-icons/ri";
import { ThemeBtn } from "../theme/ThemeBtn";

const MobNav = () => {
  return (
    <div className="fixed bottom-0 bg-linear-to-t from-border/50 to-primary-foreground/50 rounded-t-full w-full h-18 flex items-center">
      <div className="rounded-t-full bg-background w-full m-0.5">
        <div className="flex justify-between px-8 py-1 items-center bg-linear-to-t from-primary-foreground/50 to-border/50 rounded-t-full  ">
          <Link href="/">
            <Image src={logo} width={60} height={60} alt="logo" />
          </Link>
          <div>
            <ul className="flex gap-5 items-center text-primary text-shadow-ring text-shadow-xs ">
              <li>
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href="/"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href="/products"
                >
                  products
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  contact us
                </Link>
              </li>
              <li>
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
              <li>
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  <FaHeart />
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl font-semibold capitalize hover:text-ring"
                  href=""
                >
                  <FaShoppingCart />
                </Link>
              </li>
              <li>
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
    </div>
  );
};

export default MobNav;
