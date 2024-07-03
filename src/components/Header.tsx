"use client";

import { Menu } from "./Menu";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";

export function Header (){
    return(
        <header className="flex justify-between items-center p-4 bg-black mx-[10px] md:mx-[122px] mt-[20px] md:mt-[50px]">
            <div className="flex items-center">
            <Link href="/">

                        <Image src={Logo} alt="Logo" />
                </Link>
            </div>
            <Menu/>
        </header>
    )
}

export default Header;