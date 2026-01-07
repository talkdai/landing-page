import logo from "@/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center p-2" href="/">
      <Image src={logo} alt="Talkd.ai logo" />
    </Link>
  );
}
