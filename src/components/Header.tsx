import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { MenuItem } from "./MenuItem";
import { Container } from "./Container";

export function Header (){
    return(
        <header className="flex justify-between items-center w-full h-20 px-4 bg-black md:px-8" style={{ marginTop: 20}}>
            <Image src={Logo} alt={Logo} />
            <Container>
                <div className="talkd-menu p-2 rounded-md">
                    <ul className="flex flex-col md:flex-row items-center gap-3">
                        <MenuItem name="Home" isSelected />
                        {/* <MenuItem name="Pricing"/> */}
                        <MenuItem name="About" />
                    </ul>
                </div>
            </Container>
        </header>
    )
}
