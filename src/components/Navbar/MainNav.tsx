import Image from "next/image";
import logo from "@/assets/cklogo.png";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="flex justify-between px-10 py-3 items-center">
      <div>
        <Image src={logo} width={60} height={60} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/products">products</Link>
          </li>
          <li>
            <Link href="">contact us</Link>
          </li>
          <li>
            <Link href="">about us</Link>
          </li>
          <li>
            <Link href="">s</Link>
          </li>
          <li>
            <Link href="">c</Link>
          </li>
          <li>
            <Link href="">w</Link>
          </li>
          <li>
            <Link href="">p</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
