import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";

import { menuFormatsData } from "./Menu.data";

export const MenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent>
        <ul>
          {menuFormatsData.map(({ href, title }) => (
            <li key={title} className="py-2">
              <Link href={href} className="text-sm leading-none font-medium">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
