import Link from "next/link";
import { FaHeart, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiShop } from "react-icons/gi";

const MobNav = () => {
  return (
    <div className="fixed bottom-0 w-full h-14 flex justify-between px-8 py-1 items-center bg-linear-to-t from-border/70 to-primary-foreground/70 to-70% rounded-t-4xl  ">
      <ul className="flex justify-between gap-5 items-center text-primary text-shadow-ring text-shadow-xs w-full">
        <li>
          <Link
            className="text-2xl font-semibold capitalize hover:text-ring"
            href=""
          >
            <FaHome />
          </Link>
        </li>
        <li>
          <Link
            className="text-2xl font-semibold capitalize hover:text-ring"
            href=""
          >
            <GiShop />
          </Link>
        </li>
        <li>
          <Link
            className="text-2xl font-semibold capitalize hover:text-ring"
            href=""
          >
            <FaHeart />
          </Link>
        </li>
        <li>
          <Link
            className="text-2xl font-semibold capitalize hover:text-ring"
            href=""
          >
            <FaShoppingCart />
          </Link>
        </li>
        <li>
          <Link
            className="text-2xl font-semibold capitalize text-shadow-ring text-shadow-xs hover:text-ring"
            href=""
          >
            <FaUser />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobNav;
