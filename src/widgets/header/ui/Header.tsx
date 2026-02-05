"use client";

import SearchBar from "@/features/search/ui/SearchBar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex items-center gap-4 pt-16 mb-6 px-[70px] xl:hidden shrink-0">
      <Image width={40} height={40} src="/logo.svg" alt="logo" />
      <SearchBar onlyMobile={true} />
    </header>
  );
};

export default Header;
