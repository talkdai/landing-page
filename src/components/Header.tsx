import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { MenuItem } from "./MenuItem";
import { Container } from "./container";

export function Header (){
    return(
        <header className="flex justify-between items-center p-4 bg-black mx-[10px] md:mx-[122px] mt-[20px] md:mt-[50px]">
            <div className=" flex items-center">
            <Image src={Logo} alt="Logo" />
            </div>
            <Container>
                <div className="talkd-menu p-2 rounded-md">
                    <ul className="flex flex-col md:flex-row items-center gap-3">
                        <MenuItem name="Home" isSelected/>
                        {/* <MenuItem name="Pricing" isNotSelected/> */}
                        <MenuItem name="About" isNotSelected />
                    </ul>
                </div>
            </Container>
        </header>
    )
}