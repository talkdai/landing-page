import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { MenuItem } from "./MenuItem";
import { Container } from "./container";

export function Header (){
    return(
        <header className="flex justify-between items-center w-full h-20 bg-black px-8" style={{ marginTop: 80 }}>
            <Image
                src={Logo}
                alt={Logo}
            />
            <Container>
                <div className="bg-dark-blue p-2 rounded-md">
                    <ul className="flex items-center gap-3">
                        <li className=" text-primary-purple">
                            <MenuItem
                                name="Home"
                            />
                        </li>
                        <li className=" text-white">
                            <MenuItem
                                name="About"
                            />
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    )
}
