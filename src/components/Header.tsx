import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { MenuItem } from "./MenuItem";
import { Container } from "./container";

export function Header (){
    return(
        <header className="flex justify-between items-center w-full h-20 bg-black px-8" style={{ marginTop: 50, paddingLeft: 122, paddingRight: 122}}>
            <Image src={Logo} alt={Logo} />
            <Container>
                <div className="talkd-menu p-2 rounded-md">
                    <ul className="flex items-center gap-3">
                        <MenuItem name="Home" isSelected />
                        <MenuItem name="About" />
                    </ul>
                </div>
            </Container>
        </header>
    )
}
