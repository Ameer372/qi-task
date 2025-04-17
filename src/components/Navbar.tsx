import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 ">
      <h1 className="text-xl font-bold cursor-pointer">Admin Dashboard</h1>

      <nav className="hidden md:flex space-x-4">
        <Button variant="ghost">Statistics</Button>
        <Button variant="ghost">Merchants</Button>
        <Button variant="ghost">Orders</Button>
        <ModeToggle />
        <Button variant="outline">Logout</Button>
      </nav>

      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              <Button variant="ghost">Statistics</Button>
              <Button variant="ghost">Merchants</Button>
              <Button variant="ghost">Orders</Button>
              <Button variant="outline">Logout</Button>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
