import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-20 flex items-center bg-white">
      <div className="container mx-auto px-5">
        <Image width={90} height={38} src={"/logo.png"} alt="logo" />
      </div>
    </nav>
  );
}
