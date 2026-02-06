"use client";

import { usePathname } from "next/navigation";
import { Link } from "@cher1shrxd/loading";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  path: string;
}

const NavItem = ({ icon, label, path }: Props) => {
  const pathname = usePathname();

  return (
    <Link 
      href={path} 
      className={`${pathname === path ? "text-blue-light" : "text-static-black"} flex flex-col items-center justify-center gap-1 min-w-0`}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-[16px] whitespace-nowrap">{label}</p>
    </Link>
  );
};

export default NavItem;