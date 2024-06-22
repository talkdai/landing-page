"use client";

import Image from "next/image";
import Logo from "@/assets/Logo.svg";
// import { MenuItem } from "./MenuItem";
import { Menu } from "./Menu";
import { Container } from "./container";

export function Header (){
    return(
        <header className="flex justify-between items-center p-4 bg-black mx-[10px] md:mx-[122px] mt-[20px] md:mt-[50px]">
            <div className=" flex items-center">
            <Image src={Logo} alt="Logo" />
            </div>
            <Menu/>
            {/* <Container> */}
                {/* <div className="talkd-menu p-2 rounded-md">
                    <ul className="flex flex-col md:flex-row items-center gap-3">
                        <MenuItem name="Home"

                        subItems={[
                            {name:"About"},
                            {name: "Pricing"},
                        ]}
                        />
                        <li className=" hidden md:flex menu-item">
                        <MenuItem name="About" />
                        </li>
                        <li className=" hidden md:flex menu-item">
                        <MenuItem name="Pricing" />
                        </li>
                    </ul>
                </div> */}
            {/* </Container> */}
        </header>
    )
}

export default Header;