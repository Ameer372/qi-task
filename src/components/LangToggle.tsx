import i18n from "@/locales/localization";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";

const LangToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Button onClick={() => i18n.changeLanguage("en")} variant="ghost">
            EN
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button onClick={() => i18n.changeLanguage("ar")} variant="ghost">
            Ar
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;
