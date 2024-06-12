import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Home<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href={'/contact'}>
            <Button className="bg-accent text-primary">Hire me</Button>
            </Link>
        </div>
        {/* Mobile */}
        <div className="xl:hidden">
            mobile nav
        </div>
      </div>
    </header>
  );
}

export default Header;
