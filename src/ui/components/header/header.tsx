import { Logo } from "@/ui/components/logo/logo";
import { Menu } from "@/ui/components/menu/menu";

export function Header() {
  return (
    <header className="flex justify-between max-w-[1000px] mx-auto items-center p-4">
      <Logo />
      <Menu />
    </header>
  );
}

export default Header;
