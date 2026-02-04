"use client";

import CalendarIcon from "@/shared/icons/CalendarIcon";
import ExcludedIcon from "@/shared/icons/ExcludedIcon";
import LabIcon from "@/shared/icons/LabIcon";
import OkIcon from "@/shared/icons/OkIcon";
import PersonIcon from "@/shared/icons/PersonIcon";
import Image from "next/image";
import NavItem from "./NavItem";
import { Link } from "@cher1shrxd/loading";
import SearchBar from "@/features/search/ui/SearchBar";

const ROUTES = [
  { label: "실 조정", path: "/", icon: <LabIcon size={16} /> },
  { label: "체크포인트 조정", path: "/checkpoints", icon: <CalendarIcon size={16} /> },
  { label: "학생 관리", path: "/students", icon: <PersonIcon size={16} /> },
  { label: "계정 블랙리스트", path: "/blacklists", icon: <ExcludedIcon size={16} /> },
  { label: "출석 종류", path: "/attend-types", icon: <OkIcon size={16} /> },
];

const Sidebar = () => {
  return (
    <>
      {/* 사이드바 */}
      <aside className="hidden lg:flex w-[15%] min-w-45 max-w-70 h-screen bg-static-white shadow-modal px-5.5 py-13.75 flex-col items-center gap-9">
        <Link href="/">
          <Image src="/logo.svg" loading="eager" width={47} height={43} alt="삑" />
        </Link>

        <nav className="w-full flex flex-col items-start">
          <h2 className="text-greyscale-60 my-0.75 text-caption2">관리 메뉴</h2>
          {ROUTES.map(({ label, path, icon }) => (
            <NavItem icon={icon} label={label} path={path} key={path} />
          ))}
        </nav>
      </aside>

      <div className="fixed top-10 left-10 right-0 z-50 lg:hidden px-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src="/logo.svg" loading="eager" width={42} height={38} alt="삑" />
          </Link>

          <div className="w-[610px]">
            <SearchBar onlyMobile />
          </div>

        </div>
      </div>

      {/* 하단바 */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-static-white shadow-modal flex justify-evenly items-center px-4 py-2"
        style={{ height: 70 }}
      >
        {ROUTES.map(({ label, path, icon }) => (
          <Link key={path} href={path} className="flex flex-col items-center gap-1">
            {icon}
            <span className="text-caption2 text-greyscale-60">{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
