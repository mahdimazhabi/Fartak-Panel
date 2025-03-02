import Container from "@/shared/common/Container";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";
import Logo from "@/assets/logo/logo.png";
const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="relative  w-full py-1 border-b-2 border-l-2 border-border border-black ">
      <Container
        className="flex items-center h-full justify-between  lg:max-w-full"
        maxWidth="5xl"
      >
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <MenuIcon />
        </Button>
        {/* Logo and Action Buttons */}
        <div className="w-[45px] h-[20px] flex items-center justify-center">
          <img src={Logo} alt="Logo sani" className=" object-contain" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
