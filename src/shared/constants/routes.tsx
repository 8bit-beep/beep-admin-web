import CalendarIcon from "@/shared/icons/CalendarIcon";
import ExcludedIcon from "@/shared/icons/ExcludedIcon";
import LabIcon from "@/shared/icons/LabIcon";
import OkIcon from "@/shared/icons/OkIcon";
import PersonIcon from "@/shared/icons/PersonIcon";

export const ROUTES = [
  {
    label: "실 조정",
    path: "/",
    icon: <LabIcon size={24} />,
    mobileLabel: "실 조정",
  },
  {
    label: "체크포인트 조정",
    path: "/checkpoints",
    icon: <CalendarIcon size={24} />,
    mobileLabel: "체크포인트 조정",
  },
  {
    label: "학생 관리",
    path: "/students",
    icon: <PersonIcon size={24} />,
    mobileLabel: "학생 관리",
  },
  {
    label: "계정 블랙리스트",
    path: "/blacklists",
    icon: <ExcludedIcon size={24} />,
    mobileLabel: "계정 블랙리스트",
  },
  {
    label: "출석 종류",
    path: "/attend-types",
    icon: <OkIcon size={24} />,
    mobileLabel: "출석 종류",
  },
];
