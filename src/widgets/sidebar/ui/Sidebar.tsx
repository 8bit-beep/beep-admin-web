"use client";

import CalendarIcon from "@/shared/icons/CalendarIcon";
import ExcludedIcon from "@/shared/icons/ExcludedIcon";
import LabIcon from "@/shared/icons/LabIcon";
import OkIcon from "@/shared/icons/OkIcon";
import PersonIcon from "@/shared/icons/PersonIcon";
import Image from "next/image";
import NavItem from "./NavItem";
import { Link } from "@cher1shrxd/loading";

const ROUTES = [
  { label: "실 조정", path: "/", icon: <LabIcon size={16} /> },
  {
    label: "체크포인트 조정",
    path: "/checkpoints",
    icon: <CalendarIcon size={16} />,
  },
  { label: "학생 관리", path: "/students", icon: <PersonIcon size={16} /> },
  {
    label: "계정 블랙리스트",
    path: "/blacklists",
    icon: <ExcludedIcon size={16} />,
  },
  { label: "출석 종류", path: "/attend-types", icon: <OkIcon size={16} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-[15%] min-w-45 max-w-70 h-screen bg-static-white shadow-modal px-5.5 py-13.75 flex flex-col items-center gap-9">
      <Link href="/">
        <Image src="/logo.svg" width={47} height={43} alt="삑" />
      </Link>
      <nav className="w-full flex flex-col items-start">
        <h2 className="text-greyscale-60 my-0.75 text-caption2">관리 메뉴</h2>
        {ROUTES.map(({ label, path, icon }) => (
          <NavItem icon={icon} label={label} path={path} key={path} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
