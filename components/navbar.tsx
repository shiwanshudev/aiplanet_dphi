import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-20 flex items-center bg-white">
      <div className="container mx-auto px-5">
        <Link href="/">
          <Image width={90} height={38} src={"/logo.png"} alt="logo" />
        </Link>
      </div>
    </nav>
  );
}
