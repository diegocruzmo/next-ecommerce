import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { footerData } from "./Footer.data";

export const Footer = () => {
  return (
    <footer className="p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <div className="sm:flex sm:justify-between sm:items-center">
        <p className="text-xl mb-2">
          Coffee <span className="font-bold">Shop</span>
        </p>

        <ul className="flex flex-col sm:flex-row sm:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          {footerData.map(({ id, title, link }) => (
            <li key={id} className="sm:ml-4 sm:justify-end">
              <Link href={link} className="sm:ml-4 hover:underline md:ml-6">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Separator className="my-4 border-gray-200 dark:border-gray-700" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; 2025 Coffee Shop
      </span>
    </footer>
  );
};
