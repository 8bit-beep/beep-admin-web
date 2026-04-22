"use client";

import Image from "next/image";
import NavItem from "./NavItem";
import { Link } from "@cher1shrxd/loading";
import { ROUTES } from "@/shared/constants/routes";

const Sidebar = () => {
  return (
    <>
      {/* 사이드바 */}
      <aside className="hidden xl:flex w-[15%] min-w-45 max-w-70 h-screen bg-static-white shadow-modal px-5.5 py-13.75 flex-col items-center gap-9">
        <Link href="/">
          <Image
            src="/logo.svg"
            loading="eager"
            width={47}
            height={43}
            alt="삑"
          />
        </Link>

        <nav className="w-full flex flex-col items-start">
          <h2 className="text-greyscale-60 my-0.75 text-caption2">관리 메뉴</h2>
          {ROUTES.map(({ label, path, icon }) => (
            <NavItem icon={icon} label={label} path={path} key={path} />
          ))}
        </nav>
      </aside>

    </>
  );
};

export default Sidebar;
