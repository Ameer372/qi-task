import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { t } from "i18next";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip } from "./ui/tooltip";

interface Props {
  onClick: () => void;
}

const LogoutButton = ({ onClick: handleLogout }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"outline"}
            onClick={handleLogout}
            className="hover:bg-red-500 hover:text-white hover:cursor-pointer"
          >
            <LogOut />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="p-2 m-2 border border-gray shadow rounded-2xl">
          <p className="text-sm font-semibold text-gray-600">{t("logout")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LogoutButton;
